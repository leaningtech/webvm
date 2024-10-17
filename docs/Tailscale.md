# Enable networking

- In order to access the public internet, you will need an Exit Node. See [Tailscale Exit Nodes](https://tailscale.com/kb/1103/exit-nodes/) for detailed instructions.
	- ***Note:*** This is not required to access machines in your own Tailscale Network.
- Depending on your network speed, you may need to wait a few moments for the Tailscale Wasm module to be downloaded.

**When all set:**
- Log in with your Tailscale credentials.
- Go back to the WebVM tab.
- The `Connect to Tailscale` button in the Networking side-panel should be replaced by your IP address.

# Log in to Tailscale with an Auth key

- Add `#authKey=<your-key>` at the end of the URL.
- Done, you don't need to manually log in anymore.

It is recommended to use an ephemeral key.

# Log in to a self-hosted Tailscale network (Headscale)

- Add `#controlUrl=<your-control-url>` at the end of the URL.
- You can combine this option with `authKey` with a `&`: `#controlUrl=<url>&authKey=<key>`.
