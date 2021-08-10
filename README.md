# Creating a Blog

## With MDSvex and TailwindCSS

## Table of Contents

- [Creating a Blog](#creating-a-blog)
  - [With MDSvex and TailwindCSS](#with-mdsvex-and-tailwindcss)
  - [Table of Contents](#table-of-contents)
    - [Starting up the App](#starting-up-the-app)
  - [Next Steps](#next-steps)

### Starting up the App

```bash
npm init svelte@next app-name
```

```bash
cd app-name
```

```bash
npx svelte-add@latest tailwindcss mdsvex
```

```bash
npm i
```

```bash
npm i -D @sveltejs/adapter-static@next
```

Import and add adapter to `svelte.config.js` file.

```js
import adapter from '@sveltejs/adapter-static';
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
};

export default config;
```

```bash
npm run dev
```

## Next Steps

Create your `__layout.svelte` and `index.svelte` files to your preferences. Create a folder under `routes` called `posts` for the page files. For the actual markdown posts, create a folder at `src/posts`. Now that the folders are created, we can work on the files. Inside of `src/posts` write your markdown post in the style of the code below with the metadata title, you can add more metadata, but this will be used to list the posts.

```markdown
---
title: Your Title
---

...your post
```

Next, inside of `routes/posts` create 2 files, `index.svelte` and `[slug].svelte`. In `index.svelte` we need to grab the posts and list them out on the page like this.

```html
<!-- index.svelte -->
<script context="module">
	export async function load() {
    // import all md files
		const mdFiles = import.meta.globEager('../../posts/*.md')
    // turn into array and map over
		const posts = Object.entries(mdFiles).map((post) => {
      // get correct slug format
			const slug = post[0].substring(post[0].lastIndexOf('/') + 1).replace('.md', '')
      // pull out title
			const title = post[1].metadata.title
			return {
				slug,
				title
			}
		})
		return {
			props: {
				posts
			}
		}
	}
</script>

<script>
	export let posts
</script>

<section>
	<h1>Posts</h1>
	<ul class="grid grid-cols-1 gap-2">
		{#each posts as post}
			<li>
				<a sveltekit:prefetch href={`/posts/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
</section>
```

Then, in `[slug].svelte` we can grab each post and display it.

```html
<script context="module">
	export async function load({ page }) {
		const Post = (await import(`../../posts/${page.params.slug}.md`)).default
		// }
		return {
			props: {
				Post
			}
		}
	}
</script>

<script>
	export let Post
</script>

<article>
	<svelte:component this="{Post}" />
</article>
```
