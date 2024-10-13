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
	class="p-3 cursor-pointer text-center {$activity ? "text-lime-500" : "hover:text-gray-100"}"
	on:mouseenter={handleMouseover}
	>
		<i class='{icon} fa-xl'></i>
</div>
