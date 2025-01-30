<script>
    const { data } = $props();
</script>

<ul>
    {#each data.sets as { name, slug }}
        <li>
            <a href="/flashcards/{slug}">{name}</a>
        </li>
    {/each}
</ul>
