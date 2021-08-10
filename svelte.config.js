import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import path from 'path'
import preprocess from 'svelte-preprocess'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@components': path.resolve('./src/lib/components'),
					'@lib': path.resolve('./src/lib'),
					'@utils': path.resolve('./src/lib/utils'),
					'@posts': path.resolve('./src/posts'),
					'@hooks': path.resolve('./src/lib/hooks'),
					'@api': path.resolve('./src/lib/api')
				}
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	]
}

export default config
