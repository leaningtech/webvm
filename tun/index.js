import { init } from "./tailscale_tun.js";
import { showPeers, showLoginURL } from "./ui.js";

const { loginURL, ipStack } = await init({ netMapCallback: showPeers });
showLoginURL(loginURL);
const { connect, parseIP } = await ipStack;

async function testTcp()
{
  let p = await connect(parseIP("100.84.181.36"), 6666);
  if (!p)
  throw "cannot connect";
  p.onmessage = (ev) => {
  let str = "";
  if (ev.data == null)
    str = "CLOSED";
  else
  {
    let decoder = new TextDecoder();
    str = decoder.decode(ev.data)
  }
  console.log("received", str);
  };
  let encoder = new TextEncoder();
  let data = encoder.encode("hi from browser");
  p.postMessage(data, [data.buffer]);
}

testTcp();
