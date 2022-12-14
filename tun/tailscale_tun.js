import "./wasm_exec.js";

import ipStackAwait from "./ipstack.js";

export const State = {
	NoState: 0,
	InUseOtherUser: 1,
	NeedsLogin: 2,
	NeedsMachineAuth: 3,
	Stopped: 4,
	Starting: 5,
	Running: 6,
};

export async function init() {
	const {IpStack} = await ipStackAwait();
	IpStack.init();

	const listeners = {
		onstateupdate: () => {},
		onnetmap: () => {},
		onloginurl: () => {},
	}

	let ipn = null;
	let localIp = null;
	let dnsIp = null;

	const lazyRunIpn = async () => {
		const wasmUrl = new URL("tailscale.wasm", import.meta.url);
		const go = new window.Go();
		let {instance} = await fetch(wasmUrl).then(x => x.arrayBuffer()).then(x => WebAssembly.instantiate(x,go.importObject));
		go.run(instance);

		const sessionStateStorage = {
			setState(id, value) {
			window.sessionStorage[`ipn-state-${id}`] = value
			},
			getState(id) {
			return window.sessionStorage[`ipn-state-${id}`] || ""
			},
		}
		ipn = newIPN({
			// Persist IPN state in sessionStorage in development, so that we don't need
			// to re-authorize every time we reload the page.
			//stateStorage: sessionStateStorage,
		});

		const setupIpStack = () => {
			ipn.tun.onmessage = function(ev) {
				IpStack.input(ev.data)
			};
			IpStack.output(function(p){
				ipn.tun.postMessage(p, [p.buffer]);
			});
		};
		setupIpStack();

		ipn.run({
			notifyState: (s) => listeners.onstateupdate(s),
			notifyNetMap: (s) => {
				const netMap = JSON.parse(s);
				listeners.onnetmap(netMap);
				const newLocalIp = netMap.self.addresses[0];
				if (localIp != newLocalIp)
				{
					localIp = newLocalIp;
					try{
					IpStack.up({localIp, dnsIp, ipMap: {
						["127.0.0.53"]: dnsIp,
						[dnsIp]: "127.0.0.53",
					}});
					}catch(e){
						console.log(e);
						debugger;
					}
				}
			},
			notifyBrowseToURL: (l) => listeners.onloginurl(l),
		});

	};


	return {
		connect: IpStack.connect,
		listen: IpStack.listen,
		bind: IpStack.bind,
		parseIP: IpStack.parseIP,
		resolve: IpStack.resolve,
		up: async (conf) => {
			if (ipn == null) {
				await lazyRunIpn();
			}
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
		listeners
	};
}

