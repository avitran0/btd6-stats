<script>
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import bloons from '$lib/json/bloons.json';
	import bloonsFortified from '$lib/json/bloonsFortified.json';
</script>

<svelte:head>
	<title>Bloons - BTD6 Stats</title>
</svelte:head>

<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300 }}>
	<h1>Bloons</h1>
	<h2>Normal</h2>
	<div class="table-wrapper">
		<table>
			<tr>
				<th>Type</th>
				<th>Health</th>
				<th>Total Cash</th>
				<th>Children</th>
				<th>Speed</th>
				<th>RBE</th>
				<th>Immunities</th>
			</tr>
			{#each bloons as data}
				<tr>
					<td><img src="/images/bloons/{data['id']}.png" alt={data['name']} /></td>
					<td>{data['hp']}</td>
					<td>{data['cashTotal']}</td>
					<td class="smol"
						>{#each data['children'] as child}{child['amount']}x
							<img
								src="/images/bloons/{child['id']}.png"
								alt={child['name']}
								loading="lazy"
							/>&emsp;{/each}</td
					>
					<td>{data['speed']}</td>
					<td>{data['rbe']}</td>
					<td
						>{#if data['immunities'] !== ''}{data['immunities']}{:else}none{/if}</td
					>
				</tr>
			{/each}
			<tr class="bottom">
				<th>Type</th>
				<th>Health</th>
				<th>Total Cash</th>
				<th>Children</th>
				<th>Speed</th>
				<th>RBE</th>
				<th>Immunities</th>
			</tr>
		</table>
	</div>
	<h2>Fortified</h2>
	<div class="table-wrapper">
		<table>
			<tr>
				<th>Type</th>
				<th>Health</th>
				<th>Total Cash</th>
				<th>Children</th>
				<th>Speed</th>
				<th>RBE</th>
				<th>Immunities</th>
			</tr>
			{#each bloonsFortified as data}
				<tr>
					<td><img src="/images/bloons/{data['id']}.png" alt={data['name']} /></td>
					<td>{data['hp']}</td>
					<td>{data['cashTotal']}</td>
					<td class="smol"
						>{#each data['children'] as child}{child['amount']}x
							<img
								src="/images/bloons/{child['id']}.png"
								alt={child['name']}
								loading="lazy"
							/>&emsp;{/each}</td
					>
					<td>{data['speed']}</td>
					<td>{data['rbe']}</td>
					<td
						>{#if data['immunities'] !== ''}{data['immunities']}{:else}none{/if}</td
					>
				</tr>
			{/each}
			<tr class="bottom">
				<th>Type</th>
				<th>Health</th>
				<th>Total Cash</th>
				<th>Children</th>
				<th>Speed</th>
				<th>RBE</th>
				<th>Immunities</th>
			</tr>
		</table>
	</div>
</main>

<style>
	h2 {
		margin-top: 2rem;
	}

	.table-wrapper {
		overflow-x: auto;
		white-space: nowrap;
		max-width: calc(100vw - 4rem);
		border: 2px solid var(--text);
		margin: 1rem 0;
		border-radius: 0.5rem;
		transition: var(--transition);
	}

	table {
		text-align: center;
		transition: var(--transition);
		border-radius: 0.5rem;
		cursor: default;
		margin: 0 auto;
		border-spacing: 0;
	}

	th {
		font-family: 'Heading', serif;
		font-size: 1.2rem;
		border-bottom: 2px solid var(--text);
		transition: var(--transition);
		padding: 0 0.4rem;
	}

	.bottom th {
		border-bottom: none;
		border-top: 2px solid var(--text);
	}

	td {
		padding: 0.2rem 0.4rem;
		font-size: 1rem;
		border-top: 1px solid var(--text);
		border-bottom: 1px solid var(--text);
		transition: var(--transition);
	}

	td img {
		max-height: 1.5rem;
		max-width: 1.5rem;
	}

	img {
		transition: var(--transition);
		filter: var(--filter);
	}

	.smol {
		font-size: 1rem;
	}

	@media (min-width: 36rem) {
		th {
			font-size: 1.5rem;
		}

		td {
			font-size: 1.2rem;
		}

		td img {
			max-height: 2rem;
			max-width: 2rem;
			padding: 0.2rem;
		}
	}
</style>
