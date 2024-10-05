<script>
	import { onMount } from 'svelte';
	import { Terminal } from '@xterm/xterm';
	import { FitAddon } from '@xterm/addon-fit';
	import { WebLinksAddon } from '@xterm/addon-web-links';
	import Nav from 'labs/packages/global-navbar/src/Nav.svelte';
	import SideBar from './SideBar.svelte';
	import * as CheerpX from '@leaningtech/cheerpx';
	import { diskImageUrl, diskImageType } from 'diskConfig'

	var term = new Terminal({cursorBlink:true, convertEol:true, fontFamily:"monospace", fontWeight: 400, fontWeightBold: 700});
	var fitAddon = new FitAddon();
	term.loadAddon(fitAddon);
	var linkAddon = new WebLinksAddon();
	term.loadAddon(linkAddon);
	function initTerminal()
	{
		const consoleDiv = document.getElementById("console");
		term.open(consoleDiv);
		term.scrollToTop();
		fitAddon.fit();
		window.addEventListener("resize", function(ev){ fitAddon.fit(); });
		term.focus();
		initCheerpX();
	}
	async function initCheerpX()
	{
		// TODO: Check for SAB support
		// TODO: Initialize network
		var blockDevice = null;
		switch(diskImageType)
		{
			case "cloud":
				try
				{
					blockDevice = await CheerpX.CloudDevice.create(diskImageUrl);
				}
				catch(e)
				{
					// Report the failure and try again with plain HTTP
					var wssProtocol = "wss:";
					if(diskImageUrl.startsWith(wssProtocol))
					{
						// WebSocket protocol failed, try agin using plain HTTP
						plausible("WS Disk failure");
						blockDevice = await CheerpX.CloudDevice.create("https:" + diskImageUrl.substr(wssProtocol.length));
					}
					else
					{
						// No other recovery option
						throw e;
					}
				}
				break;
			case "bytes":
				blockDevice = await CheerpX.HttpBytesDevice.create(diskImageUrl);
				break;
			case "github":
				blockDevice = await CheerpX.GitHubDevice.create(diskImageUrl);
				break;
			default:
				throw new Error("Unrecognized device type");
		}
	}
	onMount(initTerminal);
</script>

<main class="flex flex-col w-full h-full">
	<Nav />
	<div class="flex flex-row flex-grow">
		<SideBar />
		<div class="grow h-full m-1 scrollbar" id="console">
		</div>
	</div>
</main>

