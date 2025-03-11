<script>
	import { apiState, setApiKey, addMessage, clearMessageHistory, forceStop, messageList, currentMessage, enableThinking, getMessageDetails } from '$lib/anthropic.js';
	import { tick } from 'svelte';
	import { get } from 'svelte/store';
	import PanelButton from './PanelButton.svelte';
	import SmallButton from './SmallButton.svelte';
	import { aiActivity } from './activities.js';
	import html2canvas from 'html2canvas-pro';
	export let handleTool;
	let stopRequested = false;
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
		if (!get(aiActivity)) {
			document.getElementById("ai-input").focus();
		}
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
	async function handleStop() {
		stopRequested = true;
		await forceStop();
		stopRequested = false;
	}

	async function handleDownload() {
		const messageListElement = document.getElementById('message-list');
		// Temporarily add padding and background for the list
		messageListElement.classList.add("p-1");
		const canvas = await html2canvas(messageListElement);
		messageListElement.classList.remove("p-1");
		const link = document.createElement('a');
		link.href = canvas.toDataURL('image/png');
		link.download = 'WebVM_Claude.png';
		link.click();
	}

	function toggleThinkingMode() {
		enableThinking.set(!get(enableThinking));
	}
</script>
<h1 class="text-lg font-bold">Claude AI Integration</h1>
<p>WebVM is integrated with Claude by Anthropic AI. You can prompt the AI to control the system.</p>
<p>You need to provide your API key. The key is only saved locally to your browser.</p>
<div class="flex grow flex-col overflow-y-hidden gap-2">
	<p class="flex flex-row gap-2">
		<span class="mr-auto flex items-center">Conversation history</span>
		<SmallButton buttonIcon="fa-solid fa-download" clickHandler={handleDownload} buttonTooltip="Save conversation as image"></SmallButton>
		<SmallButton buttonIcon="fa-solid fa-brain" clickHandler={toggleThinkingMode} buttonTooltip="{$enableThinking ? "Disable" : "Enable"} thinking mode" bgColor={$enableThinking ? "bg-neutral-500" : "bg-neutral-700"}></SmallButton>
		<SmallButton buttonIcon="fa-solid fa-trash-can" clickHandler={clearMessageHistory} buttonTooltip="Clear conversation history"></SmallButton>
	</p>
	<div class="flex grow overflow-y-scroll scrollbar" use:scrollMessage={$messageList}>
		<div class="h-full w-full">
			<div class="w-full min-h-full flex flex-col gap-2 justify-end bg-neutral-600" id="message-list">
				{#each $messageList as msg}
					{@const details = getMessageDetails(msg)}
					{#if details.isToolUse}
						<p class="bg-neutral-700 p-2 rounded-md italic"><i class='fas {details.icon} w-6 mr-2 text-center'></i>{details.messageContent}</p>
					{:else if !details.isToolResult}
						<p class="{msg.role == 'error' ? 'bg-red-900' : 'bg-neutral-700'} p-2 rounded-md whitespace-pre-wrap"><i class='fas {details.icon} w-6 mr-2 text-center'></i>{details.messageContent}</p>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
{#if $apiState == "KEY_REQUIRED"}
	<textarea class="bg-neutral-700 p-2 rounded-md placeholder-gray-400 resize-none shrink-0" placeholder="Insert your Claude API Key" rows="1" on:keydown={handleKeyEnter} on:input={handleResize} id="ai-input"/>
{:else if $aiActivity}
	{#if stopRequested }
		<PanelButton buttonIcon="fa-solid fa-hand" buttonText="Stopping...">
		</PanelButton>
	{:else}
		<PanelButton buttonIcon="fa-solid fa-hand" clickHandler={handleStop} buttonText="Stop">
		</PanelButton>
	{/if}
{:else}
	<textarea class="bg-neutral-700 p-2 rounded-md placeholder-gray-400 resize-none shrink-0" placeholder={handleTool === null ? "Waiting for system initialization..." : "Prompt..."} rows="1" on:keydown={handleMessage} on:input={handleResize} bind:value={$currentMessage} id="ai-input" disabled={handleTool === null}/>
{/if}
