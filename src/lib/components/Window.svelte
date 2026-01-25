<script lang="ts">
	let { children = null, title = '', highlighted = false, ...props } = $props();
</script>

<div {...props}>
	<nav
		class={`flex w-full items-center gap-5 p-2.5 ${highlighted ? 'bg-bg-highlight selection:bg-selection-highlight!' : 'bg-bg-secondary selection:bg-selection-secondary'}`}
	>
		<div class="flex gap-2">
			<div
				class={`size-4 rounded-full bg-red-500 ${highlighted ? 'ring-5 ring-bg-secondary' : ''}`}
			></div>
			<div
				class={`size-4 rounded-full bg-yellow-400 ${highlighted ? 'ring-5 ring-bg-secondary' : ''}`}
			></div>
			<div
				class={`size-4 rounded-full bg-green-400 ${highlighted ? 'ring-5 ring-bg-secondary' : ''}`}
			></div>
		</div>
		<p class="overflow-auto">
			{title}
		</p>
	</nav>
	{@render children()}
</div>
