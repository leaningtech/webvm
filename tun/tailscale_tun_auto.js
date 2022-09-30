import {State, init} from "./tailscale_tun.js";

export async function autoConf({loginUrlCb, stateUpdateCb, netmapUpdateCb}) {
	const { listen, connect, bind, parseIP, up, down, login, logout, listeners } = await init();

	const getSettings = () => {
		settings.controlUrl = null;
		settings.exitNodeIp = null;
		settings.dnsIp = null;
		settings.wantsRunning = true;
	};

	const settings = {
		controlUrl: undefined,
		exitNodeIp: undefined,
		dnsIp: undefined,
		wantsRunning: true,
	};

	listeners.onstateupdate = (state) => {
		stateUpdateCb(state);
		switch(state)
		{
			case State.NeedsLogin:
			{
				login();
				break;
			}
			case State.Running:
			{
				break;
			}
			case State.Starting:
			{
				break;
			}
			case State.Stopped:
			{
				break;
			}
			case State.NoState:
			{
				up(settings);
				break;
			}
			default:
			{
				console.log(state);
				break;
			}
		}
	};

	
	listeners.onloginurl = (login) => {
		console.log("login url:",login);
		loginUrlCb(login);
	};

	listeners.onnetmap = (map) => {
		netmapUpdateCb(map);
		if (!settings.exitNodeIp) {
			for (let p of map.peers) {
				if (p.online && p.exitNode) {
					settings.exitNodeIp = p.addresses[0];
					settings.dnsIp = "8.8.8.8";
					up(settings);
				}
			}
		}
	};

	return {
		bind,
		connect,
		listen,
		parseIP,
		up: async () => {
			await up(settings);
		},
	}
}

