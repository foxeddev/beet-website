<script lang="ts">
	import type { PageData } from './$types';
	import logo from '$lib/assets/beet.png';
	import Code from '$lib/components/Code.svelte';
	import Typewriter from '$lib/components/Typewriter.svelte';
	import Window from '$lib/components/Window.svelte';
	import for_loop_beet from '$lib/content/code_examples/for_loop/beet.mcfunction?raw';
	import for_loop_vanilla from '$lib/content/code_examples/for_loop/vanilla.mcfunction?raw';
	import { slide } from 'svelte/transition';

	const { data } = $props<{
		data: PageData;
	}>();

	let showResult: boolean = $state(false);
</script>

<div
	id="wrapper"
	class="space-y-32 to-bg-base selection:bg-selection-base bg-radial-[circle_at_50vw_85vh] from-glow to-[80vh] text-text-base"
>
	<header class="space-y-8 md:space-y-20 p-8 md:p-12 xl:p-20 w-full h-screen">
		<div>
			<h1 class="xl:text-[12rem] text-9xl text-center leading-30 md:leading-none tracking-wider">
				Meet <span class="selection:bg-selection-highlight font-bold text-text-highlight">Beet</span
				>
			</h1>
			<h2
				class="font-medium text-text-secondary selection:bg-text-secondary-selection text-2xl md:text-4xl text-center tracking-wider"
			>
				The Minecraft pack development kit
			</h2>
		</div>

		<div class="flex flex-row flex-wrap justify-center gap-2 md:gap-8 m-auto w-fit">
			<a
				class="flex justify-center items-center gap-1 md:gap-2 bg-bg-button-base selection:bg-transparent! px-4 md:px-8 py-3 md:py-4 font-sans text-md md:text-2xl text-center transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 cursor-pointer"
				href="https://mcbeet.dev/getting_started/"
			>
				Get Started
			</a>
			<a
				class="flex justify-center items-center gap-1 md:gap-2 bg-bg-button-secondary selection:bg-transparent! px-4 md:px-8 py-3 md:py-4 font-sans text-md md:text-2xl text-center transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 cursor-pointer"
				href="https://mcbeet.dev/"
			>
				Docs
			</a>
		</div>

		<img
			src={logo}
			alt="Beet logo"
			class="bottom-0 left-1/2 absolute drop-shadow-2xl drop-shadow-glow h-1/3 -translate-x-1/2"
		/>
	</header>
	<main>
		<section class="space-y-16 p-8 md:p-12 xl:p-20 min-h-screen">
			<h2 class="text-5xl md:text-7xl xl:text-8xl text-center">
				Un<span class="selection:bg-selection-highlight font-bold text-text-highlight">beet</span
				>able® Features
			</h2>
			<div class="flex flex-col gap-4 m-auto max-w-3xl">
				<Window title="for_loop.mcfunction">
					<Code>{for_loop_beet}</Code>
					{#if showResult}
						<div transition:slide>
							<Code type="secondary">{for_loop_vanilla}</Code>
						</div>
					{/if}
				</Window>
				<button
					class="flex items-center gap-1 md:gap-2 m-auto px-3 md:px-4 py-1 md:py-2 w-fit cursor-pointer"
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
		</section>
	</main>
	<footer class="space-y-8 md:space-y-20 p-8 md:p-12 xl:p-20">
		<Window class="m-auto max-w-3xl" title="credits.md">
			<Code>
				<Typewriter text={data.credits}></Typewriter>
			</Code>
		</Window>
	</footer>
</div>
