<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import rounds from '$lib/json/rounds.json';
	import abr from '$lib/json/abr.json';
	import bloons from '$lib/json/bloons.json';
	import bloonsFortified from '$lib/json/bloonsFortified.json';

	import type { RoundBloons } from '$lib/jsonInterfaces';

	const allBloons: RoundBloons = [...bloons, ...bloonsFortified];

	let roundCash: number[] = [];
	for (let i = 0; i < rounds.length; i++) {
		let roundCashTemp = 0;
		for (let j = 0; j < rounds[i].bloons.length; j++) {
			let bloonIdTemp = rounds[i].bloons[j].id.replace('Regrow', '').replace('Camo', '');
			if (
				rounds[i].round > 80 &&
				allBloons.find((bloon) => bloon.id === bloonIdTemp)!.cashTotalLate !== undefined
			) {
				roundCashTemp +=
					allBloons.find((bloon) => bloon['id'] === bloonIdTemp)!['cashTotalLate']! *
					rounds[i].bloons[j].amount;
			} else {
				roundCashTemp +=
					allBloons.find((bloon) => bloon['id'] === bloonIdTemp)!['cashTotal'] *
					rounds[i].bloons[j].amount;
			}
		}
		if (rounds[i].round > 85) roundCashTemp = Math.round(roundCashTemp * 0.1);
		else if (rounds[i].round > 60) roundCashTemp = Math.round(roundCashTemp * 0.2);
		else if (rounds[i].round > 50) roundCashTemp = Math.round(roundCashTemp * 0.5);
		roundCash.push(roundCashTemp);
	}

	let abrRoundCash: number[] = [];
	for (let i = 0; i < abr.length; i++) {
		let roundCashTemp = 0;
		for (let j = 0; j < abr[i].bloons.length; j++) {
			let bloonIdTemp = abr[i].bloons[j].id.replace('Regrow', '').replace('Camo', '');
			if (
				abr[i].round > 80 &&
				allBloons.find((bloon) => bloon.id === bloonIdTemp)!.cashTotalLate !== undefined
			) {
				roundCashTemp +=
					allBloons.find((bloon) => bloon['id'] === bloonIdTemp)!['cashTotalLate']! *
					abr[i].bloons[j].amount;
			} else {
				roundCashTemp +=
					allBloons.find((bloon) => bloon['id'] === bloonIdTemp)!['cashTotal'] *
					abr[i].bloons[j].amount;
			}
		}
		if (abr[i].round >= 85) roundCashTemp = Math.round(roundCashTemp * 0.1);
		else if (abr[i].round >= 60) roundCashTemp = Math.round(roundCashTemp * 0.2);
		else if (abr[i].round >= 50) roundCashTemp = Math.round(roundCashTemp * 0.5);
		abrRoundCash.push(roundCashTemp);
	}

	let abrToggle = false;

	function toggleAbr() {
		abrToggle = !abrToggle;
	}
</script>

<svelte:head>
	<title>Rounds - BTD6 Stats</title>
</svelte:head>

<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300 }}>
	<h1>Rounds</h1>
	<div class="round-switch">
		<button class={abrToggle ? '' : 'active'} on:click={abrToggle ? toggleAbr : null}>Normal</button
		>
		<button class={abrToggle ? 'active' : ''} on:click={abrToggle ? null : toggleAbr}>ABR</button>
	</div>
	<div class="table-wrapper">
		<table>
			<tr>
				<th>Round</th>
				<th>RBE</th>
				<th>Cash</th>
				<th>Bloons</th>
			</tr>
			{#if !abrToggle}
				{#each rounds as data}
					<tr>
						<td>{data['round']}</td>
						<td>{data['rbe']}</td>
						<td>{roundCash[data['round'] - 1]}</td>
						<td class="smol"
							>{#each data['bloons'] as bloon}{bloon.amount}x
								<img
									src="/images/bloons/{bloon['id']}.png"
									alt={bloon['id']}
									title={bloon['id']}
									loading="lazy"
								/>&emsp;{/each}</td
						>
					</tr>
				{/each}
			{:else}
				{#each abr as data}
					<tr>
						<td>{data['round']}</td>
						<td>{data['rbe']}</td>
						<td>{abrRoundCash[data['round'] - 3]}</td>
						<td class="smol"
							>{#each data['bloons'] as bloon}{bloon.amount}x
								<img
									src="/images/bloons/{bloon['id']}.png"
									alt={bloon['id']}
									title={bloon['id']}
									loading="lazy"
								/>&emsp;{/each}</td
						>
					</tr>
				{/each}
			{/if}
			<tr class="bottom">
				<th>Round</th>
				<th>RBE</th>
				<th>Cash</th>
				<th>Bloons</th>
			</tr>
		</table>
	</div>
</main>

<style>
	.round-switch {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	button {
		font-family: 'Heading', serif;
		font-size: 1.5rem;
		color: var(--ctp-macchiato-text);
		border: none;
		transition: var(--transition);
		padding: 0 0.4rem;
		background-color: transparent;
		cursor: pointer;
	}

	button::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background-color: var(--ctp-macchiato-text);
		transition: var(--transition);
	}

	button:hover::after {
		width: 100%;
	}

	button.active::after {
		width: 100%;
	}

	:global(.light) button::after {
		background-color: var(--ctp-latte-text);
	}

	:global(.light) button {
		color: var(--ctp-latte-text);
	}

	.table-wrapper {
		overflow-x: auto;
		white-space: nowrap;
		max-width: calc(100vw - 4rem);
		border: 2px solid var(--ctp-macchiato-text);
		margin: 1rem 0;
		border-radius: 0.5rem;
		transition: var(--transition);
	}

	:global(.light) .table-wrapper {
		border: 2px solid var(--ctp-latte-text);
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
		border-bottom: 2px solid var(--ctp-macchiato-text);
		transition: var(--transition);
		padding: 0 0.4rem;
	}

	:global(.light) th {
		border-bottom: 2px solid var(--ctp-latte-text);
	}

	.bottom th {
		border-bottom: none;
		border-top: 2px solid var(--ctp-macchiato-text);
	}

	:global(.light) .bottom th {
		border-bottom: none;
		border-top: 2px solid var(--ctp-latte-text);
	}

	td {
		padding: 0.2rem 0.4rem;
		font-size: 1rem;
		border-top: 1px solid var(--ctp-macchiato-text);
		border-bottom: 1px solid var(--ctp-macchiato-text);
		transition: var(--transition);
	}

	:global(.light) td {
		border-top: 1px solid var(--ctp-latte-text);
		border-bottom: 1px solid var(--ctp-latte-text);
	}

	td img {
		max-height: 1.5rem;
		max-width: 1.5rem;
	}

	img {
		transition: var(--transition);
	}

	:global(.light) img {
		filter: drop-shadow(0 0 0.1rem var(--ctp-latte-text));
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
