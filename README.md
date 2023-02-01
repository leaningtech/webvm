# WebVM

This repository hosts the source code of for [https://webvm.io](https://webvm.io), a Linux virtual machine that runs in your browser.

<img src="assets/welcome_to_WebVM_slim.png" width="70%">

WebVM is a server-less virtual environment running fully client-side in HTML5/WebAssembly. It's designed to be Linux ABI-compatible. It runs an unmodified Debian distribution including many native development toolchains.

WebVM is powered by the CheerpX virtualization engine, and enables safe, sandboxed client-side execution of x86 binaries on any browser. CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based file system, and a Linux syscall emulator. 

# How to: general usage

- go to [https://webvm.io](https://webvm.io)
- use the provided terminal environment
- have fun!

# How to: enable networking

- go to [https://webvm.io](https://webvm.io)
- click "Tailscale Login" in the top right corner
- log in to Tailscale (create an accout if you don't have one)
- if you want to access the public internet, you need an Exit Node. See [here](https://tailscale.com/kb/1103/exit-nodes/) for how to set one up. If you just want to access a machine in your Tailscale Network, you don't need it
- depending on your network speed, you may need to wait a few moments for the Tailscale Wasm module to be downloaded
- log in with your Tailscale credentials
- go back to the WebVM tab. You will see your IP address in the top right
- start firing network requests!

# How to: login to Tailscale with an Auth key

- Add `#authKey=<your-key>` at the end of the URL
- Done. You don't need to manually log in anymore

It is recommended to use an ephemeral key.

# How to: login to a self-hosted Tailscale network (Headscale)

- Add `#controlUrl=<your-control-url>` at the end of the URL
- You can combine this option with `authKey` with a `&`: `#controlUrl=<url>&authKey=<key>`

# How to host WebVM locally

- Replace `CX_VERSION` in index.html and tinycore.html with a valid version of CheerpX. The latest version can be found at [https://webvm.io](https://webvm.io)
- Run nginx -p . -c nginx.conf in the root of the WebVM directory. WebVM can then be found at `http://localhost:8081`

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
