# WebVM

This repository hosts the source code for [https://webvm.io](https://webvm.io), a Linux virtual machine that runs in your browser.

<img src="assets/welcome_to_WebVM_slim.png" width="70%">

WebVM is a server-less virtual environment running fully client-side in HTML5/WebAssembly. It's designed to be Linux ABI-compatible. It runs an unmodified Debian distribution including many native development toolchains.

WebVM is powered by the CheerpX virtualization engine, and enables safe, sandboxed client-side execution of x86 binaries on any browser. CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based file system, and a Linux syscall emulator. 

# How to: enable networking

- go to [https://webvm.io](https://webvm.io)
- click "Tailscale Login" in the top right corner
- log in to Tailscale (create an accout if you don't have one)
- if you want to access the public internet, you need an Exit Node. See [here](https://tailscale.com/kb/1103/exit-nodes/) for how to set one up. If you just want to access a machine in your Tailscale Network, you don't need it
- depending on your network speed, you may need to wait a few moments for the Tailscale Wasm module to be downloaded
- log in with your Tailscale credentials
- go back to the WebVM tab. You will see your IP address in the top right
- start firing network requests!

# How to: fork and deploy
- Fork the repository.
- Enable Github pages in settings.
	- Click on `Settings`.
	- Go to the `Pages` section.
	- Select `Github Actions` as the source.
- Run the workflow.
	- Go to the forked repository its Github actions tab.
	- Accept the prompt.
	- Click on the workflow named `Deploy`.
	- Click `Run workflow` and then once more `Run workflow`.

<img src="/assets/fork_deploy_instructions.gif" alt="deploy_instructions_gif" width="90%">

After the action completes, it will show the URL to the GitHub Pages site below the `deploy_to_github_pages` job.

<img src="/assets/result.png" width="70%" >


# How to: host WebVM locally

- Replace `UID` and `GID` with the requested uid and gid in double quotes.
- Replace `DEVICE_TYPE` with `"bytes"`.
- Run nginx -p . -c nginx.conf in the root of the WebVM directory. WebVM can then be found at `http://localhost:8081`.

# Bugs and Issues

Please use [Issues](https://github.com/leaningtech/webvm/issues) to report any bug.
Or come to say hello / share your feedback on [Discord](https://discord.leaningtech.com).

# Browsers support

WebVM and CheerpX are compatible with any browser, both Desktop and Mobile, provided support for [SAB](https://caniuse.com/sharedarraybuffer), [IndexedDB](https://caniuse.com/indexeddb), and the device having enough memory.

# More links

- [Do: WebVM](https://webvm.io)
- [Read: WebVM](https://leaningtech.com/webvm-server-less-x86-virtual-machines-in-the-browser/)
- [Read: WebVM + Tailscale networking](https://leaningtech.com/webvm-virtual-machine-with-networking-via-tailscale/)
- [Learn: WebVM](https://leaningtech.com/webvm)
- [Watch: WebVM at GitNation](https://www.youtube.com/watch?v=VqrbVycTXmw)

# Thanks to... 
This project depends on:
- CheerpX, made by [Leaning Technologies](https://leaningtech.com) for the virtualization part
- xterm.js, [https://xtermjs.org/](https://xtermjs.org/), for providing the Web-based terminal emulator
- [Tailscale](https://tailscale.com/) for the networking component
- [lwIP](https://savannah.nongnu.org/projects/lwip/) for the TCP/IP stack, compiled to the Web by [Cheerp](https://github.com/leaningtech/cheerp-meta)

# License
Copyright (c) Leaning Technologies Limited. All rights reserved.
