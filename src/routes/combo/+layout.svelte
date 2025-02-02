<script>
    import Nav from "$lib/components/nav.svelte";
    let { children } = $props();
</script>

<div class="h-full">
    <Nav selected="combo" />

    <div>
        {@render children()}
    </div>
</div>