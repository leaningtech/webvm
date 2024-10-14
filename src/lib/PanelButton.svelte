<script>
	export let clickUrl = null;
	export let clickHandler = null;
	export let rightClickHandler = null;
	export let buttonTooltip = null;
	export let buttonText;
	export let buttonIcon;
</script>

<a href={clickUrl} target="_blank" on:click={clickHandler} on:contextmenu={rightClickHandler}><p class="bg-neutral-700 p-2 rounded-md {(clickUrl != null || clickHandler != null) ? "hover:bg-neutral-500 cursor-pointer" : ""}" title={buttonTooltip}><img src={buttonIcon} class="inline w-8 h-8"/><span class="ml-1">{buttonText}</span></p></a>
