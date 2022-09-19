const State = {
	NoState: 0,
	InUseOtherUser: 1,
	NeedsLogin: 2,
	NeedsMachineAuth: 3,
	Stopped: 4,
	Starting: 5,
	Running: 6,
};
export const createUi = (parent, {upCb,downCb,loginCb,logoutCb}) => {
	const html = `
<div id="networkModalOverlay" style="width:100%;height:100vh;position:absolute;display:none ;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);color:black;z-index:100">
	<div id="networkModal" style="max-width:650px;width:100%;background:white;height:400px;display:flex;flex-direction:row;padding:10px;justify-content:space-around">

        <div class="networkModalLeft">
			<h2>Network Configuration</h2>
			<form id="networkModalForm">
				<label for="controlUrl">Control URL: </label>
				<input type="text" id="controlUrl" name="controlUrl"><br><br>
				<label for="exitNode">Exit Node: </label>
				<input type="text" id="exitNode" name="exitNode"><br><br>
				<label for="dns">DNS Server: </label>
				<input type="text" id="dns" name="dns"><br><br>
				<button type="submit">Save</button>
			</form>
			<h2>Network Status</h2>
			<div id="networkModalState">Disconnected</div>
			<div id="networkModalAction"></div>
		</div>

		<div class="networkModalRight">
			<h2>Peers</h2>
			<div id="networkModalPeers"></div>
		</div>
	</div>
</div>
`;
	const templ = document.createElement("template");
	templ.innerHTML = html;
	parent.prepend(templ.content);

	const overlay = parent.querySelector("#networkModalOverlay");
	const form = parent.querySelector("#networkModalForm");
	const stateDiv = parent.querySelector("#networkModalState");
	const actionDiv = parent.querySelector("#networkModalAction");
	const peersDiv = parent.querySelector("#networkModalPeers");

	const getSettings = () => {
		const str = window.localStorage["networkSettings"] || "{}";
		const v = JSON.parse(str);
		return v;
	};
	const setSetting = (settings) => {
		for (const k of Object.keys(settings))
		{
			if (settings[k] === "")
				settings[k] = undefined;
		}
		window.localStorage["networkSettings"] = JSON.stringify(settings);
	}
	const populate = () => {
		const settings = getSettings();
		form.querySelector("#controlUrl").value = settings.controlUrl || "";
		form.querySelector("#exitNode").value = settings.exitNodeIp || "";
		form.querySelector("#dns").value = settings.dnsIp || "";
	};
	populate();

	const showModal = () => {
		overlay.style.display = "flex";
	};
	const hideModal = () => {
		overlay.style.display = "none";
	};
	overlay.onclick = (e) => {
		if (e.target === e.currentTarget)
			hideModal();
	};

	form.onsubmit = (e) => {
		e.preventDefault();
		const settings = {
			controlUrl: form.elements["controlUrl"].value,
			exitNodeIp: form.elements["exitNode"].value,
			dnsIp: form.elements["dns"].value,
		};
		setSetting(settings);
	};

	const updateState = (state) => {
		switch(state)
		{
			case State.NeedsLogin:
			{
				loginCb();
				break;
			}
			case State.Running:
			{
				const settings = getSettings();
				settings.wantsRunning = true;
				setSetting(settings);

				stateDiv.innerHTML = "Running";
				const action = document.createElement("button");
				action.textContent = "Stop";
				action.onclick = () => {
					downCb();
					action.disabled = true;
				}
				actionDiv.innerHTML = "";
				actionDiv.appendChild(action);
				break;
			}
			case State.Starting:
			{
				stateDiv.innerHTML = "Starting";
				actionDiv.innerHTML = "";
				break;
			}
			case State.Stopped:
			{
				const settings = getSettings();
				settings.wantsRunning = false;
				setSetting(settings);

				stateDiv.innerHTML = "Stopped";
				const actionLogout = document.createElement("button");
				const actionStart = document.createElement("button");
				actionStart.textContent = "Start";
				actionStart.onclick = () => {
					const settings = getSettings();
					upCb(settings);
					actionStart.disabled = true;
					actionLogout.disabled = true;
				}
				actionLogout.textContent = "Logout";
				actionLogout.onclick = () => {
					logoutCb();
					actionStart.disabled = true;
					actionLogout.disabled = true;
				}
				actionDiv.innerHTML = "";
				actionDiv.appendChild(actionStart);
				actionDiv.appendChild(actionLogout);
				break;
			}
			case State.NoState:
			{
				stateDiv.innerHTML = "Not Started";
				const action = document.createElement("button");
				action.textContent = "Start";
				action.onclick = () => {
					const settings = getSettings();
					upCb(settings);
					action.disabled = true;
				}
				actionDiv.innerHTML = "";
				actionDiv.appendChild(action);
				setTimeout(()=> {
					const settings = getSettings();
					if (settings.wantsRunning)
					{
						upCb(settings);
						action.disabled = true;
						return;
					}
				},0);
				break;
			}
			default:
			{
				console.log(state);
				stateDiv.innerHTML = "Loading";
				actionDiv.innerHTML = "";
				break;
			}
		}
	};

	const setLoginUrl = (login) => {
		console.log("login url:",login);
		stateDiv.innerHTML = "Need Login";
		const action = document.createElement("button");
		action.textContent = "Login";
		action.onclick = () => {
			window.open(login, "_blank");
		}
		actionDiv.innerHTML = "";
		actionDiv.appendChild(action);
	};

	const updatePeers = (map) => {
		const myIP = map.self.addresses[0];
		let peers = `self -> ${myIP}<br/>`;
		for (let p of map.peers) {
			peers = `${peers}${p.name.split(".")[0]} -> ${p.addresses[0]}<br/>`;
		}
		peersDiv.innerHTML = peers;
	};

	return {
		showModal,
		updateState,
		updatePeers,
		setLoginUrl,
		getSettings,
	}
}

