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
					<div class="image-container">
						<img src="/images/{data.id}/000.png" alt={data.name} loading="lazy" />
					</div>
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
					<div class="image-container">
						<img src="/images/{data.id}/000.png" alt={data.name} loading="lazy" />
					</div>
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
					<div class="image-container">
						<img src="/images/{data.id}/000.png" alt={data.name} loading="lazy" />
					</div>
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
					<div class="image-container">
						<img src="/images/{data.id}/000.png" alt={data.name} loading="lazy" />
					</div>
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
		color: var(--text);
		transition: var(--transition);
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0.5rem 0;
		text-align: center;
	}

	img {
		max-height: 8rem;
		max-width: 8rem;
		object-fit: cover;
		padding: 0.5rem;
		border-radius: 0.5rem;
		transition: var(--transition);
		min-width: 5rem;
		min-height: 5rem;
		filter: var(--filter);
	}

	.image-container {
		border-radius: 0.5rem;
		border: 2px solid var(--text);
	}

	h3 {
		font-size: 1.3rem;
		margin: 0.2rem 0 0;
	}

	h3::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background-color: var(--text);
		transition: var(--transition);
	}

	a:hover h3::after {
		width: 100%;
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
