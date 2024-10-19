<script>
	export let icon;
	export let info;
	export let activity;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleMouseover() {
		dispatch('mouseover', info);
	}
</script>

<div 
	class="p-3 cursor-pointer text-center hover:bg-neutral-600 {$activity ? "text-amber-500 animate-pulse" : "hover:text-gray-100"}"
	style="animation-duration: 0.5s"
	on:mouseenter={handleMouseover}
	>
		<i class='{icon} fa-xl'></i>
</div>
