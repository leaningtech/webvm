<script>
	import Nav from 'labs/packages/global-navbar/src/Nav.svelte';
	import SideBar from './SideBar.svelte';
</script>

<main class="flex flex-col w-full h-full">
	<Nav />
	<div class="flex flex-row flex-grow">
		<SideBar />
		<h1>Hello</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	</div>
</main>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
