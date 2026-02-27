<script lang="ts">
	import { fly } from 'svelte/transition';

	let { class: className = '', command, ...props } = $props();

	let copied = $state(false);
</script>

<div class="relative flex bg-code-bg w-fit">
	<span
		class="top-0 left-0 absolute px-6 md:px-8 py-3 md:py-4 font-mono text-lg md:text-2xl pointer-events-none select-none"
	>
		$
	</span>
	<p class="py-3 md:py-4 pr-6 md:pr-8 pl-12 md:pl-16 font-mono text-lg md:text-2xl">
		{command}
	</p>
	<button
		class="bg-primary px-3 md:px-4 transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 cursor-pointer"
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
					class="top-0 left-0 absolute size-8 align-bottom icon-[memory--check]"
				></div>
			{:else}
				<div
					transition:fly={{ y: '-100%' }}
					class="top-0 left-0 absolute size-8 align-bottom icon-[memory--clipboard]"
				></div>
			{/if}
		</div>
	</button>
</div>
