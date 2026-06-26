<script lang="ts">
	let { class: className = '', children = null, title = '', ...props } = $props();
</script>

<div class={`w-full ${className}`} {...props}>
	<nav class="flex w-full items-center gap-5 bg-bg-secondary p-2.5">
		<div class="flex gap-2">
			<div class="size-4 rounded-full bg-red-500"></div>
			<div class="size-4 rounded-full bg-yellow-400"></div>
			<div class="size-4 rounded-full bg-green-400"></div>
		</div>
		<p class="overflow-auto whitespace-nowrap">
			{title}
		</p>
	</nav>
	{@render children()}
</div>
