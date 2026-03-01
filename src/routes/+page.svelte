<script lang="ts">
	import logo from '$lib/assets/beet.png';
	import for_loop_beet from '$lib/content/code_examples/for_loop/beet.mcfunction?raw';
	import for_loop_vanilla from '$lib/content/code_examples/for_loop/vanilla.mcfunction?raw';
	import logging_beet from '$lib/content/code_examples/logging/beet.log?raw';
	import logging_vanilla from '$lib/content/code_examples/logging/vanilla.log?raw';
	import nested_commands_beet from '$lib/content/code_examples/nested_commands/beet.mcfunction?raw';
	import nested_commands_vanilla from '$lib/content/code_examples/nested_commands/vanilla.mcfunction?raw';
	import nested_commands_vanilla_nested_execute_0 from '$lib/content/code_examples/nested_commands/vanilla/nested_execute_0.mcfunction?raw';
	import nested_commands_vanilla_nested_execute_1 from '$lib/content/code_examples/nested_commands/vanilla/nested_execute_1.mcfunction?raw';
	import CodeComparison from '$lib/components/CodeComparison.svelte';
	import Credits from '$lib/components/Credits.svelte';

	let { data } = $props();
	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<div
	id="wrapper"
	class="selection:bg-primary bg-radial-[circle_at_50vw_100vh] from-glow to-[80vh] to-bg bg-fixed text-text"
>
	<header class="space-y-8 md:space-y-20 p-8 md:p-12 xl:p-20 w-full min-h-screen">
		<!-- Title -->

		<div class="text-center">
			<h1 class="md:text-10xl xl:text-11xl text-9xl tracking-wide">
				Meet <b class="text-primary selection:text-secondary">Beet</b>
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
				class="bg-primary px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 select-none"
				href="https://mcbeet.dev/quick-start/get-started/"
			>
				Get Started
			</a>
			<a
				class="bg-secondary px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 select-none"
				href="https://mcbeet.dev/"
			>
				Docs
			</a>
		</div>

		<!-- Logo -->

		<img
			src={logo}
			alt="Beet Logo"
			class={`fixed bottom-0 left-1/2 z-10 -translate-x-1/2 drop-shadow-2xl drop-shadow-glow/50 transition-all ${scrollY < 200 ? 'md:h-96 h-48 sm:h-72' : 'pointer-events-none h-32 md:h-48'}`}
		/>
	</header>
	<main>
		<section class="flex flex-col items-center gap-12 mx-auto my-64 p-4 max-w-prose text-center">
			<div class="flex flex-col items-center gap-4">
				<p
					class="bg-primary selection:bg-secondary px-4 py-2 transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1"
				>
					Powered by <b>Bolt</b>
				</p>
				<h2 class="text-5xl md:text-7xl xl:text-8xl">
					<b class="text-primary selection:text-secondary">Python</b> in MCFunction
				</h2>
			</div>
			<p>
				Create reusable variables and use loops directly in your
				<code class="bg-code-bg">.mcfunction</code>-files.
			</p>
			<CodeComparison
				source={[{ title: 'for_loop/beet.mcfunction', code: for_loop_beet }]}
				output={[{ title: 'for_loop/vanilla.mcfunction', code: for_loop_vanilla }]}
			/>
		</section>
		<section class="flex flex-col items-center gap-12 mx-auto my-64 p-4 max-w-prose text-center">
			<div class="flex flex-col items-center gap-4">
				<p
					class="bg-primary selection:bg-secondary px-4 py-2 transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1"
				>
					Powered by <b>Mecha</b>
				</p>
				<h2 class="text-5xl md:text-7xl xl:text-8xl">
					Check for
					<b class="text-primary selection:text-secondary">Errors</b>
				</h2>
			</div>
			<p>
				Beet can show errors in your functions without you even having to start Minecraft - clear,
				readable and not buried in a huge log file. And it can even show you some stats!
			</p>
			<CodeComparison
				source={[{ title: 'logging/beet.log', code: logging_beet }]}
				output={[{ title: 'logging/vanilla.log', code: logging_vanilla }]}
			/>
		</section>
		<section class="flex flex-col items-center gap-12 mx-auto my-64 p-4 max-w-prose text-center">
			<div class="flex flex-col items-center gap-4">
				<p
					class="bg-primary selection:bg-secondary px-4 py-2 transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1"
				>
					Powered by <b>Bolt</b>
				</p>
				<h2 class="text-5xl md:text-7xl xl:text-8xl">
					<b class="text-primary selection:text-secondary">Nested</b>
					Commands
				</h2>
			</div>
			<p>
				Stack <code class="bg-code-bg">/execute</code>-commands or define custom functions in a
				single file - Beet generates the function files for you.
			</p>
			<CodeComparison
				source={[{ title: 'nested_commands/beet.mcfunction', code: nested_commands_beet }]}
				output={[
					{ title: 'nested_commands/vanilla.mcfunction', code: nested_commands_vanilla },
					{
						title: 'nested_commands/vanilla/nested_execute_0.mcfunction',
						code: nested_commands_vanilla_nested_execute_0
					},
					{
						title: 'nested_commands/vanilla/nested_execute_1.mcfunction',
						code: nested_commands_vanilla_nested_execute_1
					}
				]}
			/>
		</section>
	</main>
	<footer class="flex flex-col items-center gap-12 mx-auto p-4 max-w-prose text-center">
		<Credits credits={data.credits} />
	</footer>
</div>
