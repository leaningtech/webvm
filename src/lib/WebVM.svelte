<script>
	import { onMount } from 'svelte';
	import { Terminal } from '@xterm/xterm';
	import { FitAddon } from '@xterm/addon-fit';
	import { WebLinksAddon } from '@xterm/addon-web-links';
	import Nav from 'labs/packages/global-navbar/src/Nav.svelte';
	import SideBar from '$lib/SideBar.svelte';
	import * as CheerpX from '@leaningtech/cheerpx';
	import '$lib/global.css';
	import '@xterm/xterm/css/xterm.css'
	import '@fortawesome/fontawesome-free/css/all.min.css'
	import { networkInterface, startLogin } from '$lib/network.js'
	import { cpuActivity, diskActivity } from '$lib/activities.js'
	import { introMessage, errorMessage } from '$lib/messages.js'

	export let configObj = null;
	export let processCallback = null;
	export let cacheId = null;

	var term = new Terminal({cursorBlink:true, convertEol:true, fontFamily:"monospace", fontWeight: 400, fontWeightBold: 700});
	var cx = null;
	var fitAddon = new FitAddon();
	term.loadAddon(fitAddon);
	var linkAddon = new WebLinksAddon();
	term.loadAddon(linkAddon);
	var cxReadFunc = null;
	var processCount = 0;
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
	function hddCallback(state)
	{
		diskActivity.set(state != "ready");
	}
	function cpuCallback(state)
	{
		cpuActivity.set(state != "ready");
	}
	term.onData(readData);
	function initTerminal()
	{
		const consoleDiv = document.getElementById("console");
		term.open(consoleDiv);
		term.scrollToTop();
		fitAddon.fit();
		window.addEventListener("resize", function(ev){ fitAddon.fit(); });
		term.focus();
		// Avoid undesired default DnD handling
		function preventDefaults (e) {
			e.preventDefault()
			e.stopPropagation()
		}
		consoleDiv.addEventListener("dragover", preventDefaults, false);
		consoleDiv.addEventListener("dragenter", preventDefaults, false);
		consoleDiv.addEventListener("dragleave", preventDefaults, false);
		consoleDiv.addEventListener("drop", preventDefaults, false);
		if(configObj.printIntro)
			printMessage(introMessage);
		initCheerpX();
	}
	function handleActivateConsole(vt)
	{
		if(vt != 7)
			return;
		// Raise the display to the foreground
		const display = document.getElementById("display");
		display.style.zIndex = 10;
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
		// TODO: Check for SAB support
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
		var overlayDevice = await CheerpX.OverlayDevice.create(blockDevice, await CheerpX.IDBDevice.create(cacheId));
		var webDevice = await CheerpX.WebDevice.create("");
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
			// The Linux 'proc' filesystem which provides information about running processes
			{type:"proc", path:"/proc"}
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
		cx.registerCallback("processCreated", handleProcessCreated);
		term.scrollToBottom();
		cxReadFunc = cx.setCustomConsole(writeData, term.cols, term.rows);
		const display = document.getElementById("display");
		if(display)
		{
			cx.setKmsCanvas(display, 1024, 768);
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
</script>

<main class="relative w-full h-full">
	<Nav />
	<div class="absolute top-10 bottom-0 left-0 right-0">
		<SideBar on:connect={handleConnect}/>
		{#if configObj.needsDisplay}
			<canvas class="absolute top-0 bottom-0 left-14 right-0" width="1024" height="768" id="display"></canvas>
		{/if}
		<div class="absolute top-0 bottom-0 left-14 right-0 p-1 scrollbar" id="console">
		</div>
	</div>
</main>
