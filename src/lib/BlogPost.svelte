<script>
	export let title;
	export let image;
	export let url;
</script>
<a href={url} target="_blank"><div class="bg-neutral-700 hover:bg-neutral-500 p-2 rounded-md">
	<img class="w-56 h-32 object-fit" src={image}>
	<h2 class="text-sm font-bold">{title}</h2>
</div></a>
