<script>
	import { createEventDispatcher } from 'svelte';
	import Icon from './Icon.svelte';
	import InformationTab from './InformationTab.svelte';
	import NetworkingTab from './NetworkingTab.svelte';
	import CpuTab from './CpuTab.svelte';
	import DiskTab from './DiskTab.svelte';
	import AnthropicTab from './AnthropicTab.svelte';
	import PostsTab from './PostsTab.svelte';
	import DiscordTab from './DiscordTab.svelte';
	import GitHubTab from './GitHubTab.svelte';
	import SmallButton from './SmallButton.svelte';
	import { cpuActivity, diskActivity, aiActivity } from './activities.js';
	const icons = [
		{ icon: 'fas fa-info-circle', info: 'Information', activity: null },
		{ icon: 'fas fa-wifi', info: 'Networking', activity: null },
		{ icon: 'fas fa-microchip', info: 'CPU', activity: cpuActivity },
		{ icon: 'fas fa-compact-disc', info: 'Disk', activity: diskActivity },
		{ icon: 'fas fa-robot', info: 'ClaudeAI', activity: aiActivity },
		null,
		{ icon: 'fas fa-book-open', info: 'Posts', activity: null },
		{ icon: 'fab fa-discord', info: 'Discord', activity: null },
		{ icon: 'fab fa-github', info: 'GitHub', activity: null },
	];
	let dispatch = createEventDispatcher();
	let activeInfo = null; // Tracks currently visible info.
	let hideTimeout = 0; // Timeout for hiding info panel.
	export let sideBarPinned;

	function showInfo(info) {
		clearTimeout(hideTimeout);
		hideTimeout = 0;
		activeInfo = info;
	}
	function hideInfo() {
		// Never remove the sidebar if pinning is enabled
		if(sideBarPinned)
			return;
		// Prevents multiple timers and hides the info panel after 400ms unless interrupted.
		clearTimeout(hideTimeout);
		hideTimeout = setTimeout(() => {
			activeInfo = null;
			hideTimeout = 0;
		}, 400);
	}
	function handleMouseEnterPanel() {
		clearTimeout(hideTimeout);
		hideTimeout = 0;
	}
	// Toggles the info panel for the clicked icon.
	function handleClick(icon) {
		if(sideBarPinned)
			return;
		// Hides the panel if the icon is active. Otherwise, shows the panel with info.
		if (activeInfo === icon.info) {
			activeInfo = null;
		} else {
			activeInfo = icon.info;
		}
	}

	function toggleSidebarPin() {
		sideBarPinned = !sideBarPinned;
		dispatch('sidebarPinChange', sideBarPinned);
	}

	export let handleTool;
</script>

<div class="flex flex-row w-14 h-full bg-neutral-700" >
	<div class="flex flex-col shrink-0 w-14 text-gray-300">
		{#each icons as i}
			{#if i}
				<Icon
					icon={i.icon}
					info={i.info}
					activity={i.activity}
					on:mouseover={(e) => showInfo(e.detail)}
					on:click={() => handleClick(i)}
				/>
			{:else}
				<div class="grow" on:mouseenter={handleMouseEnterPanel}></div>
			{/if}
		{/each}
	</div>
	<div
		class="relative flex flex-col gap-5 shrink-0 w-80 h-full z-10 p-2 bg-neutral-600 text-gray-100 opacity-95"
		class:hidden={!activeInfo}
		on:mouseenter={handleMouseEnterPanel}
		on:mouseleave={hideInfo}
	>
		<div class="absolute right-2 top-2">
			<SmallButton
				buttonIcon="fa-solid fa-thumbtack"
				clickHandler={toggleSidebarPin}
				buttonTooltip={sideBarPinned ? "Unpin Sidebar" : "Pin Sidebar"}
				bgColor={sideBarPinned ? "bg-neutral-500" : "bg-neutral-700"}
			/>
		</div>
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
		{:else if activeInfo === 'ClaudeAI'}
			<AnthropicTab handleTool={handleTool} />
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
				<a href="https://leaningtech.com/" target="”_blank”">© 2022-2025 Leaning Technologies</a>
			</div>
		</div>
	</div>
</div>
