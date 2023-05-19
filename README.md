# WebVM

This repository hosts the source code for [https://webvm.io](https://webvm.io), a Linux virtual machine that runs in your browser.

<img src="assets/welcome_to_WebVM_slim.png" width="95%">

WebVM is a server-less virtual environment running fully client-side in HTML5/WebAssembly. It's designed to be Linux ABI-compatible. It runs an unmodified Debian distribution including many native development toolchains.

WebVM is powered by the CheerpX virtualization engine, and enables safe, sandboxed client-side execution of x86 binaries on any browser. CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based file system, and a Linux syscall emulator. 

# Enable networking

- Click "Connect via Tailscale" in the page header.
- Log in to Tailscale (create an account if you don't have one).
- If you are unfamiliar with Tailscale or would like additional information see [WebVM and Tailscale](/docs/Tailscale.md).

# Fork, deploy, customize

<img src="/assets/fork_deploy_instructions.gif" alt="deploy_instructions_gif" width="90%">

- Fork the repository.
- Enable Github pages in settings.
	- Click on `Settings`.
	- Go to the `Pages` section.
	- Select `Github Actions` as the source.
- Run the workflow.
	- Click on `Actions`.
	- Accept the prompt. This is required only once to enable Actions for your fork.
	- Click on the workflow named `Deploy`.
	- Click `Run workflow` and then once more `Run workflow` in the menu.
- After a few seconds a new `Deploy` workflow will start, click on it to see details.
- After the workflow completes, which takes a few minutes, it will show the URL below the `deploy_to_github_pages` job.

<img src="/assets/result.png" width="70%" >

You can now customize `dockerfiles/debian_mini` to suits your needs, or make a new Dockerfile from scratch. Use the "Path to Dockerfile" workflow parameter to select it.

# Local deployment

From a local `git clone`

- Download the `debian_mini` Ext2 image from [https://github.com/leaningtech/webvm/releases/](https://github.com/leaningtech/webvm/releases/)
	- You can also build your own by selecting the "Upload GitHub release" workflow option.
	- Place the image in the repository root folder.
- Edit `index.html`
	- Replace `DEVICE_TYPE` with `"bytes"`
	- Replace `IMAGE_URL` with the name of the Ext2 image. For example `"debian_mini_20230519_5022088024.ext2"`
- Start a local HTTP server
- Enjoy your local WebVM.

# Bugs and Issues

Please use [Issues](https://github.com/leaningtech/webvm/issues) to report any bug.
Or come to say hello / share your feedback on [Discord](https://discord.gg/yTNZgySKGa).

# More links

- [WebVM: server-less x86 virtual machines in the browser](https://leaningtech.com/webvm-server-less-x86-virtual-machines-in-the-browser/)
- [WebVM: Linux Virtualization in WebAssembly with Full Networking via Tailscale](https://leaningtech.com/webvm-virtual-machine-with-networking-via-tailscale/)
- Reference GitHub Pages deployment: [Mini.WebVM](https://mini.webvm.io)
- [Crafting the Impossible: X86 Virtualization in the Browser with WebAssembly](https://www.youtube.com/watch?v=VqrbVycTXmw) Talk at JsNation 2022

# Thanks to... 
This project depends on:
- CheerpX, made by [Leaning Technologies](https://leaningtech.com) for x86 virtualization and Linux emulation
- xterm.js, [https://xtermjs.org/](https://xtermjs.org/), for providing the Web-based terminal emulator
- [Tailscale](https://tailscale.com/) for the networking component
- [lwIP](https://savannah.nongnu.org/projects/lwip/) for the TCP/IP stack, compiled for the Web via [Cheerp](https://github.com/leaningtech/cheerp-meta)

# License
Copyright (c) Leaning Technologies Limited. All rights reserved.
