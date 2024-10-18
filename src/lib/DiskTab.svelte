<script>
	import PanelButton from './PanelButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { diskLatency } from './activities.js'
	var dispatch = createEventDispatcher();
	let state = "START";
	function handleReset()
	{
		if(state == "START")
			state = "CONFIRM";
		else
			dispatch('reset');
	}
	function getButtonText()
	{
		if(state == "START")
			return "Reset disk";
		else
			return "Confirm?"
	}
</script>
<h1 class="text-lg font-bold">Disk</h1>
<PanelButton buttonIcon="fa-solid fa-trash-can" clickHandler={handleReset} buttonText={getButtonText(state)} bgColor="bg-red-900" hoverColor="hover:bg-red-700">
</PanelButton>
{#if state == "CONFIRM"}
	<p><span class="font-bold">Warning: </span>WebVM will reload</p>
{:else}
	<p><span class="font-bold">Backend latency: </span>{$diskLatency}ms</p>
{/if}
<p>WebVM runs on top of a complete Linux distribution</p>
<p>Filesystems up to 2GB are supported and data is downloaded completely on-demand</p>
<p>The WebVM cloud backend uses WebSockets and a it's distributed via a global CDN to minimize download latency</p>
