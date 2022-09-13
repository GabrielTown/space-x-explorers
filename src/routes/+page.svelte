<script>
    import { each } from "svelte/internal";
    export let data
</script>

 <pre></pre> 


<svelte:head>
    <title>SpaceX Explorers</title>
</svelte:head>

<h1>SpaceX Explorers</h1>
<p>Launching your knowledge of rocket launches in to outer space!</p>

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