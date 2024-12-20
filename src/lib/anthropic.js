import { get, writable } from 'svelte/store';
import { browser } from '$app/environment'
import { aiActivity } from '$lib/activities.js'

import Anthropic from '@anthropic-ai/sdk';

var client = null;
var messages = [];

export function setApiKey(key)
{
	client = new Anthropic({apiKey: key, dangerouslyAllowBrowser: true});
	// Reset messages
	messages = []
	messageList.set(messages);
	localStorage.setItem("anthropic-api-key", key);
	apiState.set("READY");
	plausible("ClaudeAI Key");
}

function clearApiKey()
{
	localStorage.removeItem("anthropic-api-key");
	apiState.set("KEY_REQUIRED");
}

function addMessageInternal(role, content)
{
	messages.push({role: role, content: content});
	messageList.set(messages);
}

async function sendMessages(handleTool)
{
	aiActivity.set(true);
	try
	{
		var dc = get(displayConfig);
		var tool = dc ? { type: "computer_20241022", name: "computer", display_width_px: dc.width, display_height_px: dc.height } : { type: "bash_20241022", name: "bash" }
		const response = await client.beta.messages.create({max_tokens: 1024, messages: messages, model: 'claude-3-5-sonnet-20241022', tools: [tool], betas: ["computer-use-2024-10-22"]}); 
		// Remove all the image payloads, we don't want to send them over and over again
		for(var i=0;i<messages.length;i++)
		{
			var c = messages[i].content;
			if(Array.isArray(c))
			{
				if(c[0].type == "tool_result" && c[0].content && c[0].content[0].type == "image")
					delete c[0].content;
			}
		}
		var content = response.content;
		// Be robust to multiple response
		for(var i=0;i<content.length;i++)
		{
			var c = content[i];
			if(c.type == "text")
			{
				addMessageInternal(response.role, c.text);
			}
			else if(c.type == "tool_use")
			{
				addMessageInternal(response.role, [c]);
				var commandResponse = await handleTool(c.input);
				var responseObj = {type: "tool_result", tool_use_id: c.id };
				if(commandResponse != null)
				{
					if(commandResponse instanceof Error)
					{
						console.warn(`Tool error: ${commandResponse.message}`);
						responseObj.content = commandResponse.message;
						responseObj.is_error = true;
					}
					else
					{
						responseObj.content = commandResponse;
					}
				}
				addMessageInternal("user", [responseObj]);
				sendMessages(handleTool);
			}
			else
			{
				console.warn(`Invalid response type: ${c.type}`);
			}
		}
		if(response.stop_reason == "end_turn")
			aiActivity.set(false);
	}
	catch(e)
	{
		if(e.status == 401)
		{
			addMessageInternal('error', 'Invalid API key');
			clearApiKey();
		}
		else
		{
			addMessageInternal('error', e.error.error.message);
		}
			
	}
}

export function addMessage(text, handleTool)
{
	addMessageInternal('user', text);
	sendMessages(handleTool);
	plausible("ClaudeAI Use");
}

function initialize()
{
	var savedApiKey = localStorage.getItem("anthropic-api-key");
	if(savedApiKey)
		setApiKey(savedApiKey);
}

export const apiState = writable("KEY_REQUIRED");
export const messageList = writable(messages);
export const currentMessage = writable("");
export const displayConfig = writable(null);

if(browser)
	initialize();
