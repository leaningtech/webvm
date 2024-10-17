<script>
	export let clickUrl = null;
	export let clickHandler = null;
	export let rightClickHandler = null;
	export let buttonTooltip = null;
	export let buttonText;
	export let buttonIcon;
</script>

<a href={clickUrl} target="_blank" on:click={clickHandler} on:contextmenu={rightClickHandler}><p class="flex flex-row items-center bg-neutral-700 p-2 rounded-md shadow-md shadow-neutral-900 {(clickUrl != null || clickHandler != null) ? "hover:bg-neutral-500 cursor-pointer" : ""}" title={buttonTooltip}><img src={buttonIcon} class="inline w-8 h-8"/><span class="ml-1">{buttonText}</span><slot></slot></p></a>
