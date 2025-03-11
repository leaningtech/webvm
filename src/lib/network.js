import { writable } from 'svelte/store';
import { browser } from '$app/environment'

let authKey = undefined;
let controlUrl = undefined;
if(browser)
{
	let params = new URLSearchParams("?"+window.location.hash.substr(1));
	authKey = params.get("authKey") || undefined;
	controlUrl = params.get("controlUrl") || undefined;
}
let dashboardUrl = controlUrl ? null : "https://login.tailscale.com/admin/machines";
let resolveLogin = null;
let loginPromise = new Promise((f,r) => {
	resolveLogin = f;
});
let connectionState = writable("DISCONNECTED");
let exitNode = writable(false);

function loginUrlCb(url)
{
	connectionState.set("LOGINREADY");
	resolveLogin(url);
}

function stateUpdateCb(state)
{
	switch(state)
	{
		case 6 /*Running*/:
		{
			connectionState.set("CONNECTED");
			break;
		}
	}
}

function netmapUpdateCb(map)
{
	networkData.currentIp = map.self.addresses[0];
	var exitNodeFound = false;
	for(var i=0; i < map.peers.length;i++)
	{
		if(map.peers[i].exitNode)
		{
			exitNodeFound = true;
			break;
		}
	}
	if(exitNodeFound)
	{
		exitNode.set(true);
	}
}

export async function startLogin()
{
	connectionState.set("LOGINSTARTING");
	const url = await loginPromise;
	networkData.loginUrl = url;
	return url;
}

async function handleCopyIP(event)
{
	// To prevent the default contexmenu from showing up when right-clicking..
	event.preventDefault();
	// Copy the IP to the clipboard.
	try
	{
		await window.navigator.clipboard.writeText(networkData.currentIp)
		connectionState.set("IPCOPIED");
		setTimeout(() => {
			connectionState.set("CONNECTED");
		}, 2000);
	}
	catch(msg)
	{
		console.log("Copy ip to clipboard: Error: " + msg);
	}
}

export function updateButtonData(state, handleConnect) {
	switch(state) {
		case "DISCONNECTED":
			return {
				buttonText: "Connect to Tailscale",
				isClickable: true,
				clickHandler: handleConnect,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
		case "DOWNLOADING":
			return {
				buttonText: "Loading IP stack...",
				isClickable: false,
				clickHandler: null,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
		case "LOGINSTARTING":
			return {
				buttonText: "Starting Login...",
				isClickable: false,
				clickHandler: null,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
		case "LOGINREADY":
			return {
				buttonText: "Login to Tailscale",
				isClickable: true,
				clickHandler: null,
				clickUrl: networkData.loginUrl,
				buttonTooltip: null,
				rightClickHandler: null
			};
		case "CONNECTED":
			return {
				buttonText: `IP: ${networkData.currentIp}`,
				isClickable: true,
				clickHandler: null,
				clickUrl: networkData.dashboardUrl,
				buttonTooltip: "Right-click to copy",
				rightClickHandler: handleCopyIP
			};
		case "IPCOPIED":
			return {
				buttonText: "Copied!",
				isClickable: false,
				clickHandler: null,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
		default:
			return {
				buttonText: `Text for state: ${state}`,
				isClickable: false,
				clickHandler: null,
				clickUrl: null,
				buttonTooltip: null,
				rightClickHandler: null
			};
	}
}

export const networkInterface = { authKey: authKey, controlUrl: controlUrl, loginUrlCb: loginUrlCb, stateUpdateCb: stateUpdateCb, netmapUpdateCb: netmapUpdateCb };

export const networkData = { currentIp: null, connectionState: connectionState, exitNode: exitNode, loginUrl: null, dashboardUrl: dashboardUrl }
