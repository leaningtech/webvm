<script>
	import { apiState, setApiKey, addMessage, messageList, currentMessage } from '$lib/anthropic.js'
	import { tick } from 'svelte';
	import PanelButton from './PanelButton.svelte';
	export let handleTool;
	function handleKeyEnter(e)
	{
		if(e.key != "Enter")
			return;
		var value = e.target.value;
		if(value == "")
			return;
		setApiKey(value);
	}
	function handleMessage(e)
	{
		if(e.key != "Enter")
			return;
		e.preventDefault();
		var textArea = e.target;
		var value = textArea.value;
		if(value == "")
			return;
		textArea.style.height = "unset";
		// Reset the textarea
		currentMessage.set("");
		addMessage(value, handleTool);
	}
	function handleResize(e)
	{
		var textArea = e.target;
		textArea.style.height = textArea.scrollHeight + "px";
	}
	async function scrollToBottom(node)
	{
		await tick();
		node.scrollTop = node.scrollHeight;
		document.getElementById("ai-input").focus();
	}
	function scrollMessage(node, messageList)
	{
		// Make sure the messages are always scrolled to the bottom
		scrollToBottom(node);
		return {
			update(messageList) {
				scrollToBottom(node);
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
	function getIconForTool(msg)
	{
		if(msg.content[0].input.action == "screenshot")
			return "fa-desktop";
		else
			return "fa-screwdriver-wrench";
	}
	function getMessageForTool(msg)
	{
		if(msg.content[0].input.action == "screenshot")
			return "Screenshot";
		else
			return "Use the system";
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
</script>
<h1 class="text-lg font-bold">Claude AI Integration</h1>
<p>WebVM is integrated with Claude by Anthropic AI. You can prompt the AI to control the system.</p>
<p>You need to provide your API key. The key is only saved locally to your browser.</p>
<div class="flex grow overflow-y-scroll scrollbar" use:scrollMessage={$messageList}>
	<div class="h-full w-full">
		<div class="w-full min-h-full flex flex-col gap-2 justify-end">
			{#each $messageList as msg}
				{#if isToolUse(msg)}
					<p class="bg-neutral-700 p-2 rounded-md italic"><i class='fas {getIconForTool(msg)} w-6 mr-2 text-center'></i>{getMessageForTool(msg)}</p>
				{:else if !isToolResult(msg)}
					<p class="{msg.role == 'error' ? 'bg-red-900' : 'bg-neutral-700'} p-2 rounded-md"><i class='fas {getIconForMsg(msg)} w-6 mr-2 text-center'></i>{msg.content}</p>
				{/if}
			{/each}
		</div>
	</div>
</div>
{#if $apiState == "KEY_REQUIRED"}
	<textarea class="bg-neutral-700 p-2 rounded-md placeholder-gray-400 resize-none shrink-0" placeholder="Insert your Claude API Key" rows="1" on:keydown={handleKeyEnter} on:input={handleResize} id="ai-input"/>
{:else}
	<textarea class="bg-neutral-700 p-2 rounded-md placeholder-gray-400 resize-none shrink-0" placeholder="Prompt..." rows="1" on:keydown={handleMessage} on:input={handleResize} bind:value={$currentMessage} id="ai-input"/>
{/if}
