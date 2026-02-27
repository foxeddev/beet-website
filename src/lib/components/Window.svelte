<script lang="ts">
	let {
		class: className = '',
		children = null,
		title = '',
		highlighted = false,
		...props
	} = $props();
</script>

<div class={`w-full ${className}`} {...props}>
	<nav class="flex items-center gap-5 bg-bg-secondary p-2.5 w-full">
		<div class="flex gap-2">
			<div class="bg-red-500 rounded-full size-4"></div>
			<div class="bg-yellow-400 rounded-full size-4"></div>
			<div class="bg-green-400 rounded-full size-4"></div>
		</div>
		<p class="overflow-auto">
			{title}
		</p>
	</nav>
	{@render children()}
</div>
