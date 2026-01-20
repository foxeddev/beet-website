<script lang="ts">
	let { children = null, class: className = '', ...props } = $props();
</script>

<pre
	{...props}
	class={`text-md w-full overflow-scroll bg-background/50 p-8 font-mono leading-snug text-foreground ${className}`}>{@render children?.()}</pre>
