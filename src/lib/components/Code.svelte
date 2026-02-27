<script lang="ts">
	let { children = null, class: className = '', ...props } = $props();
</script>

<pre
	class={`text-md overflow-auto bg-code-bg p-4 text-left font-mono leading-snug md:p-6 ${className}`}
	{...props}>{@render children()}</pre>
