import { State } from "/tun/tailscale_tun.js";
import { autoConf } from "/tun/tailscale_tun_auto.js";

let resolveLogin = null;
let loginPromise = new Promise((f,r) => {
    resolveLogin = f;
});
const loginElem = document.getElementById("loginLink");
const statusElem = document.getElementById("networkStatus");
const loginUrlCb = (url) => {
    loginElem.href = url;
    loginElem.target = "_blank";
    statusElem.innerHTML = "Tailscale Login";
    resolveLogin(url);
};
const stateUpdateCb = (state) => {
    switch(state)
    {
        case State.NeedsLogin:
        {
            break;
        }
        case State.Running:
        {
            loginElem.href = "https://login.tailscale.com/admin/machines";
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
            break;
        }
    }
};
const netmapUpdateCb = (map) => {
    const ip = map.self.addresses[0];
    statusElem.innerHTML = "IP: "+ip;
};
const { listen, connect, bind, up } = await autoConf({
    loginUrlCb,
    stateUpdateCb,
    netmapUpdateCb,
});
window.networkInterface.bind = bind;
window.networkInterface.connect = connect;
window.networkInterface.listen = listen;
window.networkInterface.ready = true;
loginElem.style.cursor = "pointer";
statusElem.style.color = "white";
loginElem.onclick = () => {
    loginElem.onclick = null;
    statusElem.innerHTML = "Downloading network code...";
    const w = window.open("login.html", "_blank");
async function waitLogin() {
    await up();
        statusElem.innerHTML = "Starting login...";
const url = await loginPromise;
w.location.href = url;
}
waitLogin();
};
