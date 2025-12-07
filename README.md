# WebVM

[![Discord server](https://img.shields.io/discord/988743885121548329?color=%235865F2&logo=discord&logoColor=%23fff)](https://discord.gg/yWRr2YnD9c)
[![Issues](https://img.shields.io/github/issues/leaningtech/webvm)](https://github.com/leaningtech/webvm/issues)

This repository hosts the source code for [https://webvm.io](https://webvm.io), a Linux virtual machine that runs in your browser.

Try out the new Alpine / Xorg / i3 graphical environment: [https://webvm.io/alpine.html](https://webvm.io/alpine.html)

<img src="/assets/welcome_to_WebVM_alpine_2024.png" width="90%">

WebVM is a server-less virtual environment running fully client-side in HTML5/WebAssembly. It's designed to be Linux ABI-compatible. It runs an unmodified Debian distribution including many native development toolchains.

WebVM is powered by the CheerpX virtualization engine, and enables safe, sandboxed client-side execution of x86 binaries on any browser. CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based file system, and a Linux syscall emulator. 

## Table of Contents

- [Fork, deploy, customize](#fork-deploy-customize)
- [Running WebVM locally with a custom Debian mini disk image](#run-webvm-locally-with-a-custom-debian-mini-disk-image)
- [Example customization: Python3 REPL](#example-customization-python3-repl)
- [How to use Claude AI](#how-to-use-claude-ai)
- [Bugs and Issues](#bugs-and-issues)
- [More links](#more-links)
- [Thanks to...](#thanks-to)
- [Versioning](#versioning)
- [License](#license)

# Enable networking

Modern browsers do not provide APIs to directly use TCP or UDP. WebVM provides networking support by integrating with Tailscale, a VPN network that supports WebSockets as a transport layer.

1.  Open the "Networking" panel from the side-bar
2.  Click "Connect to Tailscale" from the panel
3.  Log in to Tailscale (create an account if you don't have one)
4. Click "Connect" when prompted by Tailscale

WebVM now has access to machines in your own local Tailscale Network!

## the world wide web

If you would like to access the public internet, you will need an Exit Node. See [Tailscale Exit Nodes](https://tailscale.com/kb/1103/exit-nodes/) for detailed instructions.
(Depending on your network speed, you may need to wait a few moments for the Tailscale Wasm module to be downloaded.)
Once that is set up:
- Log in with your Tailscale credentials.
- Go back to the WebVM tab.
- The `Connect to Tailscale` button in the Networking side-panel should be replaced by your IP address.


## using authkey

As an alternative to manually logging in, you can add your tailscale auth Key at the end of the webvm URL.

`https://webvm.io/#authKey=<your-key>`

It is recommended to use an ephemeral key.

## Selfhosting your tailscale network

We also support [headscale](https://headscale.net/stable/), a selfhosted open source implementation of the Tailscale control server.

Though as headscale unfortunately doesn't support adding CORS headers. You will have to set up a proxy server to add them. Headscales instructions on doing so can be found [here](https://headscale.net/stable/ref/integration/reverse-proxy/#nginx). 

Once ready, add the following line to your `location /` block in your nginx config file.

``` Nginx
 if ($http_origin = "https://webvm.io") {
            add_header 'Access-Control-Allow-Origin' "$http_origin";
			add_header 'Access-Control-Allow-Credentials' 'true' always;
        }
```


To log in to your headscale network add `#controlUrl=<your-control-url>` to the webVM url.

**Notes:**

- If self hosting, replace "https://webvm.io" with your own url.
- This is equivelant to the tailscale  `--login-server` command line option.
- If used with authkey, don't forget to seperate the URL fragments with a `&` inbetween.


# Fork, deploy, customize

<img src="/assets/fork_deploy_instructions.gif" alt="deploy_instructions_gif" width="90%">

- Fork the repository.
- Enable Github pages in settings.
	- Click on `Settings`.
	- Go to the `Pages` section.
	- Select `Github Actions` as the source.
        - If you are using a custom domain, ensure `Enforce HTTPS` is enabled. 
- Run the workflow.
	- Click on `Actions`.
	- Accept the prompt. This is required only once to enable Actions for your fork.
	- Click on the workflow named `Deploy`.
	- Click `Run workflow` and then once more `Run workflow` in the menu.
- After a few seconds a new `Deploy` workflow will start, click on it to see details.
- After the workflow completes, which takes a few minutes, it will show the URL below the `deploy_to_github_pages` job.

<img src="/assets/result.png" width="70%" >

You can now customize `dockerfiles/debian_mini` to suit your needs, or make a new Dockerfile from scratch. Use the `Path to Dockerfile` workflow parameter to select it.

- If you would like to use our full desktop Alpine image, you can find it's dockerfile [**here**](github.com/leaningtech/alpine-image).

- For more information on creating custom images, see our [Custom disk Image documentation](https://cheerpx.io/docs/guides/custom-images).


# Run WebVM locally with a custom Debian mini disk image

### 1. Clone the WebVM Repository

```sh
git clone https://github.com/leaningtech/webvm.git
cd webvm
```

### 2. Download the Debian mini Ext2 image

Run the following command to download the Debian mini Ext2 image:

```sh
wget "https://github.com/leaningtech/webvm/releases/download/ext2_image/debian_mini_20230519_5022088024.ext2"
```

(*You can also build your own disk image by selecting the **"Upload GitHub release"** workflow option*)

### 3. Update the configuration file

	Edit `config_public_terminal.js` to reference your local disk image:

- Replace: 
	
	`"wss://disks.webvm.io/debian_large_20230522_5044875331.ext2"`
	
	With:
	
	`"/disk-images/debian_mini_20230519_5022088024.ext2"`

	(*Use an absolute or relative URL pointing to the disk image location.*)


- Replace `"cloud"` with the correct disk image type: `"bytes"`

	
### 4. Build WebVM

Run the following commands to install dependencies and build WebVM:

```sh
npm install
npm run build
```

The output will be placed in the `build` directory.

### 5. Configure Nginx

- Create a directory for the disk image:

```sh
mkdir disk-images
mv debian_mini_20230519_5022088024.ext2 disk-images/
```

- Modify your `nginx.conf` file to serve the disk image. Add the following location block:

```nginx
location /disk-images/ {
	root .;
	autoindex on;
}
```

### 6, Start Nginx

Run the following command to start Nginx:

```sh
nginx -p . -c nginx.conf
```

*Nginx will automatically serve the build directory.*

### 7. Access WebVM

Open a browser and visit: `http://127.0.0.1:8081`.

Enjoy your local WebVM!

---



# Example customization: Python3 REPL

The `Deploy` workflow takes into account the `CMD` specified in the Dockerfile. To build a REPL you can simply apply this patch and deploy.

```diff
diff --git a/dockerfiles/debian_mini b/dockerfiles/debian_mini
index 2878332..1f3103a 100644
--- a/dockerfiles/debian_mini
+++ b/dockerfiles/debian_mini
@@ -15,4 +15,4 @@ WORKDIR /home/user/
 # We set env, as this gets extracted by Webvm. This is optional.
 ENV HOME="/home/user" TERM="xterm" USER="user" SHELL="/bin/bash" EDITOR="vim" LANG="en_US.UTF-8" LC_ALL="C"
 RUN echo 'root:password' | chpasswd
-CMD [ "/bin/bash" ]
+CMD [ "/usr/bin/python3" ]
```

# How to use Claude AI

To access Claude AI, you need an API key. Follow these steps to get started:

### 1. Create an account
- Visit [Anthropic Console](https://console.anthropic.com/login) and sign up with your e-mail. You'll receive a sign in link to the Anthropic Console. 

<img src="/assets/anthropic_signup.png" width="90%">

### 2. Get your API key
- Once logged in, navigate to **Get API keys**.
- Purchase the amount of credits you need. After completing the purchase, you'll be able to generate the key through the API console.

<img src="/assets/anthropic_api_payment.png" width="90%">

### 3. Log in with your API key
- Navigate to your WebVM and hover over the robot icon. This will show the Claude AI Integration tab. For added convenience, you can click the pin button in the top right corner to keep the tab in place.
- You'll see a prompt where you can insert your Claude API key.
- Insert your key and press enter.

<img src="/assets/insert_key.png" width="90%">

### 4. Start using Claude AI
- Once your API key is entered, you can begin interacting with Claude AI by asking questions such as:

 __"Solve the CTF challenge at `/home/user/chall1.bin.` Note that the binary reads from stdin."__

<img src="/assets/webvm_claude_ctf.gif" alt="deploy_instructions_gif" width="90%">

**Important:** Your API key is private and should never be shared. We do not have access to your key, which is not only stored locally in your browser.

# Bugs and Issues

Please use [Issues](https://github.com/leaningtech/webvm/issues) to report any bug.
Or come to say hello / share your feedback on [Discord](https://discord.gg/yTNZgySKGa).

# More links

- [WebVM: server-less x86 virtual machines in the browser](https://leaningtech.com/webvm-server-less-x86-virtual-machines-in-the-browser/)
- [WebVM: Linux Virtualization in WebAssembly with Full Networking via Tailscale](https://leaningtech.com/webvm-virtual-machine-with-networking-via-tailscale/)
- [Mini.WebVM: Your own Linux box from Dockerfile, virtualized in the browser via WebAssembly](https://leaningtech.com/mini-webvm-your-linux-box-from-dockerfile-via-wasm/)
- Reference GitHub Pages deployment: [Mini.WebVM](https://mini.webvm.io)
- [Crafting the Impossible: X86 Virtualization in the Browser with WebAssembly](https://www.youtube.com/watch?v=VqrbVycTXmw) Talk at JsNation 2022

# Thanks to... 
This project depends on:
- [CheerpX](https://cheerpx.io/), made by [Leaning Technologies](https://leaningtech.com/) for x86 virtualization and Linux emulation
- xterm.js, [https://xtermjs.org/](https://xtermjs.org/), for providing the Web-based terminal emulator
- [Tailscale](https://tailscale.com/), for the networking component
- [lwIP](https://savannah.nongnu.org/projects/lwip/), for the TCP/IP stack, compiled for the Web via [Cheerp](https://github.com/leaningtech/cheerp-meta/)

# Versioning

WebVM depends on the CheerpX x86-to-WebAssembly virtualization technology, which is included in the project via [NPM](https://www.npmjs.com/package/@leaningtech/cheerpx).

The NPM package is updated on every release.

Every build is immutable, if a specific version works well for you today, it will keep working forever.

# License

WebVM is released under the Apache License, Version 2.0.

You are welcome to use, modify, and redistribute the contents of this repository.

The public CheerpX deployment is provided **as-is** and is **free to use** for technological exploration, testing and use by individuals. Any other use by organizations, including non-profit, academia and the public sector, requires a license. Downloading a CheerpX build for the purpose of hosting it elsewhere is not permitted without a commercial license.

Read more about [CheerpX licensing](https://cheerpx.io/docs/licensing)

If you want to build a product on top of CheerpX/WebVM, please get in touch: sales@leaningtech.com
