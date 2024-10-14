import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	resolve: {
		alias: {
			'/config_terminal': 'config_public_terminal.js'
		}
	},
	build: {
		target: "es2022"
	},
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{ src: 'tower.ico', dest: '' },
				{ src: 'scrollbar.css', dest: '' },
				{ src: 'serviceWorker.js', dest: '' },
				{ src: 'login.html', dest: '' },
				{ src: 'assets/', dest: '' },
				{ src: 'alpine/', dest: '' }
			]
		})
	]
});
