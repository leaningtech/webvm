import copy from 'rollup-plugin-copy';
import svelte from 'rollup-plugin-svelte';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import autoprefixer from 'autoprefixer';
import path from 'path';
import url from 'url';
import tailwindcss from 'tailwindcss';

const production = !process.env.ROLLUP_WATCH;

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'esm',
		name: 'app',
		file: 'build/bundle.js'
	},
	plugins: [
		alias({
			entries: {
				'diskConfig': path.resolve(__dirname, 'diskConfig.cloud.js')
			}
		}),
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		postcss({
			extract: true,
			minimize: production,
			plugins: [
				tailwindcss,
				autoprefixer,
			],
		}),

		// Copy required font files
		copy({
			targets: [
				{
					src: 'node_modules/@fortawesome/fontawesome-free/webfonts',
					dest: '.'
				}
			]
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte'],
			exportConditions: ['svelte']
		}),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
