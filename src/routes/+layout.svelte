<script>
	import "../app.css";
	let { children } = $props();
</script>

<div class="h-dvh bg-zinc-100">
	{@render children()}
</div>
