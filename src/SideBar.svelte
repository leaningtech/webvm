<script>
	import Icon from './Icon.svelte';

	const icons = [
		{ icon: '\u{1F6C8}', info: 'Information' }
	];

	let activeInfo = null;

	function showInfo(info) {
		activeInfo = info;
	}

	function hideInfo() {
		activeInfo = null;
	}
</script>

<div class="flex flex-row w-14 bg-neutral-700">
	<div class="flex flex-col shrink-0 w-14 text-gray-300">
		{#each icons as { id, icon, info }}
			<Icon
				icon={icon}
				info={info}
				on:mouseover={(e) => showInfo(e.detail)}
				on:mouseout={hideInfo}
			/>
		{/each}
	</div>
	<div class="shrink-0 w-52 h-full z-10 p-5 bg-neutral-600 text-gray-100" class:hidden={!activeInfo}>
		{activeInfo}
	</div>
</div>
