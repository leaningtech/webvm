import "./wasm_exec.js";

import ipStackAwait from "./ipstack.js";

export async function init({ stateUpdateCb, netMapCb, loginUrlCb })
{
	const {IpStack} = await ipStackAwait();

	const wasmUrl = new URL("tailscale.wasm", import.meta.url);
	const go = new window.Go();
	let {instance} = await WebAssembly.instantiateStreaming(fetch(wasmUrl),go.importObject);
	go.run(instance);

	const State = {
		NoState: 0,
		InUseOtherUser: 1,
		NeedsLogin: 2,
		NeedsMachineAuth: 3,
		Stopped: 4,
		Starting: 5,
		Running: 6,
	};


	const sessionStateStorage = {
		setState(id, value) {
		window.sessionStorage[`ipn-state-${id}`] = value
		},
		getState(id) {
		return window.sessionStorage[`ipn-state-${id}`] || ""
		},
	}

	const ipn = newIPN({
		// Persist IPN state in sessionStorage in development, so that we don't need
		// to re-authorize every time we reload the page.
		stateStorage: sessionStateStorage,
	});

	const setupIpStack = () => {
		ipn.tun.onmessage = function(ev) {
		console.log("received on tun:", ev.data)
		IpStack.input(ev.data)
		};
		IpStack.output(function(p){
		console.log("sending from tun:", p)
		ipn.tun.postMessage(p);
		});
		IpStack.init();
	};
	setupIpStack();

	let localIp = null;
	let dnsIp = null;

	ipn.run({
		notifyState: stateUpdateCb,
		notifyNetMap: (s) => {
			const netMap = JSON.parse(s);
			if (netMapCb)
				netMapCb(netMap);
			const newLocalIp = netMap.self.addresses[0];
			if (localIp != newLocalIp)
			{
				localIp = newLocalIp;
				IpStack.up({localIp, ipMap: {
					["127.0.0.53"]: dnsIp,
					[dnsIp]: "127.0.0.53",
				}});
			}
		},
		notifyBrowseToURL: loginUrlCb,
	});

	return {
		connect: IpStack.connect,
		listen: IpStack.listen,
		bind: IpStack.bind,
		parseIP: IpStack.parseIP,
		up: (conf) => {
			ipn.up(conf);
			localIp = null;
			dnsIp = conf.dnsIp || "127.0.0.53";
		},
		down: () => {
			ipn.down();
			IpStack.down();
		},
		login: () => ipn.login(),
		logout: () => ipn.logout(),
	};
}

