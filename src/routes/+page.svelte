<script lang="ts">
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
	import Logo from '$lib/components/Logo.svelte';

	let { data } = $props();
</script>

<div
	id="wrapper"
	class="bg-radial-[circle_at_50vw_100vh] from-glow to-bg to-[80vh] bg-fixed text-text selection:bg-primary"
>
	<header class="min-h-screen w-full space-y-8 p-8 md:space-y-20 md:p-12 xl:p-20">
		<!-- Title -->

		<div class="text-center">
			<h1 class="text-9xl tracking-wide md:text-10xl xl:text-11xl">
				Meet <b class="text-primary selection:text-secondary">Beet</b>
			</h1>
			<h2
				class="selection:bg-text-secondary-selection text-2xl font-medium tracking-wide text-text-secondary md:text-3xl xl:text-4xl"
			>
				The Minecraft pack development kit
			</h2>
		</div>

		<!-- Buttons -->

		<div class="flex flex-row flex-wrap justify-center gap-2 md:gap-7">
			<a
				class="bg-primary px-6 py-3 text-lg transition select-none hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1 md:px-8 md:py-4 md:text-2xl"
				href="https://mcbeet.dev/quick-start/get-started/"
			>
				Get Started
			</a>
			<a
				class="bg-secondary px-6 py-3 text-lg transition select-none hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1 md:px-8 md:py-4 md:text-2xl"
				href="https://mcbeet.dev/"
			>
				Docs
			</a>
		</div>
		<Logo />
	</header>
	<main>
		<section class="mx-auto my-64 flex max-w-prose flex-col items-center gap-12 p-4 text-center">
			<div class="flex flex-col items-center gap-4">
				<p
					class="bg-primary px-4 py-2 transition selection:bg-secondary hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1"
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
		<section class="mx-auto my-64 flex max-w-prose flex-col items-center gap-12 p-4 text-center">
			<div class="flex flex-col items-center gap-4">
				<p
					class="bg-primary px-4 py-2 transition selection:bg-secondary hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1"
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
		<section class="mx-auto my-64 flex max-w-prose flex-col items-center gap-12 p-4 text-center">
			<div class="flex flex-col items-center gap-4">
				<p
					class="bg-primary px-4 py-2 transition selection:bg-secondary hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1"
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
	<footer class="mx-auto flex max-w-prose flex-col items-center gap-12 p-4 text-center">
		<Credits credits={data.credits} />
	</footer>
</div>
