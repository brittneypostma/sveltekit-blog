<script context="module">
	export async function load({ page }) {
		const Post = await import(`../../posts/${page.params.slug}.md`)
		// }
		return {
			props: {
				Post: Post.default,
				title: Post.metadata.title
			}
		}
	}
</script>

<script>
	export let Post
	export let title
</script>

<svelte:head>
	<title>{title} | SvelteKit Blog</title>
</svelte:head>

<article class="prose lg:prose-xl">
	<svelte:component this={Post} />
</article>
