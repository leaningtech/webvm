import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				'script-src': ['self', 'wasm-unsafe-eval'],
				'script-src-elem': ['self', 'wasm-unsafe-eval'],
				'connect-src': ['self', 'https:', 'blob:', 'data:', 'wss:'],
				'frame-src': ['self', 'https:', 'blob:', 'data:'],
				'img-src': ['self', 'https:', 'blob:', 'data:'],
				'media-src': ['self', 'https:', 'blob:', 'data:'],
				'font-src': ['self', 'blob:', 'data:'],
				'style-src': ['self', 'unsafe-inline'],
				'object-src': ['none'],
				'base-uri': ['none'],
				'default-src': ['self'],
				'frame-ancestors': ['self'],
			},
			reportOnly: {
				'script-src': ['self', 'wasm-unsafe-eval'],
				'connect-src': ['self', 'https:', 'blob:', 'data:', 'wss:'],
				'worker-src': ['self', 'wasm-unsafe-eval', 'blob:'],
				'frame-src': ['self', 'https:', 'blob:', 'data:'],
				'img-src': ['self', 'https:', 'blob:', 'data:'],
				'media-src': ['self', 'https:', 'blob:', 'data:'],
				'font-src': ['self', 'blob:', 'data:'],
				'style-src': ['self', 'unsafe-inline'],
				'object-src': ['none'],
				'base-uri': ['none'],
				'default-src': ['self'],
				'frame-ancestors': ['self'],
				'report-uri': ['.']
			}
		},
	},
	preprocess: vitePreprocess()
};

export default config;
