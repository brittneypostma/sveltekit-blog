const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-3': 'auto 1fr auto'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}

module.exports = config
