<script lang="ts">
	let { children = null, class: className = '', type = 'base', ...props } = $props();
</script>

<pre
	{...props}
	class={`text-md w-full overflow-auto p-4 font-mono leading-snug md:p-8 ${type === 'secondary' ? 'bg-bg-code-secondary text-text-code-secondary selection:bg-selection-code-secondary' : 'bg-bg-code-base text-text-code-base selection:bg-selection-code-base'} ${className}`}>{@render children?.()}</pre>
