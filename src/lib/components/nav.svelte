<script>
    import { goto } from "$app/navigation";
    const { selected } = $props();
</script>

<div class="h-20 bg-zinc-800 grid grid-cols-3 p-5 text-zinc-800 text-lg border-b-2 border-zinc-700">
    <div class="grid grid-cols-3 gap-x-0.5 col-start-2 justify-self-center">
        <button onclick={() => {goto("/flashcards")}} class="py-2 px-4 rounded-l-md {selected === "cards" ? "bg-zinc-400" : "bg-zinc-500 hover:bg-zinc-400"}">cards</button>
        <button onclick={() => {goto("/combo")}} class="py-2 px-4 {selected === "combo" ? "bg-zinc-400" : "bg-zinc-500 hover:bg-zinc-400"}">combo</button>
        <button onclick={() => {goto("/piano")}} class="py-2 px-4 rounded-r-md {selected === "piano" ? "bg-zinc-400" : "bg-zinc-500 hover:bg-zinc-400"}">piano</button>
    </div>
</div>