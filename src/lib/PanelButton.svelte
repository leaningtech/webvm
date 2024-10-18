<script>
	export let clickUrl = null;
	export let clickHandler = null;
	export let rightClickHandler = null;
	export let buttonTooltip = null;
	export let buttonImage = null;
	export let buttonText;
</script>

<a href={clickUrl} target="_blank" on:click={clickHandler} on:contextmenu={rightClickHandler}><p class="flex flex-row items-center bg-neutral-700 p-2 rounded-md shadow-md shadow-neutral-900 {(clickUrl != null || clickHandler != null) ? "hover:bg-neutral-500 cursor-pointer" : ""}" title={buttonTooltip}>
{#if buttonImage}
<img src={buttonImage} class="inline w-8 h-8"/>
{/if}
<span class="ml-1">{buttonText}</span><slot></slot></p></a>
