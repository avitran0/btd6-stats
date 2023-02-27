<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';

	const darkMode = writable('true');

	let menuOpen = false;
	let menu: HTMLElement;
	let pageMounted = false;

	onMount(() => {
		if (localStorage.getItem('darkMode') !== 'false') {
			darkMode.set('true');
		} else {
			darkMode.set('false');
		}

		darkMode.subscribe((value) => {
			localStorage.setItem('darkMode', value);
		});

		if (!$darkMode) {
			document.body.classList.add('light');
		}

		menu = document.getElementById('menu')!;
		pageMounted = true;
	});

	function toggleDarkMode() {
		document.body.classList.toggle('light');
		darkMode.update((value) => {
			return value === 'true' ? 'false' : 'true';
		});
	}

	function toggleMenu() {
		if (menuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	}

	function openMenu() {
		menu.style.display = 'flex';
		setTimeout(() => {
			menu.style.opacity = '1';
			menu.style.transform = 'translateY(0) scale(1)';
		}, 10);
		menuOpen = true;
	}

	function closeMenu() {
		menu.style.opacity = '0';
		menu.style.transform = 'translateY(-1rem) scale(0)';
		setTimeout(() => {
			menu.style.display = 'none';
		}, 200);
		menuOpen = false;
	}

	function checkBorder() {
		if (!pageMounted) return;
		if (window.scrollY > 5) {
			document.body.classList.add('scroll');
		} else {
			document.body.classList.remove('scroll');
		}
	}

	$: if (pageMounted && $page.route.id !== null) {
		setMenuActive($page.route.id.split('/')[0]);
	}

	function setMenuActive(link: string) {
		let nav = document.getElementById('nav')!;
		nav.classList.remove('towers', 'heroes', 'bloons', 'rounds');
		if (!link) return;
		nav.classList.add(link);
	}
</script>

<svelte:window on:scroll={checkBorder} />

<header id="header">
	<nav id="nav">
		<a href="/">BTD6 Stats</a>
		<a href="/towers" id="towers-link">Towers</a>
		<a href="/heroes" id="heroes-link">Heroes</a>
		<a href="/bloons" id="bloons-link">Bloons</a>
		<a href="/rounds" id="rounds-link">Rounds</a>
	</nav>
	<div class="buttons">
		<a href="https://www.github.com/avitran0" id="github-link-navbar"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="#fff"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path
					d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
				/>
			</svg></a
		>
		<button on:click={toggleDarkMode} aria-label="Dark Mode Toggle" id="dark-mode-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
			</svg>
			<div id="slider"><div /></div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="12" cy="12" r="4" />
				<path
					d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
				/>
			</svg></button
		><button on:click={toggleMenu} aria-label="Menu Toggle" id="menu-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-menu-2"
				width="48"
				height="48"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<line x1="4" y1="6" x2="20" y2="6" />
				<line x1="4" y1="12" x2="20" y2="12" />
				<line x1="4" y1="18" x2="20" y2="18" />
			</svg>
		</button>
	</div>
	<div id="menu">
		<a href="/towers" on:click={closeMenu}>Towers</a>
		<a href="/heroes" on:click={closeMenu}>Heroes</a>
		<a href="/bloons" on:click={closeMenu}>Bloons</a>
		<a href="/rounds" on:click={closeMenu}>Rounds</a>
	</div>
</header>
<div id="slot-container">
	<slot />
</div>
<footer>&copy; 2022 Felix Fröhlich. All rights reserved.</footer>

<style>
	:root {
		--background: rgb(40, 44, 52);
		--background-transparent: rgba(40, 44, 52, 0.5);
		--background-dark: rgb(33, 37, 43);
		--background-light: rgb(55, 61, 72);
		--blue: rgb(97, 175, 239);
		--blue-dark: rgb(38, 131, 208);
		--green: rgb(152, 195, 121);
		--red: rgb(224, 108, 117);
		--yellow: rgb(229, 192, 123);
		--orange: rgb(209, 154, 102);
		--purple: rgb(198, 120, 221);
		--teal: rgb(86, 182, 194);
		--white: rgb(230, 230, 230);
		--white-transparent: rgba(230, 230, 230, 0.5);
		--white-dark: rgb(200, 200, 200);
		--white-light: rgb(240, 240, 240);
		--transition-linear: 0.2s;
		--transition-ease-out: 0.2s cubic-bezier(0.33, 1, 0.68, 1);
	}

	@font-face {
		font-family: 'ZillaSlab';
		src: url('/fonts/ZillaSlab.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: 'ZillaSlabBold';
		src: url('/fonts/ZillaSlabBold.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: 'Nunito';
		src: url('/fonts/Nunito.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: 'JetBrainsMono';
		src: url('/fonts/JetBrainsMono.woff2') format('woff2');
		font-display: swap;
	}

	:global(html) {
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		font-family: 'Nunito', sans-serif;
		min-height: 100vh;
		background-color: var(--background);
		transition: var(--transition-linear);
		color: var(--white);
	}

	:global(body.light) {
		background-color: var(--white);
		color: var(--background);
	}

	:global(main) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	:global(h1) {
		font-family: 'ZillaSlab', serif;
		margin: 0.5rem;
		font-size: 2rem;
		cursor: default;
	}

	:global(h2) {
		font-family: 'ZillaSlab', serif;
		margin: 0.5rem;
		font-size: 1.5rem;
		cursor: default;
	}

	:global(p) {
		font-size: 1rem;
		margin: 0;
		cursor: default;
	}

	header {
		background-color: var(--background-transparent);
		color: var(--white);
		transition: var(--transition-linear);
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: sticky;
		top: 0;
		backdrop-filter: blur(0.2rem);
		z-index: 2;
		height: 4rem;
	}

	header::after {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background-color: var(--white);
		transition: var(--transition-linear);
		transform: scaleX(0);
		transform-origin: left;
		position: absolute;
		bottom: 0;
	}

	:global(.scroll) header::after {
		transform: scaleX(1);
	}

	:global(.light) header {
		background-color: var(--white-transparent);
		color: var(--background);
	}

	:global(.light) header::after {
		background-color: var(--background);
	}

	nav {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 0.5rem;
	}

	a {
		color: var(--white);
		text-decoration: none;
		transition: var(--transition-linear);
		font-family: 'ZillaSlab', serif;
		font-size: 1.5rem;
		padding: 0.5rem;
		display: none;
	}

	:global(.light) a {
		color: var(--background);
	}

	a:first-of-type {
		font-family: 'ZillaSlabBold', serif;
		display: block;
	}

	a::after {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background-color: var(--white);
		transition: var(--transition-linear);
		transform: scaleX(0);
	}

	a:hover::after {
		transform: scaleX(1);
	}

	:global(.light) a::after {
		background-color: var(--background);
	}

	:global(nav.towers) #towers-link::after {
		transform: scaleX(1);
	}

	:global(nav.heroes) #heroes-link::after {
		transform: scaleX(1);
	}

	:global(nav.bloons) #bloons-link::after {
		transform: scaleX(1);
	}

	:global(nav.rounds) #rounds-link::after {
		transform: scaleX(1);
	}

	button {
		border: 2px solid var(--white);
		border-radius: 0.5rem;
		background-color: transparent;
		height: 2.4rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
	}

	:global(.light) button {
		border: 2px solid var(--background);
	}

	svg {
		stroke: var(--white);
		transition: var(--transition-linear);
	}

	:global(.light) svg {
		stroke: var(--background);
	}

	#dark-mode-button svg {
		width: 1.2rem;
		height: 1.2rem;
	}

	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
	}

	.buttons a {
		width: 2.15rem;
		height: 2.15rem;
		border: 2px solid var(--white);
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		margin-right: 0.5rem;
	}

	:global(.light) .buttons a {
		border: 2px solid var(--background);
	}

	.buttons a::after {
		display: none;
	}

	a svg {
		width: 1.8rem;
		height: 1.8rem;
	}

	.buttons a:hover {
		border: 2px solid var(--white);
	}

	:global(.light) .buttons a:hover {
		border: 2px solid var(--background);
	}

	#menu-button {
		width: 2.4rem;
	}

	#menu {
		display: none;
		opacity: 0;
		flex-direction: column;
		position: absolute;
		top: 4rem;
		right: 1rem;
		border: 2px solid var(--white);
		border-radius: 0.5rem;
		background-color: var(--background);
		transition: var(--transition-linear);
		transform: translateY(-1rem) scale(0);
		transform-origin: top right;
	}

	:global(.light) #menu {
		border: 2px solid var(--background);
		background-color: var(--white);
	}

	#menu a {
		font-size: 1.5rem;
		display: block;
		padding: 0.2rem 0.4rem;
		font-family: 'ZillaSlab', serif;
	}

	#menu a:first-child {
		padding-top: 0.4rem;
	}

	#menu a:last-child {
		padding-bottom: 0.4rem;
	}

	#dark-mode-button {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#slider {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		background-color: var(--white);
		width: 2rem;
		height: 1rem;
		border-radius: 0.5rem;
		margin: 0 0.2rem;
	}

	:global(.light) #slider {
		background-color: var(--background);
	}

	#slider div {
		width: 0.8rem;
		height: 0.8rem;
		background-color: var(--background);
		border-radius: 0.4rem;
		margin: 0.1rem;
		transition: var(--transition-linear);
	}

	:global(.light) #slider div {
		background-color: var(--white);
		margin-left: 1.1rem;
	}

	#slot-container {
		display: grid;
	}

	#slot-container :global(main) {
		grid-row: 1 / 1;
		grid-column: 1 / 1;
	}

	footer {
		text-align: center;
		cursor: default;
		margin: 2rem 0;
	}

	@media (min-width: 36rem) {
		:global(h1) {
			font-size: 2.5rem;
		}

		:global(h2) {
			font-size: 1.8rem;
		}

		:global(p) {
			font-size: 1.2rem;
		}
	}

	@media (min-width: 42rem) {
		a {
			display: block;
		}

		#menu-button {
			display: none;
		}
	}
</style>
