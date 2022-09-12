import adapter from '@sveltejs/adapter-static'

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			crawl: true,
			enabled: true,
			onError: 'continue',
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
		}),
	},
}
