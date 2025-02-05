<script>
    import { goto } from "$app/navigation";
    const { selected } = $props();
</script>

<div class="h-20 bg-zinc-800 grid grid-cols-3 justify-center w-full p-5 text-zinc-800 text-lg">
    <div>
        <button onclick={() => {goto("/")}} class="py-2 px-4 rounded-md bg-zinc-500 hover:bg-zinc-400">&#8592; home</button>
    </div>
    <div class="grid grid-cols-2 gap-x-0.5 justify-self-center">
        <button onclick={() => {goto("/flashcards")}} class="py-2 px-4 rounded-l-md {selected === "cards" ? "bg-orange-400" : "bg-zinc-500 hover:bg-zinc-400"}">cards</button>
        <button onclick={() => {goto("/piano")}} class="py-2 px-4 rounded-r-md {selected === "piano" ? "bg-orange-400" : "bg-zinc-500 hover:bg-zinc-400"}">piano</button>
    </div>
</div>