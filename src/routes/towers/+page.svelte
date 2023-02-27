<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import towers from '$lib/json/towers.json';
</script>

<svelte:head>
	<title>Towers - BTD6 Stats</title>
</svelte:head>

<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300 }}>
	<h1>Towers</h1>
	<h2>Primary</h2>
	<div class="tower-container">
		{#each towers as data}
			{#if data.category === 'primary'}
				<a href={'/towers/' + data.id}>
					<img src="/images/{data.id}/000.png" alt={data.name} loading="lazy" />
					<h3>{data.name}</h3>
				</a>
			{/if}
		{/each}
	</div>
	<h2>Military</h2>
	<div class="tower-container">
		{#each towers as data}
			{#if data.category === 'military'}
				<a href={'/towers/' + data.id}>
					<img src="/images/{data.id}/000.png" alt={data.name} loading="lazy" />
					<h3>{data.name}</h3>
				</a>
			{/if}
		{/each}
	</div>
	<h2>Magic</h2>
	<div class="tower-container">
		{#each towers as data}
			{#if data.category === 'magic'}
				<a href={'/towers/' + data.id}>
					<img src="/images/{data.id}/000.png" alt={data.name} loading="lazy" />
					<h3>{data.name}</h3>
				</a>
			{/if}
		{/each}
	</div>
	<h2>Support</h2>
	<div class="tower-container">
		{#each towers as data}
			{#if data.category === 'support'}
				<a href={'/towers/' + data.id}>
					<img src="/images/{data.id}/000.png" alt={data.name} loading="lazy" />
					<h3>{data.name}</h3>
				</a>
			{/if}
		{/each}
	</div>
</main>

<style>
	.tower-container {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0 2rem;
	}

	a {
		color: var(--white);
		transition: var(--transition-linear);
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0.5rem 0;
		text-align: center;
	}

	:global(.light) a {
		color: var(--background);
	}

	img {
		max-height: 8rem;
		max-width: 8rem;
		object-fit: cover;
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: 2px solid var(--white);
		transition: var(--transition-linear);
		min-width: 5rem;
		min-height: 5rem;
	}

	:global(.light) img {
		border: 2px solid var(--background);
	}

	h3 {
		font-size: 1.3rem;
		margin: 0.2rem 0 0;
	}

	h3::after {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background-color: var(--white);
		transition: var(--transition-linear);
		transform: scaleX(0);
	}

	a:hover h3::after {
		transform: scaleX(1);
	}

	@media (min-width: 64rem) {
		img {
			max-height: 10rem;
			max-width: 10rem;
			min-width: 7rem;
			min-height: 7rem;
		}
	}

	@media (min-width: 32rem) {
		.tower-container {
			flex-direction: row;
			align-items: flex-end;
		}
	}
</style>
