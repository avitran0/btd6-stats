<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
</script>

<svelte:head>
	<title>WIP - BTD6 Stats</title>
</svelte:head>

<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300 }}>
	<h1>WIP</h1>
	<a href="/">Home</a>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	a {
		color: var(--text);
		text-decoration: none;
		transition: var(--transition);
		font-family: 'Heading', serif;
		font-size: 2rem;
		padding: 0.5rem;
	}
</style>
