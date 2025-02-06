<script>
    const { data } = $props();
</script>


<ul class="w-80 pt-20 m-auto">
    {#each data.sets as { name, slug }}
        <li class="mb-5">
            <a class="p-2 text-center bg-slate-300 rounded-lg" href="/flashcards/{slug}">{name}</a>
        </li>
    {/each}
</ul>
