<script>
	var currentIp = null;
</script>
<h1 class="text-lg font-bold">Networking</h1>
{#if currentIp === null}
	<p class="bg-neutral-700 hover:bg-neutral-500 p-2 rounded-md cursor-pointer"><img src="assets/tailscale.svg" class="inline w-8"/><span class="ml-1">Connect to Tailscale</span></p>
{:else}
	<p>Current IP: {currentIp}</p>
{/if}
<p>WebVM can connect to the Internet via Tailscale</p>
<p>Using Tailscale is required since browser do not support TCP/UDP sockets (yet!)</p>
