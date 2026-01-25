<script lang="ts">
	import Window from './Window.svelte';
	import Code from './Code.svelte';
	import { slide } from 'svelte/transition';

	let { class: className = '', sourceCode, outputCode, ...props } = $props();

	let showResult = $state();
</script>

<div class={`flex flex-col gap-4  ${className}`} {...props}>
	<Window title="for_loop.mcfunction">
		<Code>{sourceCode}</Code>
		{#if showResult}
			<div transition:slide>
				<Code type="secondary">{outputCode}</Code>
			</div>
		{/if}
	</Window>
	<button
		class="flex items-center gap-1 md:gap-2 mx-auto px-3 md:px-4 py-1 md:py-2 w-fit cursor-pointer"
		onclick={() => (showResult = !showResult)}
	>
		{showResult ? 'Hide Result' : 'Show Result'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1024"
			height="1024"
			viewBox="0 0 1024 1024"
			class={`size-4 transition ${showResult ? 'rotate-180' : 'rotate-0'}`}
		>
			<path
				fill="currentColor"
				d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
			/>
		</svg>
	</button>
</div>
