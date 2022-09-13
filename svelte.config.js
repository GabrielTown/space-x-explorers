import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			prerender: {
				crawl: true,
				enabled: true,
				onError: 'continue',
			},
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
		}),
	},
}

const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
}