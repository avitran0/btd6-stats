<script lang="ts">
    import { fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import towers from "$lib/json/towers.json";
</script>

<svelte:head>
    <title>Towers - BTD6 Stats</title>
</svelte:head>

<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300 }}>
    <h1>Towers</h1>
    <h2>Primary</h2>
    <div class="tower-container">
        {#each towers as data}
            {#if data.category === "primary"}
                <a href={"/towers/" + data.id}>
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
            {#if data.category === "military"}
                <a href={"/towers/" + data.id}>
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
            {#if data.category === "magic"}
                <a href={"/towers/" + data.id}>
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
            {#if data.category === "support"}
                <a href={"/towers/" + data.id}>
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
        color: var(--text);
        transition: var(--transition);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem 0;
        text-align: center;
        border-radius: 0.5rem;
        border: 2px solid var(--text);
        padding: 0.2rem 0.5rem;
        font-family: "Heading", serif;
    }

    a:hover {
        border: 2px solid var(--blue);
    }

	a:hover h3 {
		color: var(--blue);
	}

    img {
        height: 8rem;
        width: 8rem;
        aspect-ratio: 1 / 1;
        object-fit: contain;
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: var(--transition);
        min-width: 5rem;
        min-height: 5rem;
        filter: var(--filter);
    }

    h3 {
        font-size: 1.3rem;
        margin: 0.2rem 0 0;
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
