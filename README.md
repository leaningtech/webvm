# WebVM

[![Discord server](https://img.shields.io/discord/988743885121548329?color=%235865F2&logo=discord&logoColor=%23fff)](https://discord.gg/yWRr2YnD9c)
[![Issues](https://img.shields.io/github/issues/leaningtech/webvm)](https://github.com/leaningtech/webvm/issues)

This repository hosts the source code for [https://webvm.io](https://webvm.io), a Linux virtual machine that runs in your browser.

Try out the new Alpine / Xorg / i3 graphical environment: [https://webvm.io/alpine.html](https://webvm.io/alpine.html)

<img src="/assets/welcome_to_WebVM_alpine_2024.png" width="90%">

## What is WebVM?

WebVM is a server-less virtual environment running fully client-side in HTML5/WebAssembly. It's designed to be Linux ABI-compatible and runs an unmodified Debian distribution including many native development toolchains.

WebVM is powered by the **CheerpX** virtualization engine, which provides:
- x86-to-WebAssembly JIT compiler
- Virtual block-based file system
- Linux syscall emulator
- Safe, sandboxed client-side execution

## Table of Contents

- [Quick Start](#quick-start)
- [Networking](#networking)
- [Development & Customization](#development--customization)
  - [Deploy to GitHub Pages](#deploy-to-github-pages)
  - [Build Custom Disk Images](#building-custom-disk-images)
  - [Run Locally](#run-webvm-locally)
  - [Example: Python3 REPL](#example-python3-repl)
- [Features](#features)
  - [Claude AI Integration](#claude-ai-integration)
- [Community & Support](#community--support)
- [Learn More](#learn-more)
- [License](#license)

## Quick Start

### Online (No Installation)

Visit [https://webvm.io](https://webvm.io) to get started immediately in your browser. No setup required.

### Local Development

If you'd like to run WebVM locally:

```sh
git clone https://github.com/leaningtech/webvm.git
cd webvm
npm install && npm run build
nginx -p . -c nginx.conf
```

Then open `http://127.0.0.1:8081` in your browser.

For detailed local setup with custom images, see [Run Locally](#run-webvm-locally-with-a-custom-debian-mini-disk-image).

## Networking

Modern browsers don't provide TCP/UDP sockets directly. WebVM supports networking via **Tailscale**, a WireGuard-based VPN with WebSocket support.

### Quick Setup

1.  Open the "Networking" panel from the sidebar
2.  Click "Connect to Tailscale"
3.  Log in (create a free account at [tailscale.com](https://tailscale.com) if needed)
4.  Click "Connect" when prompted

WebVM now has access to all machines in your Tailscale network!

## The world wide web

If you would like to access the public internet, you will need to set up an Exit Node on one of your _non-WebVM_ tailscale network devices.
See the _"Advertise a device as an exit node"_ section of the [Tailscale Exit Node quickstart guide](https://tailscale.com/kb/1408/quick-guide-exit-nodes?tab=linux) for instructions. (The _“Use an exit node”_ section can be skipped, as WebVM automatically uses an available exit node once one is advertised).

> [!NOTE]
> Some commands like `ping` require kernel features unavailable in browsers. Use `curl` or `wget` instead.

> [!TIP]
> Connection status is shown as a colored dot on the button: orange = local network, green = global/internet. The button text shows your Tailscale IP address once connected.

### Internet Access (Exit Node)

To access the public internet from WebVM, set up an **Exit Node** on another device in your Tailscale network:

1. Follow the [Tailscale Exit Node quickstart](https://tailscale.com/kb/1408/quick-guide-exit-nodes?tab=linux) (sections: "Advertise a device as an exit node")
2. WebVM automatically uses the exit node once advertised

### Authentication Options

**Via API key (for automation):**
```
https://webvm.io/#authKey=<your-ephemeral-key>
```

**Via Headscale (self-hosted Tailscale):**

Headscale doesn't support CORS by default. Set up an Nginx proxy with CORS headers:

```nginx
if ($http_origin = "https://yourdomain.com") {
    add_header 'Access-Control-Allow-Origin' "$http_origin";
    add_header 'Access-Control-Allow-Credentials' 'true' always;
}
```

Then access WebVM with:
```
https://yourdomain.com/#controlUrl=<your-headscale-url>
```

See [Headscale Nginx integration docs](https://headscale.net/stable/ref/integration/reverse-proxy/#nginx) for more details.

**Notes:**
- If self-hosting, replace URLs with your own domain
- This is equivalent to the Tailscale `--login-server` option
- When using both `authKey` and `controlUrl`, separate them with `&`: `#authKey=...&controlUrl=...`


## Development & Customization

### Deploy to GitHub Pages

Fork the WebVM repository to deploy your own version to GitHub Pages:

<img src="/assets/fork_deploy_instructions.gif" alt="deploy_instructions_gif" width="90%">

1. **Fork the repository** (click the Fork button on GitHub)
2. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select "GitHub Actions" as the source
   - Enable "Enforce HTTPS" if using a custom domain
3. **Run the Deploy workflow:**
   - Go to Actions → Click "Deploy" workflow
   - Click "Run workflow" twice (once in the dropdown menu)
4. After a few minutes, the workflow will show your deployed URL below the `deploy_to_github_pages` job

<img src="/assets/result.png" width="70%">

### Building Custom Disk Images

You can customize the Debian mini image or create entirely new disk images using the **Deploy workflow**.

The workflow builds a custom Dockerfile into a bootable `.ext2` disk image and can either:
- **Upload to GitHub Release** — Download and use locally
- **Deploy to GitHub Pages** — Use remotely from your fork

**To build a custom image:**

1. Modify `dockerfiles/debian_mini` or create a new Dockerfile
2. Go to Actions → "Deploy" workflow → "Run workflow"
3. Set the "Path to Dockerfile" parameter to your Dockerfile
4. Choose deployment: "Upload as release" or "Deploy to pages"
5. After the workflow completes, download the `.ext2` file (from Releases tab if you chose "Upload as release")

**To use a custom image locally:**

1. Save the `.ext2` file to `custom-disk-images/`
2. In `config_public_terminal.js`, set:
   ```js
   diskImageUrl = "/custom-disk-images/your-image.ext2"
   diskImageType = "bytes"
   ```
3. Rebuild: `npm install && npm run build`

**For the full Alpine desktop environment:**

Our Alpine/Xorg/i3 environment Dockerfile is available [here](https://github.com/leaningtech/alpine-image).

**For more details:**

See the [CheerpX Custom Images documentation](https://cheerpx.io/docs/guides/custom-images).

### Run WebVM Locally

#### 1. Clone the WebVM Repository

```sh
git clone https://github.com/leaningtech/webvm.git
cd webvm
```

#### 2. Put your local image in `custom-disk-images/`

This repository includes a persistent `custom-disk-images/` directory for local `.ext2` files.

Download the Debian mini image into that directory:

```sh
wget -O custom-disk-images/debian_mini_20230519_5022088024.ext2 \
  "https://github.com/leaningtech/webvm/releases/download/ext2_image/debian_mini_20230519_5022088024.ext2"
```

(*You can also build your own image and copy it into `custom-disk-images/`.*)

#### 3. Configure WebVM to use the local image

Edit `config_public_terminal.js`:

- Set `diskImageUrl` to your local file URL, for example:

  `"/custom-disk-images/debian_mini_20230519_5022088024.ext2"`

- Set `diskImageType` to:

  `"bytes"`

#### 4. Build WebVM

Install dependencies and build:

```sh
npm install
npm run build
```

The web assets are generated into `build/`.

#### 5. Configure Nginx

Keep your existing `location /` that serves `build/`, and add a separate location for custom images:

```nginx
location /custom-disk-images/ {
    alias ./custom-disk-images/;
}
```

Why this separate location is needed:

- `location /` points to `build/`, but the image file lives outside `build/`.
- If you try to serve images only through `location /`, Nginx will look under `build/custom-disk-images/...`.
- Keeping images outside `build/` avoids losing them on future `npm run build` runs.

`autoindex` is optional and not required for WebVM disk loading. It can stay off.

#### 6. Start Nginx

Run the following command to start Nginx:

```sh
nginx -p . -c nginx.conf
```

#### 7. Verify that the local image is actually being used

In another shell, inspect access logs while loading WebVM:

```sh
tail -f nginx_access.log | grep --line-buffered custom-disk-images
```

You should see repeated `206` responses for `/custom-disk-images/...ext2`.

#### 8. Access WebVM

Open a browser and visit: `http://127.0.0.1:8081`.

Enjoy your local WebVM!

### Example: Python3 REPL

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

## Features

### Claude AI Integration

To access Claude AI, you need an API key. Follow these steps to get started:

#### 1. Create an account
- Visit [Anthropic Console](https://console.anthropic.com/login) and sign up with your e-mail. You'll receive a sign in link to the Anthropic Console. 

<img src="/assets/anthropic_signup.png" width="90%">

#### 2. Get your API key
- Once logged in, navigate to **Get API keys**.
- Purchase the amount of credits you need. After completing the purchase, you'll be able to generate the key through the API console.

<img src="/assets/anthropic_api_payment.png" width="90%">

#### 3. Log in with your API key
- Navigate to your WebVM and hover over the robot icon. This will show the Claude AI Integration tab. For added convenience, you can click the pin button in the top right corner to keep the tab in place.
- You'll see a prompt where you can insert your Claude API key.
- Insert your key and press enter.

<img src="/assets/insert_key.png" width="90%">

#### 4. Start using Claude AI
- Once your API key is entered, you can begin interacting with Claude AI by asking questions such as:

 __"Solve the CTF challenge at `/home/user/chall1.bin.` Note that the binary reads from stdin."__

<img src="/assets/webvm_claude_ctf.gif" alt="deploy_instructions_gif" width="90%">

**Important:** Your API key is private and should never be shared. We do not have access to your key, it is only stored locally in your browser.

## Community & Support

**Report issues:** Use [GitHub Issues](https://github.com/leaningtech/webvm/issues) to report bugs or request features.

**Chat with us:** Join our [Discord community](https://discord.gg/yTNZgySKGa) to discuss WebVM, share ideas, and get help.

## Learn More

**Articles & Resources:**
- [WebVM: Server-less x86 virtual machines in the browser](https://leaningtech.com/webvm-server-less-x86-virtual-machines-in-the-browser/)
- [WebVM: Linux Virtualization in WebAssembly with Full Networking via Tailscale](https://leaningtech.com/webvm-virtual-machine-with-networking-via-tailscale/)
- [Mini.WebVM: Your own Linux box from Dockerfile, virtualized in the browser via WebAssembly](https://leaningtech.com/mini-webvm-your-linux-box-from-dockerfile-via-wasm/)
- [Crafting the Impossible: X86 Virtualization in the Browser with WebAssembly](https://www.youtube.com/watch?v=VqrbVycTXmw) — Talk at JsNation 2022

**Example Deployment:**
- [Mini.WebVM Reference](https://mini.webvm.io) — A running example deployed to GitHub Pages

**Technology Behind WebVM:**

This project is powered by:
- **[CheerpX](https://cheerpx.io/)** — x86-to-WebAssembly JIT compiler | by [Leaning Technologies](https://leaningtech.com/)
- **[xterm.js](https://xtermjs.org/)** — Web-based terminal emulator
- **[Tailscale](https://tailscale.com/)** — VPN networking layer
- **[lwIP](https://savannah.nongnu.org/projects/lwip/)** — TCP/IP stack, compiled for the Web via [Cheerp](https://github.com/leaningtech/cheerp-meta/)

**Versioning:**

WebVM uses the [CheerpX](https://www.npmjs.com/package/@leaningtech/cheerpx) NPM package, which is updated on every release.

Every build is immutable. If a specific version works well for you today, it will keep working forever.

## License

WebVM is released under the Apache License, Version 2.0.

You are welcome to use, modify, and redistribute the contents of this repository.

The public CheerpX deployment is provided **as-is** and is **free to use** for technological exploration, testing and use by individuals. Any other use by organizations, including non-profit, academia and the public sector, requires a license. Downloading a CheerpX build for the purpose of hosting it elsewhere is not permitted without a commercial license.

Read more about [CheerpX licensing](https://cheerpx.io/docs/licensing)

If you want to build a product on top of CheerpX/WebVM, please get in touch: sales@leaningtech.com
