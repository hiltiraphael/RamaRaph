<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer style="text-align: center; padding: 1rem; font-size: 0.8rem; color: #888; position: fixed; bottom: 0; width: 100%; pointer-events: none;">
	Build: 1.1.0
</footer>
