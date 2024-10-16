<script>
	import PanelButton from './PanelButton.svelte';
	import DiscordPresenceCount from 'labs/packages/astro-theme/components/nav/DiscordPresenceCount.svelte'
</script>

<h1 class="text-lg font-bold">Discord</h1>
<PanelButton buttonIcon="assets/discord-mark-blue.svg" clickUrl="https://discord.gg/yTNZgySKGa" buttonText="Join our Discord">
	<!-- This emulates the one used on labs -->
	<svg class="inline ml-auto text-green-500" width="12" height="12">
		<circle cx="6" cy="6" r="6" fill="currentColor" />
	</svg>
	<span class="ml-1"><DiscordPresenceCount /></span>
</PanelButton>
<p>Do you have any question about WebVM or CheerpX?</p>
<p>Join our community, we are happy to help!</p>
