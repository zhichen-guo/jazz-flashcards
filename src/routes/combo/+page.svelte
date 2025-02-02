<script>
    const { data } = $props();
</script>


<ul class="w-40 mt-10 m-auto">
    {#each data.sets as { name, slug }}
        <li>
            <a href="/combo/{slug}">{name}</a>
        </li>
    {/each}
</ul>
