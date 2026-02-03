<script lang="ts">
	import for_loop_beet from '$lib/content/code_examples/for_loop/beet.mcfunction?raw';
	import for_loop_vanilla from '$lib/content/code_examples/for_loop/vanilla.mcfunction?raw';
	import beet_json from '$lib/content/code_examples/get_started/beet.json?raw';
	import hello_world from '$lib/content/code_examples/get_started/hello_world.mcfunction?raw';
	import GeneratedCodeExample from '$lib/components/GeneratedCodeExample.svelte';
	import Credits from '$lib/components/Credits.svelte';
	import Window from '$lib/components/Window.svelte';
	import Code from '$lib/components/Code.svelte';
	import ConsoleCommand from '$lib/components/ConsoleCommand.svelte';
	import Logo from '$lib/components/Logo.svelte';

	let { data } = $props();
</script>

<div
	id="wrapper"
	class="to-bg-base selection:bg-selection-base bg-radial-[circle_at_50vw_100vh] from-glow to-[80vh] bg-fixed text-text-base"
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
				class="bg-bg-button-base px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 select-none"
				href="#get-started"
			>
				Get Started
			</a>
			<a
				class="bg-bg-button-secondary px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 select-none"
				href="https://mcbeet.dev/"
			>
				Docs
			</a>
		</div>

		<!-- Logo -->

		<Logo />
	</header>
	<main>
		<section class="flex flex-col items-center gap-12 mx-auto my-64 p-4 max-w-prose text-center">
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
		<section class="flex flex-col items-center gap-12 mx-auto my-64 p-4 max-w-prose text-center">
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
		<section
			class="flex flex-col items-center gap-12 mx-auto my-64 p-4 max-w-prose text-center"
			id="get-started"
		>
			<h2 class="text-5xl md:text-7xl xl:text-8xl">
				Get
				<span class="selection:bg-selection-highlight font-bold text-text-highlight">
					Started
				</span>
			</h2>
			<div class="flex flex-col items-center gap-16 w-full">
				<div class="flex flex-col items-center gap-4 w-full">
					<a
						class="bg-bg-button-base px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 select-none"
						href="https://www.python.org/downloads/"
					>
						Download Python
					</a>
					<p>Python is the programming language in which Beet and Beet plugins are written.</p>
				</div>
				<div class="flex flex-col items-center gap-4 w-full">
					<ConsoleCommand command="pip install beet" />
					<p>Run this command in the console to install Beet.</p>
				</div>
				<div class="flex flex-col items-center gap-4 w-full">
					<p>
						To start your project, create a file named
						<code class="bg-bg-code-base"> beet.json</code>
						in the your project folder. This file contains all the configurations for your project.
					</p>
					<Window class="w-full" title="beet.json">
						<Code>
							{beet_json}
						</Code>
					</Window>
					<p>
						This beet configuration file describes a basic data pack which has a name, a
						description, a folder location from where to load the data pack, and finally, where the
						generated result will be produced.
					</p>
				</div>
				<div class="flex flex-col items-center gap-4 w-full">
					<p>
						To test it out, you can create a data pack function inside the
						<code class="bg-bg-code-base">src</code> folder.
					</p>
					<Window class="w-full" title="src/data/example/function/hello_world.mcfunction">
						<Code>
							{hello_world}
						</Code>
					</Window>
				</div>
				<div class="flex flex-col items-center gap-4 w-full">
					<ConsoleCommand command="beet build" />
					<p>
						Run this command in the console to build your data pack. You can check out the result in
						the <code class="bg-bg-code-base">build</code> folder!
					</p>
				</div>
				<div class="flex flex-col items-center gap-4 w-full">
					<p>
						Alternatively, Beet can watch the source files and automatically build the pack when it
						detects changes:
					</p>
					<ConsoleCommand command="beet watch" />
				</div>
				<div class="flex flex-col items-center gap-4 w-full">
					<p>
						You can also also link the output pack to a world in your saves folder with this
						command:
					</p>
					<ConsoleCommand command={'beet link "My World"'} />
					<p>
						If you are using a third-party launcher, you can use a link to your Minecraft world
						instead.
					</p>
				</div>
			</div>
		</section>
	</main>
	<footer class="flex flex-col items-center gap-12 mx-auto p-4 max-w-prose text-center">
		<Credits class="w-full" credits={data.credits} />
	</footer>
</div>
