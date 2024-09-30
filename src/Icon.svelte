<script>
	export let icon;
	export let info;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleMouseover() {
		dispatch('mouseover', info);
	}

	function handleMouseout() {
		dispatch('mouseout');
	}
</script>

<div 
	class="p-2 cursor-pointer text-center text-3xl"
	on:mouseenter={handleMouseover}
	on:mouseleave={handleMouseout}
>
	{icon}
</div>
