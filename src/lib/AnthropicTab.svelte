<script>
	import { apiState, setApiKey, addMessage, messageList, currentMessage } from '$lib/anthropic.js'
	import PanelButton from './PanelButton.svelte';
	export let handleTool;
	function handleKeyEnter(e)
	{
		if(e.key != "Enter")
			return;
		setApiKey(e.target.value);
	}
	function handleMessage(e)
	{
		if(e.key != "Enter")
			return;
		var textArea = e.target;
		addMessage(textArea.value, handleTool);
		// Reset the textarea
		textArea.value = "";
		textArea.style.height = "unset";
		e.preventDefault();
	}
	function handleResize(e)
	{
		var textArea = e.target;
		textArea.style.height = textArea.scrollHeight + "px";
	}
	function scrollMessage(node, messageList)
	{
		// Make sure the messages are always scrolled to the bottom
		node.scrollTop = node.scrollHeight;
		return {
			update(messageList) {
				node.scrollTop = node.scrollHeight;
			}
		}
	}
	function getIconForMsg(msg)
	{
		if(msg.role == "user")
			return "fa-user"
		else
			return "fa-robot"
	}
	function isToolUse(msg)
	{
		if(!Array.isArray(msg.content))
			return false;
		return msg.content[0].type == "tool_use";
	}
	function isToolResult(msg)
	{
		if(!Array.isArray(msg.content))
			return false;
		return msg.content[0].type == "tool_result";
	}
	function autoFocus(node)
	{
		node.focus();
	}
</script>
<h1 class="text-lg font-bold">Claude AI Integration</h1>
<p>WebVM is integrated with Claude by Anthropic AI. You can prompt the AI to control the system.</p>
<p>You need to provide your API key. The key is only saved locally to your browser.</p>
<div class="flex grow overflow-y-scroll scrollbar" use:scrollMessage={$messageList}>
	<div class="h-full w-full">
		<div class="w-full min-h-full flex flex-col gap-2 justify-end">
			{#each $messageList as msg}
				{#if isToolUse(msg)}
					<p class="bg-neutral-700 p-2 rounded-md italic"><i class='fas fa-screwdriver-wrench w-6 mr-2 text-center'></i>Use the system</p>
				{:else if !isToolResult(msg)}
					<p class="{msg.role == 'error' ? 'bg-red-900' : 'bg-neutral-700'} p-2 rounded-md"><i class='fas {getIconForMsg(msg)} w-6 mr-2 text-center'></i>{msg.content}</p>
				{/if}
			{/each}
		</div>
	</div>
</div>
{#if $apiState == "KEY_REQUIRED"}
	<textarea class="bg-neutral-700 p-2 rounded-md placeholder-gray-400 resize-none shrink-0" placeholder="Insert your Claude API Key" rows="1" on:keydown={handleKeyEnter} on:input={handleResize} use:autoFocus/>
{:else}
	<textarea class="bg-neutral-700 p-2 rounded-md placeholder-gray-400 resize-none shrink-0" placeholder="Prompt..." rows="1" on:keydown={handleMessage} on:input={handleResize} bind:value={$currentMessage} use:autoFocus/>
{/if}
