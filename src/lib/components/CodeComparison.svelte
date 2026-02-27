<script lang="ts">
	import Window from './Window.svelte';
	import Code from './Code.svelte';
	import { slide } from 'svelte/transition';

	let { class: className = '', source, output, ...props } = $props();

	let showVanilla = $state();
</script>

<div class={`w-full space-y-6 ${className}`} {...props}>
	{#each source as window}
		<Window title={window.title}>
			<Code>{window.code}</Code>
		</Window>
	{/each}
	{#if showVanilla}
		<div class="space-y-2" transition:slide>
			{#each output as window}
				<Window title={window.title}>
					<Code>{window.code}</Code>
				</Window>
			{/each}
		</div>
	{/if}
	<button
		class="flex items-center gap-1 md:gap-2 mx-auto px-3 md:px-4 py-1 md:py-2 w-fit cursor-pointer"
		onclick={() => (showVanilla = !showVanilla)}
	>
		{showVanilla ? 'Hide Vanilla Version' : 'Show Vanilla Version'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1024"
			height="1024"
			viewBox="0 0 1024 1024"
			class={`size-4 transition ${showVanilla ? 'rotate-180' : 'rotate-0'}`}
		>
			<path
				fill="currentColor"
				d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
			/>
		</svg>
	</button>
</div>
