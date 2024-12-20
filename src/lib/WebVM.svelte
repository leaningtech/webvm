<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import Nav from 'labs/packages/global-navbar/src/Nav.svelte';
	import SideBar from '$lib/SideBar.svelte';
	import '$lib/global.css';
	import '@xterm/xterm/css/xterm.css'
	import '@fortawesome/fontawesome-free/css/all.min.css'
	import { networkInterface, startLogin } from '$lib/network.js'
	import { cpuActivity, diskActivity, cpuPercentage, diskLatency } from '$lib/activities.js'
	import { introMessage, errorMessage, unexpectedErrorMessage } from '$lib/messages.js'
	import { displayConfig } from '$lib/anthropic.js'

	export let configObj = null;
	export let processCallback = null;
	export let cacheId = null;
	export let cpuActivityEvents = [];
	export let diskLatencies = [];
	export let activityEventsInterval = 0;

	var term = null;
	var cx = null;
	var fitAddon = null;
	var cxReadFunc = null;
	var blockCache = null;
	var processCount = 0;
	var curVT = 0;
	var lastScreenshot = null;
	var screenshotCanvas = null;
	var screenshotCtx = null;
	function writeData(buf, vt)
	{
		if(vt != 1)
			return;
		term.write(new Uint8Array(buf));
	}
	function readData(str)
	{
		if(cxReadFunc == null)
			return;
		for(var i=0;i<str.length;i++)
			cxReadFunc(str.charCodeAt(i));
	}
	function printMessage(msg)
	{
		for(var i=0;i<msg.length;i++)
			term.write(msg[i] + "\n");
	}
	function expireEvents(list, curTime, limitTime)
	{
		while(list.length > 1)
		{
			if(list[1].t < limitTime)
			{
				list.shift();
			}
			else
			{
				break;
			}
		}
	}
	function cleanupEvents()
	{
		var curTime = Date.now();
		var limitTime = curTime - 10000;
		expireEvents(cpuActivityEvents, curTime, limitTime);
		computeCpuActivity(curTime, limitTime);
		if(cpuActivityEvents.length == 0)
		{
			clearInterval(activityEventsInterval);
			activityEventsInterval = 0;
		}
	}
	function computeCpuActivity(curTime, limitTime)
	{
		var totalActiveTime = 0;
		var lastActiveTime = limitTime;
		var lastWasActive = false;
		for(var i=0;i<cpuActivityEvents.length;i++)
		{
			var e = cpuActivityEvents[i];
			// NOTE: The first event could be before the limit,
			//       we need at least one event to correctly mark
			//       active time when there is long time under load
			var eTime = e.t;
			if(eTime < limitTime)
				eTime = limitTime;
			if(e.state == "ready")
			{
				// Inactive state, add the time from lastActiveTime
				totalActiveTime += (eTime - lastActiveTime);
				lastWasActive = false;
			}
			else
			{
				// Active state
				lastActiveTime = eTime;
				lastWasActive = true;
			}
		}
		// Add the last interval if needed
		if(lastWasActive)
		{
			totalActiveTime += (curTime - lastActiveTime);
		}
		cpuPercentage.set(Math.ceil((totalActiveTime / 10000) * 100));
	}
	function hddCallback(state)
	{
		diskActivity.set(state != "ready");
	}
	function latencyCallback(latency)
	{
		diskLatencies.push(latency);
		if(diskLatencies.length > 30)
			diskLatencies.shift();
		// Average the latency over at most 30 blocks
		var total = 0;
		for(var i=0;i<diskLatencies.length;i++)
			total += diskLatencies[i];
		var avg = total / diskLatencies.length;
		diskLatency.set(Math.ceil(avg));
	}
	function cpuCallback(state)
	{
		cpuActivity.set(state != "ready");
		var curTime = Date.now();
		var limitTime = curTime - 10000;
		expireEvents(cpuActivityEvents, curTime, limitTime);
		cpuActivityEvents.push({t: curTime, state: state});
		computeCpuActivity(curTime, limitTime);
		// Start an interval timer to cleanup old samples when no further activity is received
		if(activityEventsInterval != 0)
			clearInterval(activityEventsInterval);
		activityEventsInterval = setInterval(cleanupEvents, 2000);
	}
	function computeXTermFontSize()
	{
		return parseInt(getComputedStyle(document.body).fontSize);
	}
	function setScreenSize(display)
	{
		var internalMult = 1.0;
		var displayWidth = display.offsetWidth;
		var displayHeight = display.offsetHeight;
		var minWidth = 1024;
		var minHeight = 768;
		if(displayWidth < minWidth)
			internalMult = minWidth / displayWidth;
		if(displayHeight < minHeight)
			internalMult = Math.max(internalMult, minHeight / displayHeight);
		var internalWidth = Math.floor(displayWidth * internalMult);
		var internalHeight = Math.floor(displayHeight * internalMult);
		cx.setKmsCanvas(display, internalWidth, internalHeight);
		// Compute the size to be used for AI screenshots
		var screenshotMult = 1.0;
		var maxWidth = 1024;
		var maxHeight = 768;
		if(internalWidth > maxWidth)
			screenshotMult = maxWidth / internalWidth;
		if(internalHeight > maxHeight)
			screenshotMult = Math.min(screenshotMult, maxHeight / internalHeight);
		var screenshotWidth = Math.floor(internalWidth * screenshotMult);
		var screenshotHeight = Math.floor(internalHeight * screenshotMult);
		// Track the state of the mouse as requested by the AI, to avoid losing the position due to user movement
		displayConfig.set({width: screenshotWidth, height: screenshotHeight, mouseX: 0, mouseY: 0, mouseMult: internalMult * screenshotMult});
	}
	var curInnerWidth = 0;
	var curInnerHeight = 0;
	function handleResize()
	{
		// Avoid spurious resize events caused by the soft keyboard
		if(curInnerWidth == window.innerWidth && curInnerHeight == window.innerHeight)
			return;
		curInnerWidth = window.innerWidth;
		curInnerHeight = window.innerHeight;
		term.options.fontSize = computeXTermFontSize();
		fitAddon.fit();
		const display = document.getElementById("display");
		if(display)
			setScreenSize(display);
	}
	async function initTerminal()
	{
		const { Terminal } = await import('@xterm/xterm');
		const { FitAddon } = await import('@xterm/addon-fit');
		const { WebLinksAddon } = await import('@xterm/addon-web-links');
		term = new Terminal({cursorBlink:true, convertEol:true, fontFamily:"monospace", fontWeight: 400, fontWeightBold: 700, fontSize: computeXTermFontSize()});
		fitAddon = new FitAddon();
		term.loadAddon(fitAddon);
		var linkAddon = new WebLinksAddon();
		term.loadAddon(linkAddon);
		const consoleDiv = document.getElementById("console");
		term.open(consoleDiv);
		term.scrollToTop();
		fitAddon.fit();
		window.addEventListener("resize", handleResize);
		term.focus();
		term.onData(readData);
		// Avoid undesired default DnD handling
		function preventDefaults (e) {
			e.preventDefault()
			e.stopPropagation()
		}
		consoleDiv.addEventListener("dragover", preventDefaults, false);
		consoleDiv.addEventListener("dragenter", preventDefaults, false);
		consoleDiv.addEventListener("dragleave", preventDefaults, false);
		consoleDiv.addEventListener("drop", preventDefaults, false);
		curInnerWidth = window.innerWidth;
		curInnerHeight = window.innerHeight;
		if(configObj.printIntro)
			printMessage(introMessage);
		try
		{
			await initCheerpX();
		}
		catch(e)
		{
			printMessage(unexpectedErrorMessage);
			printMessage([e.toString()]);
			return;
		}
	}
	function handleActivateConsole(vt)
	{
		if(curVT == vt)
			return;
		curVT = vt;
		if(vt != 7)
			return;
		// Raise the display to the foreground
		const display = document.getElementById("display");
		display.parentElement.style.zIndex = 5;
		plausible("Display activated");
	}
	function handleProcessCreated()
	{
		processCount++;
		if(processCallback)
			processCallback(processCount);
	}
	async function initCheerpX()
	{
		const CheerpX = await import('@leaningtech/cheerpx');
		var blockDevice = null;
		switch(configObj.diskImageType)
		{
			case "cloud":
				try
				{
					blockDevice = await CheerpX.CloudDevice.create(configObj.diskImageUrl);
				}
				catch(e)
				{
					// Report the failure and try again with plain HTTP
					var wssProtocol = "wss:";
					if(configObj.diskImageUrl.startsWith(wssProtocol))
					{
						// WebSocket protocol failed, try agin using plain HTTP
						plausible("WS Disk failure");
						blockDevice = await CheerpX.CloudDevice.create("https:" + configObj.diskImageUrl.substr(wssProtocol.length));
					}
					else
					{
						// No other recovery option
						throw e;
					}
				}
				break;
			case "bytes":
				blockDevice = await CheerpX.HttpBytesDevice.create(configObj.diskImageUrl);
				break;
			case "github":
				blockDevice = await CheerpX.GitHubDevice.create(configObj.diskImageUrl);
				break;
			default:
				throw new Error("Unrecognized device type");
		}
		blockCache = await CheerpX.IDBDevice.create(cacheId);
		var overlayDevice = await CheerpX.OverlayDevice.create(blockDevice, blockCache);
		var webDevice = await CheerpX.WebDevice.create("");
		var documentsDevice = await CheerpX.WebDevice.create("documents");
		var dataDevice = await CheerpX.DataDevice.create();
		var mountPoints = [
			// The root filesystem, as an Ext2 image
			{type:"ext2", dev:overlayDevice, path:"/"},
			// Access to files on the Web server, relative to the current page
			{type:"dir", dev:webDevice, path:"/web"},
			// Access to read-only data coming from JavaScript
			{type:"dir", dev:dataDevice, path:"/data"},
			// Automatically created device files
			{type:"devs", path:"/dev"},
			// Pseudo-terminals
			{type:"devpts", path:"/dev/pts"},
			// The Linux 'proc' filesystem which provides information about running processes
			{type:"proc", path:"/proc"},
			// The Linux 'sysfs' filesystem which is used to enumerate emulated devices
			{type:"sys", path:"/sys"},
			// Convenient access to sample documents in the user directory
			{type:"dir", dev:documentsDevice, path:"/home/user/documents"}
		];
		try
		{
			cx = await CheerpX.Linux.create({mounts: mountPoints, networkInterface: networkInterface});
		}
		catch(e)
		{
			printMessage(errorMessage);
			printMessage([e.toString()]);
			return;
		}
		cx.registerCallback("cpuActivity", cpuCallback);
		cx.registerCallback("diskActivity", hddCallback);
		cx.registerCallback("diskLatency", latencyCallback);
		cx.registerCallback("processCreated", handleProcessCreated);
		term.scrollToBottom();
		cxReadFunc = cx.setCustomConsole(writeData, term.cols, term.rows);
		const display = document.getElementById("display");
		if(display)
		{
			setScreenSize(display);
			cx.setActivateConsole(handleActivateConsole);
		}
		// Run the command in a loop, in case the user exits
		while (true)
		{
			await cx.run(configObj.cmd, configObj.args, configObj.opts);
		}
	}
	onMount(initTerminal);
	async function handleConnect()
	{
		const w = window.open("login.html", "_blank");
		await cx.networkLogin();
		w.location.href = await startLogin();
	}
	async function handleReset()
	{
		// Be robust before initialization
		if(blockCache == null)
			return;
		await blockCache.reset();
		location.reload();
	}
	function getKmsInputElement()
	{
		// Find the CheerpX textare, it's attached to the body element
		for(const node of document.body.children)
		{
			if(node.tagName == "TEXTAREA")
				return node;
		}
		return null;
	}
	async function yieldHelper(timeout)
	{
		return new Promise(function(f2, r2)
		{
			setTimeout(f2, timeout);
		});
	}
	async function kmsSendChar(textArea, charStr)
	{
		textArea.value = "_" + charStr;
		var ke = new KeyboardEvent("keydown");
		textArea.dispatchEvent(ke);
		var ke = new KeyboardEvent("keyup");
		textArea.dispatchEvent(ke);
		await yieldHelper(0);
	}
	async function handleTool(tool)
	{
		if(tool.command)
		{
			var sentinel = "# End of AI command";
			var buffer = term.buffer.active;
			// Get the current cursor position
			var marker = term.registerMarker();
			var startLine = marker.line;
			marker.dispose();
			var ret = new Promise(function(f, r)
			{
				var callbackDisposer = term.onWriteParsed(function()
				{
					var curLength = buffer.length;
					// Accumulate the output and see if the sentinel has been printed
					var output = "";
					for(var i=startLine + 1;i<curLength;i++)
					{
						var curLine = buffer.getLine(i).translateToString(true, 0, term.cols);;
						if(curLine.indexOf(sentinel) >= 0)
						{
							// We are done, cleanup and return
							callbackDisposer.dispose();
							return f(output);
						}
						output += curLine + "\n";
					}
				});
			});
			term.input(tool.command);
			term.input("\n");
			term.input(sentinel);
			term.input("\n");
			return ret;
		}
		else if(tool.action)
		{
			// Desktop control
			// TODO: We should have an explicit API to interact with CheerpX display
			switch(tool.action)
			{
				case "screenshot":
				{
					// Insert a 3 seconds delay unconditionally, the reference implementation uses 2
					await yieldHelper(3000);
					var delayCount = 0;
					var display = document.getElementById("display");
					var dc = get(displayConfig);
					if(screenshotCanvas == null)
					{
						screenshotCanvas = document.createElement("canvas");
						screenshotCtx = screenshotCanvas.getContext("2d");
					}
					if(screenshotCanvas.width != dc.width || screenshotCanvas.height != dc.height)
					{
						screenshotCanvas.width = dc.width;
						screenshotCanvas.height = dc.height;
					}
					while(1)
					{
						// Resize the canvas to a Claude compatible size
						screenshotCtx.drawImage(display, 0, 0, display.width, display.height, 0, 0, dc.width, dc.height);
						var dataUrl = screenshotCanvas.toDataURL("image/png");
						if(dataUrl == lastScreenshot)
						{
							// Delay at most 3 times
							if(delayCount < 3)
							{
								// TODO: Defensive message, validate and remove
								console.warn("Identical screenshot, rate limiting");
								delayCount++;
								// Wait some time and retry
								await yieldHelper(5000);
								continue;
							}
						}
						lastScreenshot = dataUrl;
						// Remove prefix from the encoded data
						dataUrl = dataUrl.substring("data:image/png;base64,".length);
						var imageSrc = { type: "base64", media_type: "image/png", data: dataUrl };
						var contentObj = { type: "image", source: imageSrc };
						return [ contentObj ];
					}
				}
				case "mouse_move":
				{
					var coords = tool.coordinate;
					var dc = get(displayConfig);
					dc.mouseX = coords[0] / dc.mouseMult;
					dc.mouseY = coords[1] / dc.mouseMult;
					var display = document.getElementById("display");
					var clientRect = display.getBoundingClientRect();
					var me = new MouseEvent('mousemove', { clientX: dc.mouseX + clientRect.left, clientY: dc.mouseY + clientRect.top });
					display.dispatchEvent(me);
					return null;
				}
				case "left_click":
				{
					var dc = get(displayConfig);
					var display = document.getElementById("display");
					var clientRect = display.getBoundingClientRect();
					var me = new MouseEvent('mousedown', { clientX: dc.mouseX + clientRect.left, clientY: dc.mouseY + clientRect.top, button: 0 });
					display.dispatchEvent(me);
					var me = new MouseEvent('mouseup', { clientX: dc.mouseX + clientRect.left, clientY: dc.mouseY + clientRect.top, button: 0 });
					display.dispatchEvent(me);
					return null;
				}
				case "right_click":
				{
					var dc = get(displayConfig);
					var display = document.getElementById("display");
					var clientRect = display.getBoundingClientRect();
					var me = new MouseEvent('mousedown', { clientX: dc.mouseX + clientRect.left, clientY: dc.mouseY + clientRect.top, button: 2 });
					display.dispatchEvent(me);
					var me = new MouseEvent('mouseup', { clientX: dc.mouseX + clientRect.left, clientY: dc.mouseY + clientRect.top, button: 2 });
					display.dispatchEvent(me);
					return null;
				}
				case "type":
				{
					var str = tool.text;
					return new Promise(async function(f, r)
					{
						var textArea = getKmsInputElement();
						for(var i=0;i<str.length;i++)
						{
							await kmsSendChar(textArea, str[i]);
						}
						f(null);
					});
				}
				case "key":
				{
					var textArea = getKmsInputElement();
					var key = tool.text;
					// Support arbitrary order of modifiers
					var isCtrl = false;
					var isAlt = false;
					var isShift = false;
					while(1)
					{
						if(key.startsWith("shift+"))
						{
							isShift = true;
							key = key.substr("shift+".length);
							var ke = new KeyboardEvent("keydown", {keyCode: 0x10});
							textArea.dispatchEvent(ke);
							await yieldHelper(0);
							continue;
						}
						else if(key.startsWith("ctrl+"))
						{
							isCtrl = true;
							key = key.substr("ctrl+".length);
							var ke = new KeyboardEvent("keydown", {keyCode: 0x11});
							textArea.dispatchEvent(ke);
							await yieldHelper(0);
							continue;
						}
						else if(key.startsWith("alt+"))
						{
							isAlt = true;
							key = key.substr("alt+".length);
							var ke = new KeyboardEvent("keydown", {keyCode: 0x12});
							textArea.dispatchEvent(ke);
							await yieldHelper(0);
							continue;
						}
						break;
					}
					var ret = null;
					// Dispatch single chars directly and parse the rest
					if(key.length == 1)
					{
						await kmsSendChar(textArea, key);
					}
					else
					{
						switch(tool.text)
						{
							case "Return":
								await kmsSendChar(textArea, "\n");
								break;
							default:
								// TODO: Support more key combinations
								ret = new Error(`Error: Invalid key '${tool.text}'`);
						}
					}
					if(isShift)
					{
						var ke = new KeyboardEvent("keyup", {keyCode: 0x10});
						textArea.dispatchEvent(ke);
						await yieldHelper(0);
					}
					if(isCtrl)
					{
						var ke = new KeyboardEvent("keyup", {keyCode: 0x11});
						textArea.dispatchEvent(ke);
						await yieldHelper(0);
					}
					if(isAlt)
					{
						var ke = new KeyboardEvent("keyup", {keyCode: 0x12});
						textArea.dispatchEvent(ke);
						await yieldHelper(0);
					}
					return ret;
				}
				default:
				{
					break;
				}
			}
			return new Error("Error: Invalid action");
		}
		else
		{
			// We can get there due to model hallucinations
			return new Error("Error: Invalid tool syntax");
		}
	}
</script>

<main class="relative w-full h-full">
	<Nav />
	<div class="absolute top-10 bottom-0 left-0 right-0">
		<SideBar on:connect={handleConnect} on:reset={handleReset} handleTool={handleTool}>
			<slot></slot>
		</SideBar>
		{#if configObj.needsDisplay}
			<div class="absolute top-0 bottom-0 left-14 right-0">
				<canvas class="w-full h-full cursor-none" id="display"></canvas>
			</div>
		{/if}
		<div class="absolute top-0 bottom-0 left-14 right-0 p-1 scrollbar" id="console">
		</div>
	</div>
</main>
