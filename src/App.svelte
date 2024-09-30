<script>
	import Nav from 'labs/packages/global-navbar/src/Nav.svelte';
	export let name;
</script>

<Nav />
<main class="flex flex-col w-full h-full">
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
