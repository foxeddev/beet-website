<script lang="ts">
	import { fly } from 'svelte/transition';

	let { command } = $props();

	let copied = $state(false);
</script>

<div class="relative flex w-fit bg-bg-code-base">
	<span
		class="pointer-events-none absolute top-0 left-0 px-6 py-3 font-mono text-lg select-none md:px-8 md:py-4 md:text-2xl"
	>
		$
	</span>
	<p class="py-3 pr-6 pl-12 font-mono text-lg outline-0 md:py-4 md:pr-8 md:pl-16 md:text-2xl">
		{command}
	</p>
	<button
		class="cursor-pointer bg-bg-button-base px-3 transition hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1 md:px-4"
		onclick={() => {
			navigator.clipboard.writeText(command);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		}}
		title="Copy command"
	>
		<div class="relative size-8 overflow-hidden">
			{#if copied}
				<div
					transition:fly={{ y: '100%' }}
					class="absolute top-0 left-0 icon-[memory--check] size-8 align-bottom"
				></div>
			{:else}
				<div
					transition:fly={{ y: '-100%' }}
					class="absolute top-0 left-0 icon-[memory--clipboard] size-8 align-bottom"
				></div>
			{/if}
		</div>
	</button>
</div>
