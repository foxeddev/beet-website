<script lang="ts">
	import type { PageData } from './$types';
	import logo from '$lib/assets/beet.png';
	import Code from '$lib/components/Code.svelte';
	import Typewriter from '$lib/components/Typewriter.svelte';
	import Window from '$lib/components/Window.svelte';
	import for_loop_beet from '$lib/content/code_examples/for_loop/beet.mcfunction?raw';
	import for_loop_vanilla from '$lib/content/code_examples/for_loop/vanilla.mcfunction?raw';
	import GeneratedCodeExample from '$lib/components/GeneratedCodeExample.svelte';

	const { data } = $props<{
		data: PageData;
	}>();

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<div
	id="wrapper"
	class="to-bg-base selection:bg-selection-base bg-radial-[circle_at_50vw_85vh] from-glow to-[80vh] text-text-base"
>
	<header class="space-y-8 md:space-y-20 p-8 md:p-12 xl:p-20 w-full min-h-screen">
		<!-- Title -->

		<div class="text-center">
			<h1 class="md:text-10xl xl:text-11xl text-9xl tracking-wide">
				Meet <span class="selection:bg-selection-highlight font-bold text-text-highlight">Beet</span
				>
			</h1>
			<h2
				class="font-medium text-text-secondary selection:bg-text-secondary-selection text-2xl md:text-3xl xl:text-4xl tracking-wide"
			>
				The Minecraft pack development kit
			</h2>
		</div>

		<!-- Buttons -->

		<div class="flex flex-row flex-wrap justify-center gap-2 md:gap-7">
			<a
				class="bg-bg-button-base selection:bg-transparent! px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 cursor-pointer"
				href="https://mcbeet.dev/getting_started/"
			>
				Get Started
			</a>
			<a
				class="bg-bg-button-secondary selection:bg-transparent! px-6 md:px-8 py-3 md:py-4 md:text-2xl transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 cursor-pointer"
				href="https://mcbeet.dev/"
			>
				Docs
			</a>
		</div>

		<!-- Logo -->

		<img
			src={logo}
			alt="Beet Logo"
			class={`fixed bottom-0 left-1/2 z-10 -translate-x-1/2 drop-shadow-2xl drop-shadow-glow/50 duration-200 ${scrollY < 200 ? 'w-2/3 max-w-96' : 'pointer-events-none w-1/3 max-w-64'}`}
		/>
	</header>
	<main>
		<section class="space-y-8 p-8 md:p-12 xl:p-20 min-h-screen">
			<h2 class="mx-auto max-w-4xl text-5xl md:text-7xl xl:text-8xl text-center">
				Use
				<span class="selection:bg-selection-highlight font-bold text-text-highlight">Python</span>
				directly in your code
			</h2>
			<GeneratedCodeExample
				class="mx-auto w-full max-w-3xl"
				sourceCode={for_loop_beet}
				outputCode={for_loop_vanilla}
			></GeneratedCodeExample>
		</section>
		<section class="space-y-8 p-8 md:p-12 xl:p-20 min-h-screen">
			<h2 class="mx-auto max-w-4xl text-5xl md:text-7xl xl:text-8xl text-center">
				<span class="selection:bg-selection-highlight font-bold text-text-highlight">Nest</span>
				your commands
			</h2>
			<GeneratedCodeExample
				class="mx-auto w-full max-w-3xl"
				sourceCode={for_loop_beet}
				outputCode={for_loop_vanilla}
			></GeneratedCodeExample>
		</section>
	</main>
	<footer class="space-y-8 md:space-y-20 p-8 md:p-12 xl:p-20">
		<Window class="mx-auto max-w-3xl" title="credits.md">
			<Code>
				<Typewriter text={data.credits}></Typewriter>
			</Code>
		</Window>
	</footer>
</div>
