import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	resolve: {
		alias: {
			'/config_terminal': process.env.WEBVM_MODE == "github" ? 'config_github_terminal.js' : 'config_public_terminal.js',
			"@leaningtech/cheerpx": process.env.CX_URL ? process.env.CX_URL : "@leaningtech/cheerpx"
		}
	},
	build: {
		target: "es2022"
	},
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{ src: 'favicon.png', dest: '' },
				{ src: 'scrollbar.css', dest: '' },
				{ src: 'serviceWorker.js', dest: '' },
				{ src: 'login.html', dest: '' },
				{ src: 'assets/', dest: '' },

				// added files/dir for IWA
				{ src: 'cheerpOS.js', dest: ''},
				{ src: 'cxcore.js', dest: ''},
				{ src: 'cxcore.wasm', dest: ''},
				{ src: 'workerclock.js', dest: ''},
				{ src: 'tun/', dest: ''},
				{ src: './.well-known/', dest: ''},
			]
		})
	]
});
