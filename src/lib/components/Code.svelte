<script lang="ts">
	let { children = null, class: className = '', type = 'base', ...props } = $props();
</script>

<pre
	class={`text-md overflow-auto p-4 text-left font-mono leading-snug md:p-6 ${type === 'secondary' ? 'bg-bg-code-secondary text-text-code-secondary selection:bg-selection-code-secondary' : 'bg-bg-code-base text-text-code-base selection:bg-selection-code-base'} ${className}`}
	{...props}>{@render children()}</pre>
