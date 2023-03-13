<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { page } from '$app/stores';
</script>

<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300 }}>
	{#if $page.error !== null}
		<h1>{$page.error.message}</h1>
		<a href="/">Home</a>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	a {
		color: var(--white);
		text-decoration: none;
		transition: var(--transition);
		font-family: 'Heading', serif;
		font-size: 2rem;
		padding: 0.5rem;
	}

	:global(.light) a {
		color: var(--background);
	}
</style>
