<script>
    import { each } from "svelte/internal";
    export let data
</script>

 <pre></pre> 


<svelte:head>
    <title>About | SpaceX Explorers</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
    {#each data.allLaunches.launches as {slug, name, date}}
    <li>
        <a href={`mission/${slug}`}>
            <h2>{name}</h2>
            <time>{date}</time>
        </a>
    </li>
    {/each}
</ul>