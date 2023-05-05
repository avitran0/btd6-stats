<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
</script>

<svelte:head>
	<title>BTD6 Stats</title>
</svelte:head>

<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300 }}>
	<h1>Home</h1>
	<a href="/towers">Towers</a>
	<a href="/heroes">Heroes</a>
	<a href="/bloons">Bloons</a>
	<a href="/rounds">Rounds</a>
	<p>still under construction</p>
	<p>monkey stats done up to glue monkey</p>
</main>

<style>
	a {
		color: var(--text);
		transition: var(--transition);
		font-family: 'Heading', serif;
		font-size: 1.5rem;
		padding: 0.5rem;
		text-decoration: underline;
	}
</style>
