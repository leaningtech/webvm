import { get, writable } from 'svelte/store';
import { browser } from '$app/environment'
import { aiActivity } from '$lib/activities.js'
import { tryPlausible } from '$lib/plausible.js';

import Anthropic from '@anthropic-ai/sdk';

var client = null;
var messages = [];
var stopFlag = false;
var lastScreenshot = null;
var screenshotCanvas = null;
var screenshotCtx = null;

export function setApiKey(key)
{
	client = new Anthropic({apiKey: key, dangerouslyAllowBrowser: true});
	// Reset messages
	messages = []
	messageList.set(messages);
	localStorage.setItem("anthropic-api-key", key);
	apiState.set("READY");
	tryPlausible("ClaudeAI Key");
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
		var tool = dc ? { type: "computer_20250124", name: "computer", display_width_px: dc.width, display_height_px: dc.height, display_number: 1 } : { type: "bash_20250124", name: "bash" }
		const config = {max_tokens: 2048,
									messages: messages,
									system: "You are running on a virtualized machine. Wait some extra time after all operations to compensate for slowdown.",
									model: 'claude-3-7-sonnet-20250219',
									tools: [tool],
									tool_choice: {type: "auto", disable_parallel_tool_use: true},
									betas: ["computer-use-2025-01-24"]
								};
		if(get(enableThinking))
			config.thinking = { type: "enabled", budget_tokens: 1024 };
		const response = await client.beta.messages.create(config);
		if(stopFlag)
		{
			aiActivity.set(false);
			return;
		}
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
				if(stopFlag)
				{
					// Maintain state consitency by stopping after adding a valid response
					aiActivity.set(false);
					return;
				}
				sendMessages(handleTool);
			}
			else if(c.type == "thinking")
			{
				addMessageInternal(response.role, [c]);
			}
			else
			{
				console.warn(`Invalid response type: ${c.type}`);
			}
		}
		if(response.stop_reason == "end_turn")
		{
			tryPlausible("ClaudeAI Success");
			aiActivity.set(false);
		}
	}
	catch(e)
	{
		tryPlausible("ClaudeAI Error");
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
	tryPlausible("ClaudeAI Use");
}

export function clearMessageHistory() {
	messages.length = 0;
	messageList.set(messages);
}

export function forceStop() {
    stopFlag = true;
    return new Promise((resolve) => {
        const unsubscribe = aiActivity.subscribe((value) => {
            if (!value) {
                unsubscribe();
				stopFlag = false;
                resolve();
            }
        });
    });
}

export function getMessageDetails(msg) {
	const isToolUse = Array.isArray(msg.content) && msg.content[0].type === "tool_use";
	const isToolResult = Array.isArray(msg.content) && msg.content[0].type === "tool_result";
	const isThinking = Array.isArray(msg.content) && msg.content[0].type === "thinking";
	let icon = "";
	let messageContent = "";

	if (isToolUse) {
		let tool = msg.content[0].input;
		if (tool.action === "screenshot") {
			icon = "fa-desktop";
			messageContent = "Screenshot";
		} else if (tool.action === "mouse_move") {
			icon = "fa-mouse-pointer";
			var coords = tool.coordinate;
			messageContent = `Mouse at (${coords[0]}, ${coords[1]})`;
		} else if (tool.action === "left_click") {
			icon = "fa-mouse-pointer";
			var coords = tool.coordinate;
			messageContent = `Left click at (${coords[0]}, ${coords[1]})`;
		} else if (tool.action === "right_click") {
			icon = "fa-mouse-pointer";
			var coords = tool.coordinate;
			messageContent = `Right click at (${coords[0]}, ${coords[1]})`;
		} else if (tool.action === "wait") {
			icon = "fa-hourglass-half";
			messageContent = "Waiting";
		} else if (tool.action === "key") {
			icon = "fa-keyboard";
			messageContent = `Key press: ${tool.text}`;
		} else if (tool.action === "type") {
			icon = "fa-keyboard";
			messageContent = "Type text";
		} else {
			icon = "fa-screwdriver-wrench";
			messageContent = "Use the system";
		}
	} else if (isThinking) {
		icon = "fa-brain";
		messageContent = "Thinking...";
	} else {
		icon = msg.role === "user" ? "fa-user" : "fa-robot";
		messageContent = msg.content;
	}

	return {
		isToolUse,
		isToolResult,
		icon,
		messageContent,
		role: msg.role
	};
}

async function yieldHelper(timeout)
{
	return new Promise(function(f2, r2)
	{
		setTimeout(f2, timeout);
	});
}

async function kmsSendChar(textArea, charStr)
{
	textArea.value = "_" + charStr;
	var ke = new KeyboardEvent("keydown");
	textArea.dispatchEvent(ke);
	var ke = new KeyboardEvent("keyup");
	textArea.dispatchEvent(ke);
	await yieldHelper(0);
}

function getKmsInputElement()
{
	// Find the CheerpX textare, it's attached to the body element
	for(const node of document.body.children)
	{
		if(node.tagName == "TEXTAREA")
			return node;
	}
	return null;
}

export async function handleToolImpl(tool, term)
{
	if(tool.command)
	{
		var sentinel = "# End of AI command";
		var buffer = term.buffer.active;
		// Get the current cursor position
		var marker = term.registerMarker();
		var startLine = marker.line;
		marker.dispose();
		var ret = new Promise(function(f, r)
		{
			var callbackDisposer = term.onWriteParsed(function()
			{
				var curLength = buffer.length;
				// Accumulate the output and see if the sentinel has been printed
				var output = "";
				for(var i=startLine + 1;i<curLength;i++)
				{
					var curLine = buffer.getLine(i).translateToString(true, 0, term.cols);;
					if(curLine.indexOf(sentinel) >= 0)
					{
						// We are done, cleanup and return
						callbackDisposer.dispose();
						return f(output);
					}
					output += curLine + "\n";
				}
			});
		});
		term.input(tool.command);
		term.input("\n");
		term.input(sentinel);
		term.input("\n");
		return ret;
	}
	else if(tool.action)
	{
		// Desktop control
		// TODO: We should have an explicit API to interact with CheerpX display
		switch(tool.action)
		{
			case "screenshot":
			{
				// Insert a 3 seconds delay unconditionally, the reference implementation uses 2
				await yieldHelper(3000);
				var delayCount = 0;
				var display = document.getElementById("display");
				var dc = get(displayConfig);
				if(screenshotCanvas == null)
				{
					screenshotCanvas = document.createElement("canvas");
					screenshotCtx = screenshotCanvas.getContext("2d");
				}
				if(screenshotCanvas.width != dc.width || screenshotCanvas.height != dc.height)
				{
					screenshotCanvas.width = dc.width;
					screenshotCanvas.height = dc.height;
				}
				while(1)
				{
					// Resize the canvas to a Claude compatible size
					screenshotCtx.drawImage(display, 0, 0, display.width, display.height, 0, 0, dc.width, dc.height);
					var dataUrl = screenshotCanvas.toDataURL("image/png");
					if(dataUrl == lastScreenshot)
					{
						// Delay at most 3 times
						if(delayCount < 3)
						{
							// TODO: Defensive message, validate and remove
							console.warn("Identical screenshot, rate limiting");
							delayCount++;
							// Wait some time and retry
							await yieldHelper(5000);
							continue;
						}
					}
					lastScreenshot = dataUrl;
					// Remove prefix from the encoded data
					dataUrl = dataUrl.substring("data:image/png;base64,".length);
					var imageSrc = { type: "base64", media_type: "image/png", data: dataUrl };
					var contentObj = { type: "image", source: imageSrc };
					return [ contentObj ];
				}
			}
			case "mouse_move":
			{
				var coords = tool.coordinate;
				var dc = get(displayConfig);
				var mouseX = coords[0] / dc.mouseMult;
				var mouseY = coords[1] / dc.mouseMult;
				var display = document.getElementById("display");
				var clientRect = display.getBoundingClientRect();
				var me = new MouseEvent('mousemove', { clientX: mouseX + clientRect.left, clientY: mouseY + clientRect.top });
				display.dispatchEvent(me);
				return null;
			}
			case "left_click":
			{
				var coords = tool.coordinate;
				var dc = get(displayConfig);
				var mouseX = coords[0] / dc.mouseMult;
				var mouseY = coords[1] / dc.mouseMult;
				var display = document.getElementById("display");
				var clientRect = display.getBoundingClientRect();
				var me = new MouseEvent('mousedown', { clientX: mouseX + clientRect.left, clientY: mouseY + clientRect.top, button: 0 });
				display.dispatchEvent(me);
				// This delay prevent X11 logic from debouncing the mouseup
				await yieldHelper(60)
				me = new MouseEvent('mouseup', { clientX: mouseX + clientRect.left, clientY: mouseY + clientRect.top, button: 0 });
				display.dispatchEvent(me);
				return null;
			}
			case "right_click":
			{
				var coords = tool.coordinate;
				var dc = get(displayConfig);
				var mouseX = coords[0] / dc.mouseMult;
				var mouseY = coords[1] / dc.mouseMult;
				var display = document.getElementById("display");
				var clientRect = display.getBoundingClientRect();
				var me = new MouseEvent('mousedown', { clientX: mouseX + clientRect.left, clientY: mouseY + clientRect.top, button: 2 });
				display.dispatchEvent(me);
				// This delay prevent X11 logic from debouncing the mouseup
				await yieldHelper(60)
				me = new MouseEvent('mouseup', { clientX: mouseX + clientRect.left, clientY: mouseY + clientRect.top, button: 2 });
				display.dispatchEvent(me);
				return null;
			}
			case "type":
			{
				var str = tool.text;
				return new Promise(async function(f, r)
				{
					var textArea = getKmsInputElement();
					for(var i=0;i<str.length;i++)
					{
						await kmsSendChar(textArea, str[i]);
					}
					f(null);
				});
			}
			case "key":
			{
				var textArea = getKmsInputElement();
				var key = tool.text;
				// Support arbitrary order of modifiers
				var isCtrl = false;
				var isAlt = false;
				var isShift = false;
				while(1)
				{
					if(key.startsWith("shift+"))
					{
						isShift = true;
						key = key.substr("shift+".length);
						var ke = new KeyboardEvent("keydown", {keyCode: 0x10});
						textArea.dispatchEvent(ke);
						await yieldHelper(0);
						continue;
					}
					else if(key.startsWith("ctrl+"))
					{
						isCtrl = true;
						key = key.substr("ctrl+".length);
						var ke = new KeyboardEvent("keydown", {keyCode: 0x11});
						textArea.dispatchEvent(ke);
						await yieldHelper(0);
						continue;
					}
					else if(key.startsWith("alt+"))
					{
						isAlt = true;
						key = key.substr("alt+".length);
						var ke = new KeyboardEvent("keydown", {keyCode: 0x12});
						textArea.dispatchEvent(ke);
						await yieldHelper(0);
						continue;
					}
					break;
				}
				var ret = null;
				// Dispatch single chars directly and parse the rest
				if(key.length == 1)
				{
					await kmsSendChar(textArea, key);
				}
				else
				{
					switch(tool.text)
					{
						case "Return":
							await kmsSendChar(textArea, "\n");
							break;
						case "Escape":
							var ke = new KeyboardEvent("keydown", {keyCode: 0x1b});
							textArea.dispatchEvent(ke);
							await yieldHelper(0);
							ke = new KeyboardEvent("keyup", {keyCode: 0x1b});
							textArea.dispatchEvent(ke);
							await yieldHelper(0);
							break;
						default:
							// TODO: Support more key combinations
							ret = new Error(`Error: Invalid key '${tool.text}'`);
					}
				}
				if(isShift)
				{
					var ke = new KeyboardEvent("keyup", {keyCode: 0x10});
					textArea.dispatchEvent(ke);
					await yieldHelper(0);
				}
				if(isCtrl)
				{
					var ke = new KeyboardEvent("keyup", {keyCode: 0x11});
					textArea.dispatchEvent(ke);
					await yieldHelper(0);
				}
				if(isAlt)
				{
					var ke = new KeyboardEvent("keyup", {keyCode: 0x12});
					textArea.dispatchEvent(ke);
					await yieldHelper(0);
				}
				return ret;
			}
			case "wait":
			{
				// Wait 2x what the machine expects to compensate for virtualization slowdown
				await yieldHelper(tool.duration * 2 * 1000);
				return null;
			}
			default:
			{
				break;
			}
		}
		return new Error("Error: Invalid action");
	}
	else
	{
		// We can get there due to model hallucinations
		return new Error("Error: Invalid tool syntax");
	}
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
export const enableThinking = writable(false);

if(browser)
	initialize();
