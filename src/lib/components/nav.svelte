<script>
    import { goto } from "$app/navigation";
    const { selected } = $props();
</script>

<div class="h-20 bg-zinc-800 flex justify-center w-full p-5 text-zinc-800 text-lg">
    <div class="grid grid-cols-3 gap-x-0.5 justify-self-center">
        <button onclick={() => {goto("/")}} class="py-2 px-4 rounded-l-md {selected === "home" ? "bg-zinc-400" : "bg-zinc-500 hover:bg-zinc-400"}">home</button>
        <button onclick={() => {goto("/flashcards")}} class="py-2 px-4 {selected === "cards" ? "bg-zinc-400" : "bg-zinc-500 hover:bg-zinc-400"}">cards</button>
        <button onclick={() => {goto("/piano")}} class="py-2 px-4 rounded-r-md {selected === "piano" ? "bg-zinc-400" : "bg-zinc-500 hover:bg-zinc-400"}">piano</button>
    </div>
</div>