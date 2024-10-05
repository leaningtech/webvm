<script>
	import { onMount } from 'svelte';
	import { Terminal } from '@xterm/xterm';
	import { FitAddon } from '@xterm/addon-fit';
	import { WebLinksAddon } from '@xterm/addon-web-links';
	import Nav from 'labs/packages/global-navbar/src/Nav.svelte';
	import SideBar from './SideBar.svelte';
	import * as CheerpX from '@leaningtech/cheerpx';

	var term = new Terminal({cursorBlink:true, convertEol:true, fontFamily:"monospace", fontWeight: 400, fontWeightBold: 700});
	var fitAddon = new FitAddon();
	term.loadAddon(fitAddon);
	var linkAddon = new WebLinksAddon();
	term.loadAddon(linkAddon);

	onMount(function()
	{
		const consoleDiv = document.getElementById("console");
		term.open(consoleDiv);
		term.scrollToTop();
		fitAddon.fit();
		window.addEventListener("resize", function(ev){ fitAddon.fit(); });
		term.focus();
	});
</script>

<main class="flex flex-col w-full h-full">
	<Nav />
	<div class="flex flex-row flex-grow">
		<SideBar />
		<div class="grow h-full m-1 scrollbar" id="console">
		</div>
	</div>
</main>

