<script>
	import { networkData, startLogin } from '$lib/network.js'
	import { createEventDispatcher } from 'svelte';
	import PanelButton from './PanelButton.svelte';
	var dispatch = createEventDispatcher();
	var connectionState = networkData.connectionState;
	var exitNode = networkData.exitNode;
	function handleConnect() {
		connectionState.set("DOWNLOADING");
		dispatch('connect');
	}
	async function handleCopyIP(event)
	{
		// To prevent the default contexmenu from showing up when right-clicking..
		event.preventDefault();
		// Copy the IP to the clipboard.
		try
		{
			await window.navigator.clipboard.writeText(networkData.currentIp)
			connectionState.set("IPCOPIED");
			setTimeout(() => {
				connectionState.set("CONNECTED");
			}, 2000);
		}
		catch(msg)
		{
			console.log("Copy ip to clipboard: Error: " + msg);
		}
	}

function updateButtonData(state) {
	switch(state) {
		case "DISCONNECTED":
			return {
				buttonText: "Connect to Tailscale",
				isClickable: true,
				clickHandler: handleConnect,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
		case "DOWNLOADING":
			return {
				buttonText: "Loading IP stack...",
				isClickable: false,
				clickHandler: null,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
		case "LOGINSTARTING":
			return {
				buttonText: "Starting Login...",
				isClickable: false,
				clickHandler: null,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
		case "LOGINREADY":
			return {
				buttonText: "Login to Tailscale",
				isClickable: true,
				clickHandler: null,
				clickUrl: networkData.loginUrl,
				buttonTooltip: null,
				rightClickHandler: null
			};
		case "CONNECTED":
			return {
				buttonText: `IP: ${networkData.currentIp}`,
				isClickable: true,
				clickHandler: null,
				clickUrl: networkData.dashboardUrl,
				buttonTooltip: "Right-click to copy",
				rightClickHandler: handleCopyIP
			};
		case "IPCOPIED":
			return {
				buttonText: "Copied!",
				isClickable: false,
				clickHandler: null,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
		default:
			return {
				buttonText: `Text for state: ${state}`,
				isClickable: false,
				clickHandler: null,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
	}
}

let buttonData = null;
$: buttonData = updateButtonData($connectionState);
</script>
<h1 class="text-lg font-bold">Networking</h1>
<PanelButton buttonImage="assets/tailscale.svg" clickUrl={buttonData.clickUrl} clickHandler={buttonData.clickHandler} rightClickHandler={buttonData.rightClickHandler} buttonTooltip={buttonData.buttonTooltip} buttonText={buttonData.buttonText}>
	{#if $connectionState == "CONNECTED"}
		<i class='fas fa-circle fa-xs ml-auto {$exitNode ? 'text-green-500' : 'text-amber-500'}' title={$exitNode ? 'Ready' : 'No exit node'}></i>
	{/if}
</PanelButton>
<p>WebVM can connect to the Internet via Tailscale</p>
<p>Using Tailscale is required since browser do not support TCP/UDP sockets (yet!)</p>
