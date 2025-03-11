<script>
	import { networkData, startLogin, updateButtonData } from '$lib/network.js'
	import { createEventDispatcher } from 'svelte';
	import PanelButton from './PanelButton.svelte';
	var dispatch = createEventDispatcher();
	var connectionState = networkData.connectionState;
	var exitNode = networkData.exitNode;

	function handleConnect() {
		connectionState.set("DOWNLOADING");
		dispatch('connect');
	}

	let buttonData = null;
	$: buttonData = updateButtonData($connectionState, handleConnect);
</script>
<h1 class="text-lg font-bold">Networking</h1>
<PanelButton buttonImage="assets/tailscale.svg" clickUrl={buttonData.clickUrl} clickHandler={buttonData.clickHandler} rightClickHandler={buttonData.rightClickHandler} buttonTooltip={buttonData.buttonTooltip} buttonText={buttonData.buttonText}>
	{#if $connectionState == "CONNECTED"}
		<i class='fas fa-circle fa-xs ml-auto {$exitNode ? 'text-green-500' : 'text-amber-500'}' title={$exitNode ? 'Ready' : 'No exit node'}></i>
	{/if}
</PanelButton>
<p>WebVM can connect to the Internet via Tailscale</p>
<p>Using Tailscale is required since browser do not support TCP/UDP sockets (yet!)</p>
