function setupNetworkInterface()
{
    let params = new URLSearchParams("?"+window.location.hash.substr(1));
    let authKey = params.get("authKey") || undefined;
    let controlUrl = params.get("controlUrl") || undefined;
    console.log(authKey, controlUrl);
    let loginElemUrl = controlUrl ? null : "https://login.tailscale.com/admin/machines";

    let resolveLogin = null;
    let loginPromise = new Promise((f,r) => {
        resolveLogin = f;
    });
    const loginElem = document.getElementById("loginLink");
    const statusElem = document.getElementById("networkStatus");
    const ipCopiedElem = document.getElementById("ipCopied");
    const loginUrlCb = (url) => {
        loginElem.href = url;
        loginElem.target = "_blank";
        statusElem.innerHTML = "Tailscale Login";
        resolveLogin(url);
    };
    const stateUpdateCb = (state) => {
        switch(state)
        {
            case 6 /*Running*/:
            {
                if (loginElemUrl) {
                    loginElem.href = loginElemUrl;
                }
                break;
            }
        }
    };
    const netmapUpdateCb = (map) => {
        const ip = map.self.addresses[0];
        statusElem.innerText = "IP: "+ip;
	loginElem.title = "Right click to copy"
	const rmb_to_copy = (event) => {
		// To prevent the default contexmenu from showing up when right-clicking..
		event.preventDefault();
		// Copy the IP to the clipboard.
		window.navigator.clipboard.writeText(ip)
		.catch((msg) => { console.log("network.js: Copy ip to clipboard: Error: " + msg) });
		statusElem.style.visibility = "hidden";
		ipCopiedElem.style.visibility = "unset";
		setTimeout(() => {
			statusElem.style.visibility = "unset";
			ipCopiedElem.style.visibility = "hidden";
		}, 2000);
	};
	loginElem.addEventListener("contextmenu", rmb_to_copy);
    };
    loginElem.style.cursor = "pointer";
    loginElem.title = "Connect to Tailscale";
    statusElem.style.color = "white";
    return {
        loginUrlCb,
        stateUpdateCb,
        netmapUpdateCb,
        authKey,
        controlUrl,

        loginElem,
        statusElem,
        loginElemUrl,
        loginPromise,
    };
}
function registerNetworkLogin(cx, { authKey, statusElem, loginElem, loginElemUrl, loginPromise })
{
    if (authKey) {
        if (loginElemUrl) {
            loginElem.href = loginElemUrl;
            loginElem.target = "_blank";
        }
        cx.networkLogin();
    } else {
        loginElem.onclick = () => {
            loginElem.onclick = null;
            statusElem.innerHTML = "Downloading network code...";
            const w = window.open("login.html", "_blank");
            async function waitLogin() {
                await cx.networkLogin();
                statusElem.innerHTML = "Starting login...";
                const url = await loginPromise;
                statusElem.innerHTML = "Login URL ready...";
                w.location.href = url;
            }
            waitLogin();
        };
    }
}
