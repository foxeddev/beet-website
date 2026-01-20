<script lang="ts">
	let { children = null, class: className = '', ...props } = $props();
</script>

<pre
	{...props}
	class={`text-md w-full overflow-scroll bg-background/50 md:p-8 p-4 font-mono leading-snug text-foreground ${className}`}>{@render children?.()}</pre>
