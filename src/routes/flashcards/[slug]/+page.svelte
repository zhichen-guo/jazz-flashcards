<script>
    import shuffle_cards from "$lib/utils.js";
    import { Tween } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { fly, scale } from "svelte/transition";
    import { Piano } from "svelte-piano";
    const { data } = $props();
    let shuffled = $state(false);
    let reversed = $state(false);
    let index = $state(0);
    let cards = $state(data.set.cards);
    let card = $derived(cards[index]);
    let flipped = $state(false);
    let translate_in = -200;

    // Initialize images object
    let images = $state({});

    // Load images when component mounts
    $effect(() => {
        if (data.set.media) {
            data.set.media.forEach(async (name) => {
                images[name] = await get_image_url(data.set.slug, name);
            });
        }
    });

    // Add this function to handle image imports
    async function get_image_url(slug, filename) {
        try {
            const module = await import(`../../../lib/assets/${slug}/${filename}.avif`);
            return module.default;
        } catch (error) {
            console.error('Error loading image:', error);
            return ''; // or a default image URL
        }
    }

    // Modify the card_face snippet to use the loaded images
    function get_card_content(face) {
        if (face.type === 'image') {
            return images[face.content] || ''; // Use the loaded image URL or fallback
        }
        return face.content;
    }

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

    const KEY_ACTIONS = {
        90: () => change_card("backward"),  // Z key
        88: () => change_card("forward"),   // C key
        83: () => flipped = !flipped        // S key
    };

    function onkeydown(event) {
        const action = KEY_ACTIONS[event.keyCode];
        if (action) action();
    } 

    function change_set() {
        const cardSet = reversed ? data.set.reversed : data.set.cards;
        cards = shuffled ? shuffle_cards(cardSet) : cardSet;
        
        flipped = false;
        index = 0;
        progress.target = 0;
    }

    function shuffle() {
        shuffled = !shuffled;
        change_set();
    }

    function reverse() {
        reversed = !reversed;
        change_set();
    }
</script>

{#snippet card_face(face)}
    {#if face.type == "text"}
        <p>{face.content}</p>
    {:else if face.type == "image"}
        <img class="h-full w-full object-contain" alt={face.alt} src={get_card_content(face)} />
    {/if}
{/snippet}

<h1 class="text-3xl font-bold text-center pt-8 pb-5">{data.set.name}</h1>
<div class="flex items-center justify-center gap-x-5">
    <button onclick={(event) => {event.target.blur(); change_card("backward")}} class="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        &#8592; <span class="opacity-75">(Z)</span>
    </button>
    <div>
        <div class="relative h-60 w-96" onclick={(event) => {event.target.blur(); flipped = !flipped;}}>
            {#key [shuffled, reversed]}
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

        <div class="grid grid-cols-12 gap-x-3 pt-3 w-96">
            <p class="col-span-12 text-center text-gray-500 mb-3">click on the card or use (S) to flip the card</p>
            <div class="col-span-2 text-center">
                <p>{index + 1} / {data.set.size}</p>
            </div>
            <div class="col-span-7">
                <progress class="w-full h-3 rounded" max={data.set.size - 1} value={progress.current}></progress>
            </div>
            <div class="col-span-3 text-left">
                <input type="checkbox" name="shuffle" checked={shuffled} onclick={(event) => {event.target.blur(); shuffle()}}/>
                <label for="shuffle">Shuffle</label>
            </div>
            <div class="col-span-3 col-start-10 text-left">
                <input type="checkbox" name="reverse" checked={reversed} onclick={(event) => {event.target.blur(); reverse()}}/>
                <label for="reverse">Reverse</label>
            </div>
        </div>
    </div>
    <button onclick={(event) => {event.target.blur(); change_card("forward")}} class="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <span class="opacity-75">(X)</span> &#8594;
    </button>
</div>

<div class="flex justify-center">
	<Piano --height="310px" --width="794px"/>
</div>

<div class="w-full text-center text-slate-400">
    Thank you for using this app :). Would you consider leaving some feedback, flashcard requests, or appreciation <a class="text-blue-500" href="https://forms.gle/T2mR5cFaqhfhyNYZ9">in this short from</a>?
</div>

<svelte:window {onkeydown} />
