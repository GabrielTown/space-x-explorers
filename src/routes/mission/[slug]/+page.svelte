<script>
    export let data
    const {
        name,
        date,
        launchSuccess,
        launchSite,
        link,
        rocket
    } = data.theMission.mission
</script>

 <!-- <pre>{JSON.stringify(data.theMission.mission, null, 2)}</pre>  -->

<article>
    <h1 class="text-4xl">{name}</h1>
    <time class="text-sm mb-4 block">{date}</time>
    {#if launchSuccess}
        <p class="text-xl mb-2">Launched Successfully</p>
    {:else}
        <p class="text-xl mb-2">Launch Failed</p>
    {/if}    
    <p class="text-xl mb-2"><strong>Launch Site: </strong>{launchSite.longName}</p>
    <section>
        <h2 class="mb-4 text-3xl">Links:</h2>
        <ul class="text-xl mb-8 link">
            {#if link.article}
                <li>
                    <a href={link.article}>Article</a>
                </li>
            {/if}
            {#if link.pressKit}
                <li>
                    <a href={link.pressKit}>Press Kit</a>
                </li>
            {/if}
            {#if link.video}
                <li>
                    <a href={link.video}>Video</a>
                </li>
            {/if}
            {#if link.wikipedia}
                <li>
                    <a href={link.wikipedia}>Wikipedia</a>
                </li>
            {/if}
        </ul>
        {#if link.flickrImages.length > 0}
            <h3 class="text-2xl">Flickr Images:</h3>
            {#each link.flickrImages as image}
                <br>
                <img class="last:mb-8" src={image.url} alt={image.alt}>
            {/each}
        {/if}
    </section>
    <h3 class="mb-4 text-2xl">
        Rocket Name: {rocket.name}, Type: {rocket.type}
    </h3>
    <img src={rocket.image.url} alt={rocket.name}>
</article>