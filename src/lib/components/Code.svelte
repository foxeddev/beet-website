<script lang="ts">
	let { children, ...props } = $props();
</script>

<pre
	{...props}
	class="bg-background/50 p-8 w-full overflow-scroll font-mono text-foreground text-md leading-snug">{@render children?.()}</pre>
