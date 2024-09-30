<script>
	import Icon from './Icon.svelte';

	const icons = [
		{ icon: '\u{1F6C8}', info: 'Information' }
	];
</script>

<div class="flex flex-row w-14 bg-neutral-700">
	<div class="flex flex-col w-14 shrink-0">
		{#each icons as { id, icon, info }}
			<Icon
				icon={icon}
				info={info}
			/>
		{/each}
	</div>
	<div class="shrink-0 w-52 h-full z-10 p-5 bg-neutral-600 text-gray-100">
	</div>
</div>
