<script>
	import PanelButton from './PanelButton.svelte';
	import GitHubStarCount from 'labs/packages/astro-theme/components/nav/GitHubStarCount.svelte'
</script>

<h1 class="text-lg font-bold">GitHub</h1>
<PanelButton buttonIcon="assets/github-mark-white.svg" clickUrl="https://github.com/leaningtech/webvm" buttonText="Star on GitHub">
	<i class='fas fa-star fa-xs ml-auto'></i>
	<span class="ml-1"><GitHubStarCount repo="leaningtech/webvm"/></span>
</PanelButton>
<p>WebVM is FOSS, you can fork it to build your own version and begin working on your CheerpX-based project</p>
<p>Found a bug? Please open a <a class="underline" href="https://github.com/leaningtech/webvm/issues" target="_blank">GitHub issue</a></p>
