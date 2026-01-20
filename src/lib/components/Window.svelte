<script lang="ts">
	let {
		children = null,
		class: className = '',
		title = '',
		highlighted = false,
		...props
	} = $props();
</script>

<div {...props} class={`bg-gray-900/50 ${className}`}>
	<div class={`flex w-full items-center gap-5 p-2.5 ${highlighted ? 'bg-primary' : 'bg-gray-900'}`}>
		<div class="flex gap-2">
			<div
				class={`size-4 rounded-full bg-red-500 ${highlighted ? 'ring-5 ring-gray-900' : ''}`}
			></div>
			<div
				class={`size-4 rounded-full bg-yellow-400 ${highlighted ? 'ring-5 ring-gray-900' : ''}`}
			></div>
			<div
				class={`size-4 rounded-full bg-green-400 ${highlighted ? 'ring-5 ring-gray-900' : ''}`}
			></div>
		</div>
		<p class={`text-foreground ${highlighted ? 'selection:bg-accent!' : ''}`}>{title}</p>
	</div>
	{@render children?.()}
</div>
