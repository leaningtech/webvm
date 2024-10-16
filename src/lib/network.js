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

function loginUrlCb(url)
{
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
}

export async function startLogin()
{
	connectionState.set("LOGINSTARTING");
	const url = await loginPromise;
	networkData.loginUrl = url;
	connectionState.set("LOGINREADY");
	return url;
}

export const networkInterface = { authKey: authKey, controlUrl: controlUrl, loginUrlCb: loginUrlCb, stateUpdateCb: stateUpdateCb, netmapUpdateCb: netmapUpdateCb };

export const networkData = { currentIp: null, connectionState: connectionState, loginUrl: null, dashboardUrl: dashboardUrl }
