<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import type { Attack, Tower, Stats } from '$lib/jsonInterfaces';

	import towers from '$lib/json/towers.json';
	import paragons from '$lib/json/paragons.json';
	import damageTypes from '$lib/json/damageTypes.json';

	export let data: PageData;

	let towerName = 'Not Found';

	// paths: top, middle, bottom
	let paths = [0, 0, 0];
	// costs: easy, medium, hard, impoppable
	let costs = [0, 0, 0, 0];

	const bloons = ['normal', 'camo', 'black', 'white', 'lead', 'ceramic', 'purple', 'frozen'];

	let bloonList = new Promise<Record<string, boolean>>((resolve) => {
		resolve({
			normal: false,
			camo: false,
			black: false,
			white: false,
			lead: false,
			ceramic: false,
			purple: false,
			frozen: false
		});
	});

	let pathString = '000';
	let currentUpgrade = '100';
	$: pathString = `${paths[0]}${paths[1]}${paths[2]}`;

	let statsCurrent = new Promise<Stats>((resolve) => {
		resolve({
			attacks: [
				{
					name: '',
					damage: 0,
					damageMOAB: 0,
					damageCeramic: 0,
					damageBoss: 0,
					pierce: 0,
					projectiles: 0,
					range: 0,
					reloadSpeed: 0,
					damageType: '',
					camo: false,
					crosspath: []
				}
			],
			ability: {}
		});
	});

	let pageMounted = false;

	function getDPS(attacks: Attack[]) {
		let dps = 0;
		for (let i = 0; i < attacks.length; i++) {
			if (attacks[i].reloadSpeed > 0) {
				dps +=
					attacks[i].damage *
					attacks[i].pierce *
					attacks[i].projectiles *
					(1 / attacks[i].reloadSpeed);
			} else if (attacks[i - 1].reloadSpeed > 0) {
				dps +=
					attacks[i].damage *
					attacks[i].pierce *
					attacks[i].projectiles *
					(1 / attacks[i - 1].reloadSpeed);
			} else {
				dps += attacks[i].damage * attacks[i].pierce * attacks[i].projectiles;
			}
		}
		return Math.round(dps * 100) / 100;
	}

	function getMOABDPS(attacks: Attack[]) {
		let dps = 0;
		for (let i = 0; i < attacks.length; i++) {
			if (attacks[i].reloadSpeed > 0) {
				dps +=
					attacks[i].damageMOAB *
					attacks[i].pierce *
					attacks[i].projectiles *
					(1 / attacks[i].reloadSpeed);
			} else if (attacks[i - 1].reloadSpeed > 0) {
				dps +=
					attacks[i].damageMOAB *
					attacks[i].pierce *
					attacks[i].projectiles *
					(1 / attacks[i - 1].reloadSpeed);
			} else {
				dps += attacks[i].damageMOAB * attacks[i].pierce * attacks[i].projectiles;
			}
		}
		return Math.round(dps * 100) / 100;
	}

	function getCeramicDPS(attacks: Attack[]) {
		let dps = 0;
		for (let i = 0; i < attacks.length; i++) {
			if (attacks[i].reloadSpeed > 0) {
				dps +=
					attacks[i].damageCeramic *
					attacks[i].pierce *
					attacks[i].projectiles *
					(1 / attacks[i].reloadSpeed);
			} else if (attacks[i - 1].reloadSpeed > 0) {
				dps +=
					attacks[i].damageCeramic *
					attacks[i].pierce *
					attacks[i].projectiles *
					(1 / attacks[i - 1].reloadSpeed);
			} else {
				dps += attacks[i].damageCeramic * attacks[i].pierce * attacks[i].projectiles;
			}
		}
		return Math.round(dps * 100) / 100;
	}

	function getBossDPS(attacks: Attack[]) {
		let dps = 0;
		for (let i = 0; i < attacks.length; i++) {
			if (attacks[i].reloadSpeed > 0) {
				dps +=
					attacks[i].damageBoss *
					attacks[i].pierce *
					attacks[i].projectiles *
					(1 / attacks[i].reloadSpeed);
			} else if (attacks[i - 1].reloadSpeed > 0) {
				dps +=
					attacks[i].damageBoss *
					attacks[i].pierce *
					attacks[i].projectiles *
					(1 / attacks[i - 1].reloadSpeed);
			} else {
				dps += attacks[i].damageBoss * attacks[i].pierce * attacks[i].projectiles;
			}
		}
		return Math.round(dps * 100) / 100;
	}

	$: if (pathString && (paths[0] > 0 || paths[1] > 0 || paths[2] > 0)) {
		calculateCosts();
		statsCurrent = calcStats();
		bloonList = checkBloons(bloons);
	} else if (pageMounted) {
		calculateBuyCosts();
		statsCurrent = calcStats();
		bloonList = checkBloons(bloons);
	}

	async function calculateCosts() {
		costs = [0, 0, 0, 0];
		if (paths[0] < 6) {
			costs[0] += data.upgrades!['000'].costs.easy;
			costs[1] += data.upgrades!['000'].costs.medium;
			costs[2] += data.upgrades!['000'].costs.hard;
			costs[3] += data.upgrades!['000'].costs.impoppable;
			for (let i = 1; i <= paths[0]; i++) {
				costs[0] += data.upgrades![`${i}00`].costs.easy;
				costs[1] += data.upgrades![`${i}00`].costs.medium;
				costs[2] += data.upgrades![`${i}00`].costs.hard;
				costs[3] += data.upgrades![`${i}00`].costs.impoppable;
			}
			for (let i = 1; i <= paths[1]; i++) {
				costs[0] += data.upgrades![`0${i}0`].costs.easy;
				costs[1] += data.upgrades![`0${i}0`].costs.medium;
				costs[2] += data.upgrades![`0${i}0`].costs.hard;
				costs[3] += data.upgrades![`0${i}0`].costs.impoppable;
			}
			for (let i = 1; i <= paths[2]; i++) {
				costs[0] += data.upgrades![`00${i}`].costs.easy;
				costs[1] += data.upgrades![`00${i}`].costs.medium;
				costs[2] += data.upgrades![`00${i}`].costs.hard;
				costs[3] += data.upgrades![`00${i}`].costs.impoppable;
			}
		} else {
			costs[0] += data.upgrades!['000'].costs.easy * 3 + data.upgrades!['600']!.costs.easy;
			costs[1] += data.upgrades!['000'].costs.medium * 3 + data.upgrades!['600']!.costs.medium;
			costs[2] += data.upgrades!['000'].costs.hard * 3 + data.upgrades!['600']!.costs.hard;
			costs[3] +=
				data.upgrades!['000'].costs.impoppable * 3 + data.upgrades!['600']!.costs.impoppable;

			for (let i = 1; i <= 5; i++) {
				costs[0] += data.upgrades![`${i}00`].costs.easy;
				costs[1] += data.upgrades![`${i}00`].costs.medium;
				costs[2] += data.upgrades![`${i}00`].costs.hard;
				costs[3] += data.upgrades![`${i}00`].costs.impoppable;
			}
			for (let i = 1; i <= 5; i++) {
				costs[0] += data.upgrades![`0${i}0`].costs.easy;
				costs[1] += data.upgrades![`0${i}0`].costs.medium;
				costs[2] += data.upgrades![`0${i}0`].costs.hard;
				costs[3] += data.upgrades![`0${i}0`].costs.impoppable;
			}
			for (let i = 1; i <= 5; i++) {
				costs[0] += data.upgrades![`00${i}`].costs.easy;
				costs[1] += data.upgrades![`00${i}`].costs.medium;
				costs[2] += data.upgrades![`00${i}`].costs.hard;
				costs[3] += data.upgrades![`00${i}`].costs.impoppable;
			}
		}
	}

	async function calculateBuyCosts() {
		costs = [0, 0, 0, 0];
		costs[0] += data.upgrades!['000'].costs.easy;
		costs[1] += data.upgrades!['000'].costs.medium;
		costs[2] += data.upgrades!['000'].costs.hard;
		costs[3] += data.upgrades!['000'].costs.impoppable;
	}

	onMount(async () => {
		towers.forEach((tower: Tower) => {
			if (tower.id !== $page.params.id) return;
			towerName = tower.name;
		});
		pageMounted = true;
	});

	async function calcStats() {
		let currentStats = JSON.parse(JSON.stringify(data.stats!['000']));
		currentStats = checkForInfinity(currentStats);
		if (pathString !== '600' && pathString !== '000') {
			for (let i = 1; i <= paths[0]; i++) {
				let statsToAdd = checkForInfinity(data.stats![`${i}00`]);
				currentStats = addStats(currentStats, statsToAdd);
				currentStats = addAbility(currentStats, statsToAdd);
			}
			for (let i = 1; i <= paths[1]; i++) {
				let statsToAdd = checkForInfinity(data.stats![`0${i}0`]);
				currentStats = addStats(currentStats, statsToAdd);
				currentStats = addAbility(currentStats, statsToAdd);
			}
			for (let i = 1; i <= paths[2]; i++) {
				let statsToAdd = checkForInfinity(data.stats![`00${i}`]);
				currentStats = addStats(currentStats, statsToAdd);
				currentStats = addAbility(currentStats, statsToAdd);
			}
		} else if (pathString === '600') {
			currentStats = data.stats!['600'];
		}

		return currentStats;
	}

	function addStats(statsToEdit: Stats, statsToAdd: Stats) {
		for (let i = 0; i < statsToAdd.attacks.length; i++) {
			if (statsToEdit.attacks[i] !== undefined) {
				statsToEdit.attacks[i].name = statsToAdd.attacks[i].name;
				statsToEdit.attacks[i].damage += statsToAdd.attacks[i].damage;
				statsToEdit.attacks[i].damageMOAB += statsToAdd.attacks[i].damageMOAB;
				statsToEdit.attacks[i].damageCeramic += statsToAdd.attacks[i].damageCeramic;
				statsToEdit.attacks[i].damageBoss += statsToAdd.attacks[i].damageBoss;
				statsToEdit.attacks[i].pierce += statsToAdd.attacks[i].pierce;
				statsToEdit.attacks[i].projectiles += statsToAdd.attacks[i].projectiles;
				statsToEdit.attacks[i].range += statsToAdd.attacks[i].range;
				// todo: damage type is overridden by the last path
				statsToEdit.attacks[i].damageType = statsToAdd.attacks[i].damageType;
				statsToEdit.attacks[i].reloadSpeed *= statsToAdd.attacks[i].reloadSpeed;
				statsToEdit.attacks[i].camo = statsToAdd.attacks[i].camo;
			} else {
				statsToEdit.attacks[i] = statsToAdd.attacks[i];
			}
		}

		addCrosspath(statsToEdit, statsToAdd);

		return statsToEdit;
	}

	function addCrosspath(statsToEdit: Stats, statsToAdd: Stats) {
		for (let i = 0; i < statsToAdd.attacks.length; i++) {
			if (statsToAdd.attacks[i].crosspath === undefined) return statsToEdit;
			for (let j = 0; j < statsToAdd.attacks[i].crosspath!.length; j++) {
				if (statsToAdd.attacks[i].crosspath![j].path !== pathString) return statsToEdit;

				statsToEdit.attacks[i].damage += statsToAdd.attacks[i].crosspath![j].damage;
				statsToEdit.attacks[i].damageMOAB += statsToAdd.attacks[i].crosspath![j].damageMOAB;
				statsToEdit.attacks[i].damageCeramic += statsToAdd.attacks[i].crosspath![j].damageCeramic;
				statsToEdit.attacks[i].damageBoss += statsToAdd.attacks[i].crosspath![j].damageBoss;
				statsToEdit.attacks[i].pierce += statsToAdd.attacks[i].crosspath![j].pierce;
				statsToEdit.attacks[i].projectiles += statsToAdd.attacks[i].crosspath![j].projectiles;
				statsToEdit.attacks[i].range += statsToAdd.attacks[i].crosspath![j].range;
				statsToEdit.attacks[i].damageType = statsToAdd.attacks[i].crosspath![j].damageType;
				statsToEdit.attacks[i].reloadSpeed *= statsToAdd.attacks[i].crosspath![j].reloadSpeed;
				statsToEdit.attacks[i].camo = statsToAdd.attacks[i].crosspath![j].camo;
			}
		}

		return statsToEdit;
	}

	function addAbility(statsToEdit: Stats, statsToAdd: Stats) {
		if (statsToAdd.ability !== undefined) {
			statsToEdit.ability = statsToAdd.ability;
		}
		/*if (statsToAdd["ability"]["crosspath"] !== undefined) {
			for (let j = 0; j < statsToAdd["ability"]["crosspath"].length; j++) {
				if (statsToAdd["ability"]["crosspath"][j]["path"] === pathString) {
					for (const stat in statsToAdd["ability"]["crosspath"][j]) {
						console.log({stat, statsToEdit, statsToAdd});
						if (stat === "damageType") {
							statsToEdit["ability"]["damageType"] = ["ability"]["crosspath"][j]["damageType"];
							continue;
						} else if (stat === "reloadSpeed") {
							statsToEdit["ability"]["reloadSpeed"] *= ["ability"]["crosspath"][j]["reloadSpeed"];
							continue;
						} else if (stat === "camo") {
							if (statsToAdd["ability"]["crosspath"][j]["camo"] === true) {
								statsToEdit["ability"]["camo"] = true;
							}
							continue;
						}
						statsToEdit["ability"][stat] += statsToAdd["ability"]["crosspath"][j][stat];
					}
				}
			}
		}*/

		return statsToEdit;
	}

	function checkForInfinity(statsToEdit: Stats) {
		for (let i = 0; i < statsToEdit.attacks.length; i++) {
			// go through all stats, replace -1 with actual infinity
			if (statsToEdit.attacks[i].damage === -1) {
				statsToEdit.attacks[i].damage = Infinity;
			}
			if (statsToEdit.attacks[i].damageMOAB === -1) {
				statsToEdit.attacks[i].damageMOAB = Infinity;
			}
			if (statsToEdit.attacks[i].damageCeramic === -1) {
				statsToEdit.attacks[i].damageCeramic = Infinity;
			}
			if (statsToEdit.attacks[i].damageBoss === -1) {
				statsToEdit.attacks[i].damageBoss = Infinity;
			}
			if (statsToEdit.attacks[i].pierce === -1) {
				statsToEdit.attacks[i].pierce = Infinity;
			}
			if (statsToEdit.attacks[i].projectiles === -1) {
				statsToEdit.attacks[i].projectiles = Infinity;
			}
			if (statsToEdit.attacks[i].range === -1) {
				statsToEdit.attacks[i].range = Infinity;
			}
			if (statsToEdit.attacks[i].reloadSpeed === -1) {
				statsToEdit.attacks[i].reloadSpeed = Infinity;
			}
		}

		return statsToEdit;
	}

	async function checkBloons(bloons: string[]) {
		let currentStats = await statsCurrent;
		let tempBloonList: Record<string, boolean> = {
			normal: false,
			camo: false,
			black: false,
			white: false,
			lead: false,
			ceramic: false,
			purple: false,
			frozen: false
		};

		for (const bloon of bloons) {
			if (bloon !== 'camo') {
				for (let i = 0; i < currentStats.attacks.length; i++) {
					if (!damageTypes[currentStats.attacks[i].damageType][bloon]) continue;
					tempBloonList[bloon] = true;
				}
			} else {
				for (let i = 0; i < currentStats.attacks.length; i++) {
					if (!currentStats.attacks[i].camo) continue;
					tempBloonList[bloon] = true;
				}
			}
		}

		return tempBloonList;
	}
</script>

<svelte:head>
	<title>{towerName} - BTD6 Stats</title>
</svelte:head>

<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300 }}>
	{#await bloonList}
		<h1>Loading Stats...</h1>
	{:then bloons}
		{#await statsCurrent}
			<h1>Loading Stats...</h1>
		{:then stats}
			<h1>{towerName}</h1>
			<div class="stats-container">
				{#each stats.attacks as attack}
					<table>
						<tr>
							<th colspan="2">{attack.name} Attack</th>
						</tr>
						<tr>
							<td title="Normal Bloon Damage">
								<img src="/images/bloons/Red.png" alt="Normal Bloon Damage" loading="lazy" />
								{attack.damage}
							</td>
							<td title="Range">
								<img src="/images/dart-monkey/u001.png" alt="Range" loading="lazy" />
								{attack.range}
							</td>
						</tr>
						<tr>
							<td title="MOAB Damage">
								<img src="/images/bloons/MOAB.png" alt="MOAB Damage" loading="lazy" />
								{attack.damageMOAB}
							</td>
							<td title="Pierce">
								<img src="/images/sniper-monkey/u030.png" alt="Pierce" loading="lazy" />
								{attack.pierce}
							</td>
						</tr>
						<tr>
							<td title="Ceramic Damage">
								<img src="/images/bloons/Ceramic.png" alt="Ceramic Damage" loading="lazy" />
								{attack.damageCeramic}
							</td>
							<td title="Rate of Fire">
								<img src="/images/sniper-monkey/u002.png" alt="Rate of Fire" loading="lazy" />
								{Math.round((1 / attack.reloadSpeed) * 100) / 100}/s
							</td>
						</tr>
						<tr>
							<td title="Boss Bloon Damage">
								<img src="/images/bloons/Lych.png" alt="Boss Bloon Damage" loading="lazy" />
								{attack.damageBoss}
							</td>
							<td title="Projectile Count">
								<img src="/images/dart-monkey/u030.png" alt="Projectile Count" loading="lazy" />
								{attack.projectiles}
							</td>
						</tr>
					</table>
				{/each}
				{#if stats.ability.name !== undefined}
					<table>
						<tr>
							<th colspan="2">{stats.ability.name} Ability</th>
						</tr>
						<tr>
							<td title="Normal Bloon Damage">
								<img src="/images/bloons/Red.png" alt="Normal Bloon Damage" loading="lazy" />
								{stats.ability.damage}
							</td>
							<td title="Range">
								<img src="/images/dart-monkey/u001.png" alt="Range" loading="lazy" />
								{stats.ability.range}
							</td>
						</tr>
						<tr>
							<td title="MOAB Damage">
								<img src="/images/bloons/MOAB.png" alt="MOAB Damage" loading="lazy" />
								{stats.ability.damageMOAB}
							</td>
							<td title="Pierce">
								<img src="/images/sniper-monkey/u030.png" alt="Pierce" loading="lazy" />
								{stats.ability.pierce}
							</td>
						</tr>
						<tr>
							<td title="Ceramic Damage">
								<img src="/images/bloons/Ceramic.png" alt="Ceramic Damage" loading="lazy" />
								{stats.ability.damageCeramic}
							</td>
							<td title="Rate of Fire">
								<img src="/images/sniper-monkey/u002.png" alt="Rate of Fire" loading="lazy" />
								{Math.round((1 / stats.ability.reloadSpeed) * 100) / 100}/s
							</td>
						</tr>
						<tr>
							<td title="Boss Bloon Damage">
								<img src="/images/bloons/Lych.png" alt="Boss Bloon Damage" loading="lazy" />
								{stats.ability.damageBoss}
							</td>
							<td title="Projectile Count">
								<img src="/images/dart-monkey/u030.png" alt="Projectile Count" loading="lazy" />
								{stats.ability.projectiles}
							</td>
						</tr>
						<tr>
							<td title="Duration">
								<img src="/images/misc/StopWatch.png" alt="Duration" loading="lazy" />
								{stats.ability.duration}
							</td>
							<td title="Cooldown">
								<img src="/images/misc/RetryIcon.png" alt="Cooldown" loading="lazy" />
								{stats.ability.cooldown}
							</td>
						</tr>
					</table>{/if}
				<table>
					<tr>
						<th colspan="2">Costs</th>
					</tr>
					<tr>
						<td>Easy: ${costs[0]}</td>
						<td>Medium: ${costs[1]}</td>
					</tr>
					<tr>
						<td>Hard: ${costs[2]}</td>
						<td>Impoppable: ${costs[3]}</td>
					</tr>
					<tr>
						<td title="Estimated Normal Bloon DPS">
							<img src="/images/bloons/Red.png" alt="Estimated Normal Bloon DPS" loading="lazy" />
							{getDPS(stats.attacks)}
						</td>
						<td title="Estimated MOAB DPS">
							<img src="/images/bloons/MOAB.png" alt="Estimated MOAB DPS" loading="lazy" />
							{getMOABDPS(stats.attacks)}
						</td>
					</tr>
					<tr>
						<td title="Estimated Ceramic DPS">
							<img src="/images/bloons/Ceramic.png" alt="Estimated Ceramic DPS" loading="lazy" />
							{getCeramicDPS(stats.attacks)}
						</td>
						<td title="Estimated Boss DPS">
							<img src="/images/bloons/Lych.png" alt="Estimated Boss DPS" loading="lazy" />
							{getBossDPS(stats.attacks)}
						</td>
					</tr>
					<tr>
						<th colspan="2" class="bottom-th">Estimated max DPS</th>
					</tr>
				</table>
				<table>
					<tr>
						<th colspan="2">Bloons</th>
					</tr>
					<tr>
						<td title="Can pop Normal Bloons?"
							><img
								src="/images/bloons/Red.png"
								alt="normal"
								loading="lazy"
							/>{#if bloons.normal}<img
									src="/images/misc/TickGreenIcon.png"
									alt="true"
									loading="lazy"
								/>{:else}<img
									src="/images/misc/CloseIcon.png"
									alt="false"
									loading="lazy"
								/>{/if}</td
						>
						<td title=" Can see Camo Bloons?"
							><img
								src="/images/bloons/GreenCamo.png"
								alt="camo"
								loading="lazy"
							/>{#if bloons.camo}<img
									src="/images/misc/TickGreenIcon.png"
									alt="true"
									loading="lazy"
								/>{:else}<img
									src="/images/misc/CloseIcon.png"
									alt="false"
									loading="lazy"
								/>{/if}</td
						>
					</tr>
					<tr>
						<td title="Can pop Black Bloons?"
							><img
								src="/images/bloons/Black.png"
								alt="black"
								loading="lazy"
							/>{#if bloons.black}<img
									src="/images/misc/TickGreenIcon.png"
									alt="true"
									loading="lazy"
								/>{:else}<img
									src="/images/misc/CloseIcon.png"
									alt="false"
									loading="lazy"
								/>{/if}</td
						>
						<td title="Can pop White Bloons?"
							><img
								src="/images/bloons/White.png"
								alt="white"
								loading="lazy"
							/>{#if bloons.white}<img
									src="/images/misc/TickGreenIcon.png"
									alt="true"
									loading="lazy"
								/>{:else}<img
									src="/images/misc/CloseIcon.png"
									alt="false"
									loading="lazy"
								/>{/if}</td
						>
					</tr>
					<tr>
						<td title="Can pop Lead Bloons?"
							><img src="/images/bloons/Lead.png" alt="lead" loading="lazy" />{#if bloons.lead}<img
									src="/images/misc/TickGreenIcon.png"
									alt="true"
									loading="lazy"
								/>{:else}<img
									src="/images/misc/CloseIcon.png"
									alt="false"
									loading="lazy"
								/>{/if}</td
						>
						<td title="Can pop Ceramic Bloons?"
							><img
								src="/images/bloons/Ceramic.png"
								alt="ceramic"
								loading="lazy"
							/>{#if bloons.ceramic}<img
									src="/images/misc/TickGreenIcon.png"
									alt="true"
									loading="lazy"
								/>{:else}<img
									src="/images/misc/CloseIcon.png"
									alt="false"
									loading="lazy"
								/>{/if}</td
						>
					</tr>
					<tr>
						<td title="Can pop Purple Bloons?"
							><img
								src="/images/bloons/Purple.png"
								alt="purple"
								loading="lazy"
							/>{#if bloons.purple}<img
									src="/images/misc/TickGreenIcon.png"
									alt="true"
									loading="lazy"
								/>{:else}<img
									src="/images/misc/CloseIcon.png"
									alt="false"
									loading="lazy"
								/>{/if}</td
						>
						<td title="Can pop Frozen Bloons?"
							><img
								src="/images/bloons/WhiteIce.png"
								alt="frozen"
								loading="lazy"
							/>{#if bloons.frozen}<img
									src="/images/misc/TickGreenIcon.png"
									alt="true"
									loading="lazy"
								/>{:else}<img
									src="/images/misc/CloseIcon.png"
									alt="false"
									loading="lazy"
								/>{/if}</td
						>
					</tr>
				</table>
				{#if data.upgrades}
					<table>
						<tr>
							<th colspan="2">Upgrade</th>
						</tr>
						<tr>
							<td colspan="2">Name: {data.upgrades[currentUpgrade].name}</td>
						</tr>
						<tr>
							<td>Easy: ${data.upgrades[currentUpgrade].costs.easy}</td>
							<td>Medium: ${data.upgrades[currentUpgrade].costs.medium}</td>
						</tr>
						<tr>
							<td>Hard: ${data.upgrades[currentUpgrade].costs.hard}</td>
							<td>Impoppable: ${data.upgrades[currentUpgrade].costs.impoppable}</td>
						</tr>
					</table>
				{:else}
					<h2>Loading Upgrades...</h2>
				{/if}
			</div>
		{:catch error}
			<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }}>
				<h1>Failed to load stats1</h1>
			</main>
		{/await}
	{:catch error}
		<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }}>
			<h1>Failed to load stats2</h1>
		</main>
	{/await}
	{#if data.images}
		<div id="upgrade-grid" class={paragons.includes($page.params.id) ? 'paragon' : ''}>
			<button id="reset-btn" on:click={() => (paths = [0, 0, 0])}
				><img src="/images/misc/CloseIcon.png" alt="reset" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[0] = 1)}
				disabled={(paths[1] > 0 && paths[2] > 0) || paths[0] > 5}
				class={paths[0] === 1 ? 'active' : ''}
				aria-label={data.upgrades['100']['description']}
				on:mouseover={() => (currentUpgrade = '100')}
				on:focus={() => (currentUpgrade = '100')}
				><img src={data.images[26].url} alt="100" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[0] = 2)}
				disabled={(paths[1] > 0 && paths[2] > 0) || paths[0] > 5}
				class={paths[0] === 2 ? 'active' : ''}
				aria-label={/*data.upgrades["200"]["name"] + "\n" + */ data.upgrades['200']['description']}
				on:mouseover={() => (currentUpgrade = '200')}
				on:focus={() => (currentUpgrade = '200')}
				><img src={data.images[27].url} alt="200" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[0] = 3)}
				disabled={(paths[1] > 0 && paths[2] > 0) || (paths[1] || paths[2]) > 2 || paths[0] > 5}
				class={paths[0] === 3 ? 'active' : ''}
				aria-label={/*data.upgrades["300"]["name"] + "\n" + */ data.upgrades['300']['description']}
				on:mouseover={() => (currentUpgrade = '300')}
				on:focus={() => (currentUpgrade = '300')}
				><img src={data.images[28].url} alt="300" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[0] = 4)}
				disabled={(paths[1] > 0 && paths[2] > 0) || (paths[1] || paths[2]) > 2 || paths[0] > 5}
				class={paths[0] === 4 ? 'active' : ''}
				aria-label={/*data.upgrades["400"]["name"] + "\n" + */ data.upgrades['400']['description']}
				on:mouseover={() => (currentUpgrade = '400')}
				on:focus={() => (currentUpgrade = '400')}
				><img src={data.images[29].url} alt="400" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[0] = 5)}
				disabled={(paths[1] > 0 && paths[2] > 0) || (paths[1] || paths[2]) > 2 || paths[0] > 5}
				class={paths[0] === 5 ? 'active' : ''}
				aria-label={/*data.upgrades["500"]["name"] + "\n" + */ data.upgrades['500']['description']}
				on:mouseover={() => (currentUpgrade = '500')}
				on:focus={() => (currentUpgrade = '500')}
				><img src={data.images[30].url} alt="500" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[1] = 1)}
				disabled={(paths[0] > 0 && paths[2] > 0) || paths[0] > 5}
				class={paths[1] === 1 ? 'active' : ''}
				aria-label={/*data.upgrades["010"]["name"] + "\n" + */ data.upgrades['010']['description']}
				on:mouseover={() => (currentUpgrade = '010')}
				on:focus={() => (currentUpgrade = '010')}
				><img src={data.images[21].url} alt="010" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[1] = 2)}
				disabled={(paths[0] > 0 && paths[2] > 0) || paths[0] > 5}
				class={paths[1] === 2 ? 'active' : ''}
				aria-label={/*data.upgrades["020"]["name"] + "\n" + */ data.upgrades['020']['description']}
				on:mouseover={() => (currentUpgrade = '020')}
				on:focus={() => (currentUpgrade = '020')}
				><img src={data.images[22].url} alt="020" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[1] = 3)}
				disabled={(paths[0] > 0 && paths[2] > 0) || (paths[0] || paths[2]) > 2 || paths[0] > 5}
				class={paths[1] === 3 ? 'active' : ''}
				aria-label={/*data.upgrades["030"]["name"] + "\n" + */ data.upgrades['030']['description']}
				on:mouseover={() => (currentUpgrade = '030')}
				on:focus={() => (currentUpgrade = '030')}
				><img src={data.images[23].url} alt="030" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[1] = 4)}
				disabled={(paths[0] > 0 && paths[2] > 0) || (paths[0] || paths[2]) > 2 || paths[0] > 5}
				class={paths[1] === 4 ? 'active' : ''}
				aria-label={/*data.upgrades["040"]["name"] + "\n" + */ data.upgrades['040']['description']}
				on:mouseover={() => (currentUpgrade = '040')}
				on:focus={() => (currentUpgrade = '040')}
				><img src={data.images[24].url} alt="040" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[1] = 5)}
				disabled={(paths[0] > 0 && paths[2] > 0) || (paths[0] || paths[2]) > 2 || paths[0] > 5}
				class={paths[1] === 5 ? 'active' : ''}
				aria-label={/*data.upgrades["050"]["name"] + "\n" + */ data.upgrades['050']['description']}
				on:mouseover={() => (currentUpgrade = '050')}
				on:focus={() => (currentUpgrade = '050')}
				><img src={data.images[25].url} alt="050" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[2] = 1)}
				disabled={(paths[0] > 0 && paths[1] > 0) || paths[0] > 5}
				class={paths[2] === 1 ? 'active' : ''}
				aria-label={/*data.upgrades["001"]["name"] + "\n" + */ data.upgrades['001']['description']}
				on:mouseover={() => (currentUpgrade = '001')}
				on:focus={() => (currentUpgrade = '001')}
				><img src={data.images[16].url} alt="001" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[2] = 2)}
				disabled={(paths[0] > 0 && paths[1] > 0) || paths[0] > 5}
				class={paths[2] === 2 ? 'active' : ''}
				aria-label={/*data.upgrades["002"]["name"] + "\n" + */ data.upgrades['002']['description']}
				on:mouseover={() => (currentUpgrade = '002')}
				on:focus={() => (currentUpgrade = '002')}
				><img src={data.images[17].url} alt="002" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[2] = 3)}
				disabled={(paths[0] > 0 && paths[1] > 0) || (paths[0] || paths[1]) > 2 || paths[0] > 5}
				class={paths[2] === 3 ? 'active' : ''}
				aria-label={/*data.upgrades["003"]["name"] + "\n" + */ data.upgrades['003']['description']}
				on:mouseover={() => (currentUpgrade = '003')}
				on:focus={() => (currentUpgrade = '003')}
				><img src={data.images[18].url} alt="003" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[2] = 4)}
				disabled={(paths[0] > 0 && paths[1] > 0) || (paths[0] || paths[1]) > 2 || paths[0] > 5}
				class={paths[2] === 4 ? 'active' : ''}
				aria-label={/*data.upgrades["004"]["name"] + "\n" + */ data.upgrades['004']['description']}
				on:mouseover={() => (currentUpgrade = '004')}
				on:focus={() => (currentUpgrade = '004')}
				><img src={data.images[19].url} alt="004" loading="lazy" /></button
			>
			<button
				on:click={() => (paths[2] = 5)}
				disabled={(paths[0] > 0 && paths[1] > 0) || (paths[0] || paths[1]) > 2 || paths[0] > 5}
				class={paths[2] === 5 ? 'active' : ''}
				aria-label={/*data.upgrades["005"]["name"] + "\n" + */ data.upgrades['005']['description']}
				on:mouseover={() => (currentUpgrade = '005')}
				on:focus={() => (currentUpgrade = '005')}
				><img src={data.images[20].url} alt="005" loading="lazy" /></button
			>
			{#if paragons.includes($page.params.id) && data.upgrades['600']}
				<button
					id="paragon-btn"
					on:click={() => (paths = [6, 0, 0])}
					class={paths[0] === 6 ? 'active' : ''}
					aria-label={data.upgrades['600']['description']}
					on:mouseover={() => (currentUpgrade = '600')}
					on:focus={() => (currentUpgrade = '600')}
					><img src={data.images[32].url} alt="600" loading="lazy" /></button
				>
			{/if}
		</div>
	{:else}
		<h1>Loading Images...</h1>
	{/if}
	<table class="smol">
		<tr>
			<th colspan="2">Legend</th>
		</tr>
		<tr>
			<td title="Normal Bloon Damage">
				<img src="/images/bloons/Red.png" alt="Normal Bloon Damage" loading="lazy" />
				Normal Bloon Damage
			</td>
			<td title="Range">
				<img src="/images/dart-monkey/u001.png" alt="Range" loading="lazy" />
				Range
			</td>
		</tr>
		<tr>
			<td title="MOAB Damage">
				<img src="/images/bloons/MOAB.png" alt="MOAB Damage" loading="lazy" />
				MOAB Damage
			</td>
			<td title="Pierce">
				<img src="/images/sniper-monkey/u030.png" alt="Pierce" loading="lazy" />
				Pierce
			</td>
		</tr>
		<tr>
			<td title="Ceramic Damage">
				<img src="/images/bloons/Ceramic.png" alt="Ceramic Damage" loading="lazy" />
				Ceramic Damage
			</td>
			<td title="Rate of Fire">
				<img src="/images/sniper-monkey/u002.png" alt="Rate of Fire" loading="lazy" />
				Rate of Fire
			</td>
		</tr>
		<tr>
			<td title="Boss Bloon Damage">
				<img src="/images/bloons/Lych.png" alt="Boss Bloon Damage" loading="lazy" />
				Boss Bloon Damage
			</td>
			<td title="Projectile Count"
				><img src="/images/dart-monkey/u030.png" alt="Projectile Count" loading="lazy" />
				Projectile Count
			</td>
		</tr>
		<tr>
			<td title="Duration">
				<img src="/images/misc/StopWatch.png" alt="Duration" loading="lazy" />
				Duration
			</td>
			<td title="Cooldown">
				<img src="/images/misc/RetryIcon.png" alt="Cooldown" loading="lazy" />
				Cooldown
			</td>
		</tr>
	</table>
</main>

<style>
	.stats-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
		margin: 2rem auto;
		width: 100%;
		gap: 1rem;
	}

	table {
		text-align: center;
		border: 2px solid var(--text);
		transition: var(--transition);
		border-radius: 0.5rem;
		cursor: default;
		border-spacing: 0;
	}

	th {
		font-family: 'Heading', serif;
		font-size: 1.2rem;
		border-bottom: 1px solid var(--text);
		transition: var(--transition);
	}

	.bottom-th {
		border-bottom: none;
		border-top: 1px solid var(--text);
	}

	td {
		padding: 0.2rem 0.4rem;
		font-size: 1rem;
		border: 1px solid var(--text);
		transition: var(--transition);
	}

	td:first-child {
		border-left: none;
	}

	td:last-child {
		border-right: none;
	}

	tr:last-child td {
		border-bottom: none;
	}

	td img {
		max-height: 1.5rem;
		max-width: 1.5rem;
		padding: 0.2rem;
	}

	#upgrade-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(6, 1fr);
		gap: 1rem;
		align-items: center;
		grid-auto-flow: column;
		margin-bottom: 2rem;
	}

	#upgrade-grid.paragon {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(7, 1fr);
	}

	button {
		width: 4rem;
		height: 4rem;
		border: 2px solid var(--text);
		background-color: transparent;
		transition: var(--transition);
		border-radius: 0.5rem;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	button:hover {
		background-color: var(--blue);
	}

	button:disabled {
		background-color: var(--red);
	}

	button.active {
		background-color: var(--green);
	}

	button[aria-label]::before {
		content: attr(aria-label);
		position: absolute;
		bottom: calc(100% + 1rem);
		left: 50%;
		transform: translateX(-50%) scale(0);
		border: 2px solid var(--text);
		background-color: var(--base);
		color: var(--text);
		padding: 0.5rem;
		border-radius: 0.5rem;
		transition: var(--transition);
		width: max-content;
		max-width: 20rem;
		z-index: 3;
		pointer-events: none;
		font-family: 'Nunito', sans-serif;
		display: none;
	}

	button[aria-label]:hover::before {
		transform: translateX(-50%) scale(1);
	}

	button img {
		max-width: 90%;
		max-height: 90%;
	}

	img {
		transition: var(--transition);
		filter: var(--filter);
	}

	#reset-btn {
		grid-column: 1 / 4;
		grid-row: 1;
		width: 14rem;
	}

	#reset-btn img {
		max-height: 80%;
		max-width: 80%;
	}

	#paragon-btn {
		display: none;
	}

	#paragon-btn img {
	}

	#upgrade-grid.paragon #paragon-btn {
		display: block;
		grid-column: 1 / 4;
		grid-row: 7;
		width: 14rem;
	}

	@media (max-width: 36rem) {
		.smol td {
			font-size: 0.8rem;
		}

		.smol img {
			max-height: 1.2rem;
			max-width: 1.2rem;
		}

		.smol th {
			font-size: 1.2rem;
		}
	}

	@media (min-width: 36rem) {
		#upgrade-grid {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: repeat(3, 1fr);
			grid-auto-flow: row;
		}

		#reset-btn {
			grid-column: 1;
			grid-row: 1 / 4;
			width: 4rem;
			height: 14rem;
		}

		#upgrade-grid.paragon {
			grid-template-columns: repeat(7, 1fr);
			grid-template-rows: repeat(3, 1fr);
		}

		#upgrade-grid.paragon #paragon-btn {
			grid-column: 7;
			grid-row: 1 / 4;
			height: 14rem;
			width: 4rem;
		}

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

		button[aria-label]::before {
			display: block;
		}
	}

	@media (min-width: 48rem) {
		button {
			width: 6rem;
			height: 6rem;
		}

		#reset-btn {
			height: 20rem;
			width: 6rem;
		}

		#upgrade-grid.paragon #paragon-btn {
			height: 20rem;
			width: 6rem;
		}
	}

	@media (min-width: 64rem) {
		button {
			width: 8rem;
			height: 8rem;
		}

		#reset-btn {
			height: 26rem;
			width: 8rem;
		}

		#upgrade-grid.paragon #paragon-btn {
			height: 26rem;
			width: 8rem;
		}
	}
</style>
