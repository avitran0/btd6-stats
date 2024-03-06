<script>
    import { fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import heroes from "$lib/json/heroes.json";
</script>

<svelte:head>
    <title>Heroes - BTD6 Stats</title>
</svelte:head>

<main in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300 }}>
    <h1>Heroes</h1>
    <div class="tower-container">
        {#each heroes as data}
            <a href={"/heroes/" + data.id}>
                <img src="/images/{data.id}/lv0.png" alt={data.name} loading="lazy" />
                <h3>{data.name}</h3>
            </a>
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
