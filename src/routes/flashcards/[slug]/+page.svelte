<script>
    import shuffle_cards from "./utils.js";
    import { Tween } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { fly, scale } from "svelte/transition";
    const { data } = $props();
    let shuffled = $state(false);
    let index = $state(0);
    let cards = $state(data.set.cards);
    let card = $derived(cards[index]);
    let flipped = $state(false);
    let translate_in = -200;

    let progress = new Tween(0, {
        easing: cubicOut
    });

    function change_card(direction) {
        if (direction == "forward") {
            translate_in = -200;
            index = (index + 1) % data.set.size; 
        } else if (direction == "backward") {
            translate_in = 200;
            index = (index  + data.set.size - 1) % data.set.size; 
        }
        flipped = false;
        progress.target = index;
    }

    function onkeydown(event) {
        switch(event.keyCode) {
            case 37:
                change_card("backward")
                break;
            case 39:
                change_card("forward")
                break;
            case 32:
                flipped = !flipped;
                break;
        }
    }    

    function shuffle() {
        cards = shuffled ? data.set.cards : shuffle_cards(data.set.cards);
        shuffled = !shuffled;
        flipped = false;
        index = 0;
        progress.target = 0;
    }
</script>

{#snippet card_face(face)}
    {#if face.type == "text"}
        <p>{face.content}</p>
    {:else if face.type == "image"}
        <img class="h-full w-full object-contain" alt={face.alt} src={face.content} />
    {/if}
{/snippet}

<h1 class="text-3xl font-bold text-center pt-8 pb-10">{data.set.name}</h1>
<div class="flex items-center justify-center py-8">
    <div>
        <div class="relative h-60 w-96">
            {#key shuffled}
                <div in:scale={{ start: 0.3, opacity: 0.1 }} out:scale={{ start: 0.3, opacity: 0.1 }}>
                {#key card}
                    <div class="absolute top-0" role="switch" in:fly={{ x: -translate_in }} out:fly={{ x: translate_in }}>
                        <div class="h-60 w-96 [perspective:1000px]">
                            <div class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] {flipped ? '[transform:rotateX(180deg)]' : ''}">
                                <div class="absolute w-full h-full rounded-xl bg-white border-4 border-gray-200 [backface-visibility:hidden]">
                                    <div class="h-full flex items-center justify-center">
                                        {@render card_face(card.front)}
                                    </div>
                                </div>
                                <div class="absolute w-full h-full rounded-xl bg-gray-100 border-4 border-gray-200 [backface-visibility:hidden] [transform:rotateX(-180deg)]">
                                    <div class="h-full flex items-center justify-center">
                                        {@render card_face(card.back)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/key}
                </div>
            {/key}
        </div>

        <div class="grid grid-cols-5 gap-3 pt-3 w-96">
            <div class="text-center">
                <p>{index + 1} / {data.set.size}</p>
            </div>
            <div class="col-span-4">
                <progress class="w-full h-3 rounded" max={data.set.size - 1} value={progress.current}/>
            </div>

            <button onclick={(event) => {event.target.blur(); change_card("backward")}} class="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                &#8592;
            </button>
            <button onclick={(event) => {event.target.blur(); flipped = !flipped}} class="col-span-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <p>{ flipped ? "hide" : "show" } answer <span class="opacity-75">(space)</span></p>
            </button>
            <button onclick={(event) => {event.target.blur(); change_card("forward")}} class="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                &#8594;
            </button>
        
            <div class="col-end-6 col-span-2 text-right">
                <input type="checkbox" name="shuffle" checked={shuffled} onclick={(event) => {event.target.blur(); shuffle()}}/>
                <label for="shuffle">Shuffle</label>
            </div>
        </div>
    </div>
</div>

<svelte:window {onkeydown} />
