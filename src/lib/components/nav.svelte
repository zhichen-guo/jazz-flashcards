<script>
    import { goto } from "$app/navigation";
    const { selected, show_back_button } = $props();

    function onclick() {
        if (selected === "cards") {
            goto("/flashcards");
        } else if (selected === "combo") {
            goto("/combo");
        }
    }
</script>

<div class="h-20 bg-zinc-800 grid grid-cols-3 p-5 text-zinc-800 text-lg border-b-2 border-zinc-700">
    {#if show_back_button}
        <div class="justify-self-left">
            <button {onclick} class="bg-zinc-500 py-2 px-4 rounded-md hover:bg-zinc-400">
                &#8592; back
            </button>
        </div>
    {/if}
    <div class="grid grid-cols-3 gap-x-0.5 col-start-2 justify-self-center">
        <button onclick={() => {goto("/flashcards")}} class="py-2 px-4 rounded-l-md {selected === "cards" ? "bg-zinc-400" : "bg-zinc-500 hover:bg-zinc-400"}">cards</button>
        <button onclick={() => {goto("/combo")}} class="py-2 px-4 {selected === "combo" ? "bg-zinc-400" : "bg-zinc-500 hover:bg-zinc-400"}">combo</button>
        <button onclick={() => {goto("/piano")}} class="py-2 px-4 rounded-r-md {selected === "piano" ? "bg-zinc-400" : "bg-zinc-500 hover:bg-zinc-400"}">piano</button>
    </div>
</div>