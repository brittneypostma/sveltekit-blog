import { Writable, writable } from 'svelte/store'

const initialTags = {
	title: 'SvelteKit Blog',
	description: 'SvelteKit Blog built with MDSvex and Tailwind.',
	type: 'website',
	image: 'https://www.bdesigned.dev/logo-full.png',
	alt: 'bDesigned',
	'twitter:title': 'SvelteKit Blog',
	'twitter:description': 'SvelteKit Blog built with MDSvex and Tailwind.',
	'twitter:card': 'summary_large_image',
	'twitter:image': 'https://www.bdesigned.dev/logo-full.png',
	'twitter:image:alt': 'bDesigned',
	'og:title': 'SvelteKit Blog',
	'og:description': 'SvelteKit Blog built with MDSvex and Tailwind.',
	'og:type': 'website',
	'og:image': 'https://www.bdesigned.dev/logo-full.png',
	'og:image:alt': 'bDesigned',
	'og:url': 'https://bDesigned/'
}

function CreateMetatagsStore() {
	const { subscribe, set, update } = writable(initialTags)

	const title = (title) =>
		update((curr) => ({ ...curr, title: title, 'og:title': title, 'twitter:title': title }))
	const desc = (desc) =>
		update((curr) => ({
			...curr,
			description: desc,
			'og:description': desc,
			'twitter:description': desc
		}))
	const image = (image) =>
		update((curr) => ({ ...curr, image: image, 'og:image': image, 'twitter:image': image }))
	const alt = (alt) =>
		update((curr) => ({ ...curr, alt: alt, 'og:image:alt': alt, 'twitter:image:alt': alt }))
	const url = (url) => update((curr) => ({ ...curr, 'og:url': url }))

	return {
		subscribe,
		set,
		url,
		title,
		desc,
		image,
		alt
	}
}

const store = CreateMetatagsStore()

export default store
