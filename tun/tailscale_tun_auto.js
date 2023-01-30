import {State, init} from "./tailscale_tun.js";

export async function autoConf({loginUrlCb, stateUpdateCb, netmapUpdateCb, controlUrl, authKey}) {
	const { tcpSocket, udpSocket, parseIP, resolve, up, down, login, logout, listeners } = await init();

	const settings = {
		controlUrl: controlUrl,
		authKey: authKey,
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
		tcpSocket,
		udpSocket,
		parseIP,
		resolve,
		up: async () => {
			await up(settings);
		},
	}
}

