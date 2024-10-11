<script>
	export let icon;
	export let info;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleMouseover() {
		dispatch('mouseover', info);
	}
</script>

<div 
	class="p-3 cursor-pointer text-center"
	on:mouseenter={handleMouseover}
	>
		<i class='{icon} fa-xl'></i>
</div>
