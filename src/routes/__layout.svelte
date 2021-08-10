<script>
	import '@styles/app.css'
	import '@styles/prism.css'
	import metatags from '@stores/metatags'
	import Header from '@components/layout/Header.svelte'
</script>

<svelte:head>
	{#each Object.entries($metatags) as [property, content]}
		{#if content}
			{#if ['title', 'description', 'image'].includes(property)}
				<meta name={property} {content} />
			{:else}
				<meta {property} {content} />
			{/if}
		{/if}
	{/each}
</svelte:head>

<Header />
<main class="h-full overflow-y-auto pb-10">
	<slot />
</main>
