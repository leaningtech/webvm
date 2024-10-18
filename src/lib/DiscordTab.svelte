<script>
	import PanelButton from './PanelButton.svelte';
	import DiscordPresenceCount from 'labs/packages/astro-theme/components/nav/DiscordPresenceCount.svelte'
</script>

<h1 class="text-lg font-bold">Discord</h1>
<PanelButton buttonImage="assets/discord-mark-blue.svg" clickUrl="https://discord.gg/yTNZgySKGa" buttonText="Join our Discord">
	<i class='fas fa-circle fa-xs ml-auto text-green-500'></i>
	<span class="ml-1"><DiscordPresenceCount /></span>
</PanelButton>
<p>Do you have any question about WebVM or CheerpX?</p>
<p>Join our community, we are happy to help!</p>
