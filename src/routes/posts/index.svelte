<script context="module">
	export async function load() {
		const mdFiles = import.meta.globEager('../../posts/*.md')
		const posts = Object.entries(mdFiles).map((post) => {
			const slug = post[0].substring(post[0].lastIndexOf('/') + 1).replace('.md', '')
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

<svelte:head>
	<title>Posts | SvelteKit Blog</title>
</svelte:head>

<section class="prose lg:prose-xl">
	<h1>Posts</h1>
	<ul class="grid grid-cols-1 gap-2">
		{#each posts as post}
			<li>
				<a sveltekit:prefetch href={`/posts/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
</section>
