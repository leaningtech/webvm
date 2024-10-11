<script>
	import Icon from './Icon.svelte';

	const icons = [
		{ icon: 'fas fa-info-circle', info: 'Information' },
		{ icon: 'fas fa-wifi', info: 'Networking' },
		{ icon: 'fas fa-microchip', info: 'CPU' },
		{ icon: 'fas fa-compact-disc', info: 'Disk' },
		null,
		{ icon: 'fab fa-discord', info: 'Discord' },
		{ icon: 'fab fa-github', info: 'GitHub' },
	];

	let activeInfo = null;

	function showInfo(info) {
		activeInfo = info;
	}

	function hideInfo() {
		activeInfo = null;
	}
</script>

<div class="flex flex-row w-14 bg-neutral-700" on:mouseleave={hideInfo}>
	<div class="flex flex-col shrink-0 w-14 text-gray-300">
		{#each icons as i}
			{#if i}
				<Icon
					icon={i.icon}
					info={i.info}
					on:mouseover={(e) => showInfo(e.detail)}
					on:mouseout={hideInfo}
				/>
			{:else}
				<div class="grow"></div>
			{/if}
		{/each}
	</div>
	<div class="flex flex-col shrink-0 w-60 h-full z-10 p-2 bg-neutral-600 text-gray-100" class:hidden={!activeInfo}>
		<p>{activeInfo}</p>
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
