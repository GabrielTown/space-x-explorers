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

 <pre>{JSON.stringify(data.theMission.mission, null, 2)}</pre> 

<article>
    <h1>{name}</h1>
    <time>{date}</time>
    {#if launchSuccess}
        <p>Launched Successfully</p>
    {:else}
        <p>Launch Failed</p>
    {/if}    
    <p><strong>Launch Site: </strong>{launchSite.longName}</p>
    <section>
        <h2>Links:</h2>
        <ul>
            {#if link.articleLink}
                <li>
                    <a href={link.articleLink}>Article</a>
                </li>
            {/if}
            {#if link.pressKit}
                <li>
                    <a href={link.pressKit}>Press Kit</a>
                </li>
            {/if}
            {#if link.videoLink}
                <li>
                    <a href={link.videoLink}>Video Link</a>
                </li>
            {/if}
            {#if link.wikipedia}
                <li>
                    <a href={link.wikipedia}>Wikipedia</a>
                </li>
            {/if}
        </ul>
        {#if link.flickrImages.length > 0}
            <h3>Flickr Images:</h3>
            {#each link.flickrImages as image}
                <br>
                <img src={image.url} alt={image.alt}>
            {/each}
        {/if}
    </section>
    <h3>
        Rocket Name: {rocket.name}, Type: {rocket.type}
    </h3>
    <img src={rocket.image.url} alt={rocket.name}>
</article>