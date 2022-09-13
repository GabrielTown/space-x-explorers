<script>
    export let data
</script>

 <pre></pre> 


<svelte:head>
    <title>SpaceX Explorers</title>
</svelte:head>

<h1 class="text-4xl">SpaceX Explorers</h1>
<p class="text-xl mb-8">Launching your knowledge of rocket launches in to outer space!</p>

<ul>
    {#each data.allLaunches.launches as {slug, name, date}}
    <li class="border-primary border rounded-xl my-5 p-5 transition hover:bg-primary">
        <a href={`mission/${slug}`}>
            <h2 class="text-3xl">{name}</h2>
            <time>{new Date(date)}</time>
        </a>
    </li>
    {/each}
</ul>