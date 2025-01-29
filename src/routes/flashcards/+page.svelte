<script>
    const { data } = $props();
</script>

<h1 class="text-3xl font-bold text-center pt-8 pb-10">Sets</h1>
<div class="flex flex-wrap justify-around gap-10 px-10">
    {#each data.sets as { name, slug }}
        <a class="h-56 max-w-md min-w-96 basis-1/4 relative" href="/flashcards/{slug}">
            <div class="absolute h-full w-full bg-gray-100 rounded-lg drop-shadow-md z-30">
                <h1 class="h-full flex items-center justify-center z-30">{name}</h1>
            </div>
            <div class="absolute h-full w-full bg-gray-100 rounded-lg drop-shadow-md z-20 left-2 top-2"></div>
            <div class="absolute h-full w-full bg-gray-100 rounded-lg drop-shadow-md z-10 left-4 top-4"></div>
        </a>
    {/each}
</div>