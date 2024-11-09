<script>
	import Icon from './Icon.svelte';
	import InformationTab from './InformationTab.svelte';
	import NetworkingTab from './NetworkingTab.svelte';
	import CpuTab from './CpuTab.svelte';
	import DiskTab from './DiskTab.svelte';
	import PostsTab from './PostsTab.svelte';
	import DiscordTab from './DiscordTab.svelte';
	import GitHubTab from './GitHubTab.svelte';
	import { cpuActivity, diskActivity } from './activities.js'

	const icons = [
		{ icon: 'fas fa-info-circle', info: 'Information', activity: null },
		{ icon: 'fas fa-wifi', info: 'Networking', activity: null },
		{ icon: 'fas fa-microchip', info: 'CPU', activity: cpuActivity },
		{ icon: 'fas fa-compact-disc', info: 'Disk', activity: diskActivity },
		null,
		{ icon: 'fas fa-book-open', info: 'Posts', activity: null },
		{ icon: 'fab fa-discord', info: 'Discord', activity: null },
		{ icon: 'fab fa-github', info: 'GitHub', activity: null },
	];

	let activeInfo = null;

	function showInfo(info) {
		activeInfo = info;
	}

	function hideInfo() {
		activeInfo = null;
	}
</script>

<div class="flex flex-row w-14 h-full bg-neutral-700" on:mouseleave={hideInfo}>
	<div class="flex flex-col shrink-0 w-14 text-gray-300">
		{#each icons as i}
			{#if i}
				<Icon
					icon={i.icon}
					info={i.info}
					activity={i.activity}
					on:mouseover={(e) => showInfo(e.detail)}
				/>
			{:else}
				<div class="grow" on:mouseover={(e) => showInfo(null)}></div>
			{/if}
		{/each}
	</div>
	<div class="flex flex-col gap-5 shrink-0 w-60 h-full z-10 p-2 bg-neutral-600 text-gray-100" class:hidden={!activeInfo}>
		{#if activeInfo === 'Information'}
			<InformationTab>
				<slot></slot>
			</InformationTab>
		{:else if activeInfo === 'Networking'}
			<NetworkingTab on:connect/>
		{:else if activeInfo === 'CPU'}
			<CpuTab/>
		{:else if activeInfo === 'Disk'}
			<DiskTab on:reset/>
		{:else if activeInfo === 'Posts'}
			<PostsTab/>
		{:else if activeInfo === 'Discord'}
			<DiscordTab/>
		{:else if activeInfo === 'GitHub'}
			<GitHubTab/>
		{:else}
			<p>TODO: {activeInfo}</p>
		{/if}
		<div class="mt-auto text-sm text-gray-300">
			<div class="pt-1 pb-1">
				<a href="https://cheerpx.io/" target="_blank">
					<span>Powered by CheerpX</span>
					<img src="assets/cheerpx.svg" alt="CheerpX Logo" class="w-6 h-6 inline-block">
				</a>
			</div>
			<hr class="border-t border-solid border-gray-300">
			<div class="pt-1 pb-1">
				<a href="https://leaningtech.com/" target="”_blank”">© 2022-2024 Leaning Technologies</a>
			</div>
		</div>
	</div>
</div>
