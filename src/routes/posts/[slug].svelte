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

<article class="grid grid-cols-1 gap-5">
	<svelte:component this={Post} />
</article>
