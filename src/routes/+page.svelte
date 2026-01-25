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
	class="to-bg-base selection:bg-selection-base bg-radial-[circle_at_50vw_85vh] from-glow to-[80vh] bg-fixed text-text-base"
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
				class="bg-bg-button-secondary selection:bg-transparent! px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 cursor-pointer"
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
		<section
			class="flex flex-col items-center gap-12 mx-auto p-4 max-w-prose min-h-screen text-center"
		>
			<div class="flex flex-col items-center gap-4">
				<p
					class="bg-bg-button-base selection:bg-selection-highlight px-4 py-2 transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1"
				>
					Powered by <span class="font-bold">Bolt</span>
				</p>
				<h2 class="text-5xl md:text-7xl xl:text-8xl">
					<span class="selection:bg-selection-highlight font-bold text-text-highlight">Python</span> in
					MCFunction
				</h2>
			</div>
			<p>
				Create reusable variables and use loops directly in your
				<code class="bg-bg-code-base">.mcfunction</code>-files.
			</p>
			<GeneratedCodeExample
				class="w-full"
				title="for_loop.mcfunction"
				sourceCode={for_loop_beet}
				outputCode={for_loop_vanilla}
			/>
		</section>
		<section
			class="flex flex-col items-center gap-12 mx-auto p-4 max-w-prose min-h-screen text-center"
		>
			<div class="flex flex-col items-center gap-4">
				<p
					class="bg-bg-button-base selection:bg-selection-highlight px-4 py-2 transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1"
				>
					Powered by <span class="font-bold">Bolt</span>
				</p>
				<h2 class="text-5xl md:text-7xl xl:text-8xl">
					<span class="selection:bg-selection-highlight font-bold text-text-highlight">Nested</span>
					Commands
				</h2>
			</div>
			<p>
				Stack <code class="bg-bg-code-base">/execute</code>-commands or define custom functions in a
				single file - Beet generates the function files for you.
			</p>
			<GeneratedCodeExample title="TODO" class="w-full" sourceCode="TODO" outputCode="TODO" />
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
