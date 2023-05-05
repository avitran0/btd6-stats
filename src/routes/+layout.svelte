<script lang="ts">
	import { fade, draw } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	import { theme } from '$lib/theme';

	let menuOpen = false;
	let mounted = false;
	let scrollY = 0;

	onMount(() => {
		if (localStorage.theme === 'light') {
			theme.set('light');
		} else {
			theme.set('dark');
		}

		theme.subscribe((value) => {
			localStorage.setItem('theme', value.toString());
		});

		if ($theme === 'light') {
			document.body.classList.add('light');
		}

		mounted = true;
	});

	function toggleDarkMode() {
		if ($theme === 'dark') {
			theme.set('light');
		} else {
			theme.set('dark');
		}
	}
</script>

<svelte:head><link rel="stylesheet" href="/themes/{$theme}.css" /></svelte:head>

<svelte:window bind:scrollY />

<header class:scroll={scrollY > 5}>
	<div class="header-container">
		<nav>
			<a href="/">BTD6 Stats</a>
			<a href="/towers">Towers</a>
			<a href="/heroes">Heroes</a>
			<a href="/rounds">Rounds</a>
			<a href="/bloons">Bloons</a>
		</nav>
		<div id="button-container">
			<a href="https://www.github.com/avitran0" id="github-link-navbar"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
					/>
				</svg>
			</a>
			<button on:click={toggleDarkMode} aria-label="Dark Mode Toggle" id="dark-mode-button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					{#if $theme === 'dark'}
						<path
							in:draw={{ duration: 500, delay: 100, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
						/>
					{:else}
						<circle
							in:draw={{ duration: 500, delay: 100, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							cx="12"
							cy="12"
							r="4"
						/>
						<path
							in:draw={{ duration: 100, delay: 100, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							d="M20 12h1"
						/>
						<path
							in:draw={{ duration: 100, delay: 120, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							d="M17.7 17.7l.7.7"
						/>
						<path
							in:draw={{ duration: 100, delay: 140, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							d="M12 20v1"
						/>
						<path
							in:draw={{ duration: 100, delay: 170, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							d="M6.3 17.7l-.7.7"
						/>
						<path
							in:draw={{ duration: 100, delay: 210, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							d="M4 12h-1"
						/>
						<path
							in:draw={{ duration: 100, delay: 260, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							d="M6.3 6.3l-.7-.7"
						/>
						<path
							in:draw={{ duration: 100, delay: 330, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							d="M12 4v-1"
						/>
						<path
							in:draw={{ duration: 100, delay: 400, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							d="M17.7 6.3l.7-.7"
						/>
					{/if}
				</svg>
			</button>
			<button on:click={() => (menuOpen = !menuOpen)} aria-label="Menu Toggle" id="menu-button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="4" y1="6" x2="20" y2="6" />
					<line x1="4" y1="12" x2="20" y2="12" />
					<line x1="4" y1="18" x2="20" y2="18" />
				</svg>
			</button>
		</div>
		{#if menuOpen}
			<menu in:fade={{ duration: 100 }} out:fade={{ duration: 100 }} id="menu">
				<a href="/" on:click={() => (menuOpen = !menuOpen)}>Home</a>
				<a href="/towers" on:click={() => (menuOpen = !menuOpen)}>Towers</a>
				<a href="/heroes" on:click={() => (menuOpen = !menuOpen)}>Heroes</a>
				<a href="/rounds" on:click={() => (menuOpen = !menuOpen)}>Rounds</a>
				<a href="/bloons" on:click={() => (menuOpen = !menuOpen)}>Bloons</a>
				<button on:click={() => (menuOpen = !menuOpen)} id="menu-close">Close</button>
				<button
					on:click={() => (menuOpen = !menuOpen)}
					aria-label="Menu Toggle"
					id="menu-button-menu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="48"
						height="48"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line
							in:draw={{ duration: 500, delay: 100, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							x1="18"
							y1="6"
							x2="6"
							y2="18"
						/>
						<line
							in:draw={{ duration: 500, delay: 100, easing: cubicOut }}
							out:fade={{ duration: 100 }}
							x1="6"
							y1="6"
							x2="18"
							y2="18"
						/>
					</svg>
				</button>
			</menu>
		{/if}
	</div>
</header>

<div id="slot-container">
	<slot />
</div>

<footer>{new Date().getFullYear()} Felix Fröhlich</footer>

<style>
	:root {
		box-sizing: border-box;
		scroll-behavior: smooth;

		--transition: 0.2s cubic-bezier(0.33, 1, 0.68, 1);
	}

	@font-face {
		font-family: 'Heading';
		src: url('/fonts/ZillaSlab.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: 'Body';
		src: url('/fonts/Rubik.woff2') format('woff2');
		font-display: swap;
	}

	@font-face {
		font-family: 'Code';
		src: url('/fonts/JetBrainsMono.woff2') format('woff2');
		font-display: swap;
	}

	:global(*) {
		transition: var(--transition);
	}

	:global(body) {
		background-color: var(--base);
		color: var(--text);
		font-family: 'Body', monospace;
		overflow-x: hidden;
		min-height: 100vh;
		margin: 0;
	}

	:global(main) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	header {
		position: sticky;
		top: 0;
		width: 100vw;
		backdrop-filter: blur(0.2rem);
		z-index: 1;
		transition: var(--transition);
		background-color: rgba(var(--base-raw), 0.5);
	}

	header::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--text);
		z-index: 1;
		transition: var(--transition);
	}

	header.scroll::after {
		width: 100%;
	}

	.header-container {
		max-width: 48rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		text-align: center;
	}

	nav {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 4rem;
		margin-left: 1rem;
	}

	:global(h1) {
		font-size: 2.4rem;
		margin: 0;
		padding: 0;
		font-family: 'Heading', serif;
		cursor: default;
	}

	:global(h2) {
		font-size: 1.5rem;
		margin: 0;
		margin-bottom: 0.5rem;
		padding: 0;
		font-family: 'Heading', serif;
		cursor: default;
	}

	:global(p) {
		font-size: 1.2rem;
		margin: 0;
		padding: 0;
		cursor: default;
		text-align: left;
	}

	a {
		text-decoration: none;
		color: var(--text);
		margin-right: 1rem;
		font-size: 1.4rem;
		font-family: 'Heading', sans-serif;
	}

	nav a::after {
		content: '';
		display: block;
		position: relative;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: var(--text);
		border-radius: 2px;
		transition: var(--transition);
	}

	nav a:hover::after,
	nav a:active::after,
	nav a:focus::after,
	nav a:focus-visible::after {
		width: 100%;
	}

	#button-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	button {
		background-color: transparent;
		border: 2px solid var(--text);
		cursor: pointer;
		height: 2.4rem;
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1rem;
	}

	#dark-mode-button {
		display: grid;
		width: 2.4rem;
		height: 2.4rem;
	}

	#dark-mode-button svg {
		padding: 0.2rem;
		grid-column: 1;
		grid-row: 1;
	}

	#github-link-navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 0.8rem;
	}

	a svg {
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 0.5rem;
		padding: 0.2rem;
	}

	a svg:hover {
		background-color: var(--blue);
		stroke: var(--base);
	}

	button svg {
		width: 1.6rem;
		height: 1.6rem;
		padding: 0.2rem;
		stroke: var(--text);
	}

	#menu-button {
		display: none;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 2.4rem;
	}

	#menu {
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 0;
		margin: 0;
		justify-content: center;
		align-items: center;
		background-color: var(--base-transparent);
		backdrop-filter: blur(0.5rem);
	}

	#menu-button-menu {
		position: absolute;
		top: 0.8rem;
		right: 0;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 2.4rem;
		border-radius: 0.5rem;
		border: 2px solid var(--text);
	}

	#menu a {
		margin: 0;
		padding: 0.2rem;
		font-size: 2.4rem;
	}

	#menu-close {
		margin: 0.4rem 0;
		padding: 0 0.2rem;
		height: auto;
		color: var(--text);
		border: none;
		font-family: 'Code', monospace;
		font-size: 2.4rem;
		background-color: transparent;
	}

	#slot-container {
		display: grid;
	}

	#slot-container :global(main) {
		grid-column: 1;
		grid-row: 1;
	}

	footer {
		text-align: center;
		color: var(--text);
		margin: 2rem;
		font-size: 0.8rem;
		cursor: default;
	}

	@media (max-width: 32rem) {
		header {
			max-width: 100%;
		}

		nav a:nth-child(2),
		nav a:nth-child(3),
		nav a:nth-child(4),
		nav a:nth-child(5) {
			display: none;
		}

		#menu-button {
			display: flex;
		}
	}

	@media (max-width: 48rem) and (min-width: 32rem) {
		header {
			max-width: 100%;
		}

		nav a:nth-child(2),
		nav a:nth-child(3),
		nav a:nth-child(4),
		nav a:nth-child(5) {
			display: none;
		}

		#menu-button {
			display: flex;
		}
	}
</style>
