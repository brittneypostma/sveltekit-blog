<script>
	import { page } from '$app/stores'
</script>

<nav>
	<ul class="flex gap-2">
		<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
		<li class:active={$page.path === '/posts'}><a sveltekit:prefetch href="/posts">Posts</a></li>
	</ul>
</nav>

<style>
	li {
		@apply border-b-4 border-transparent transition-all hover:border-pink-500 justify-self-start;
	}
	.active {
		@apply border-purple-800 hover:border-purple-800;
	}
</style>
