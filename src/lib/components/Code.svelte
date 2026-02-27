<script lang="ts">
	let { children = null, class: className = '', type = 'base', ...props } = $props();
</script>

<pre
	class={`text-md overflow-auto p-4 text-left font-mono leading-snug md:p-6 ${type === 'secondary' ? 'bg-code-bg-secondary' : 'bg-code-bg'} ${className}`}
	{...props}>{@render children()}</pre>
