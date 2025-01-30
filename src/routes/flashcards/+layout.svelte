<script>
    import Nav from "$lib/components/nav.svelte";
    let { children } = $props();
</script>

<div class="h-full">
    <Nav selected="cards" show_back_button={false} />

    <div>
        {@render children()}
    </div>
</div>