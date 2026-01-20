<script lang="ts">
	let { children = null, class: className = "", title = '', highlighted = false, ...props } = $props();
</script>

<div {...props} class={`bg-gray-900/50 ${className}`}>
	<div class={`flex w-full items-center gap-5 p-2.5 ${highlighted ? 'bg-primary' : 'bg-gray-900'}`}>
		<div class={'flex gap-2'}>
			<div
				class="bg-red-500 shadow shadow-gray-900 rounded-full size-4 hover:scale-120 transition"
			></div>
			<div
				class="bg-yellow-400 shadow shadow-gray-900 rounded-full size-4 hover:scale-120 transition"
			></div>
			<div
				class="bg-green-400 shadow shadow-gray-900 rounded-full size-4 hover:scale-120 transition"
			></div>
		</div>
		<p class={`text-foreground ${highlighted ? 'selection:bg-accent!' : ''}`}>{title}</p>
	</div>
	{@render children?.()}
</div>
