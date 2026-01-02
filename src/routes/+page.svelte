<script lang="ts">
	import logo from '$lib/assets/beet.png';
	import { onMount } from 'svelte';
	import Typewriter from '$lib/components/Typewriter.svelte';

	let consoleComponent: HTMLElement;
	let consoleVisible = false;
	const consoleText = `$ beet build

Building project...

Maintainers:
* vberlier
* rx
* edayot
* misode

Contributors:
* ritikshah
* MichaelBrunn3r
* TheNuclearNexus
* Tracktark
* Newtbytes
* and more!

Website:
* FoxedDev

Done!`;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !consoleVisible) {
					consoleVisible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0 }
		);

		observer.observe(consoleComponent);
	});
</script>

<div
	id="body"
	class="selection:bg-primary bg-radial-[at_50vw_85vh] from-accent to-75% to-background"
>
	<header class="space-y-8 md:space-y-20 p-8 md:p-12 xl:p-20 w-full h-screen">
		<div>
			<h1
				class="text-foreground xl:text-[12rem] text-9xl text-center leading-30 md:leading-none tracking-wider"
			>
				Meet <span class="font-bold text-primary selection:text-accent">Beet</span>
			</h1>
			<h2 class="font-medium text-secondary text-2xl md:text-4xl text-center tracking-wider">
				The Minecraft pack development kit
			</h2>
		</div>

		<div class="flex md:flex-row flex-col justify-center gap-2 md:gap-8 m-auto w-fit">
			<a
				class="flex justify-center items-center gap-1 md:gap-2 bg-primary px-4 md:px-8 py-3 md:py-4 font-sans text-foreground text-md md:text-2xl text-center hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 duration-75 cursor-pointer"
				href="https://mcbeet.dev/getting_started/"
			>
				Get Started
			</a>
			<a
				class="flex justify-center items-center gap-1 md:gap-2 bg-accent px-4 md:px-8 py-3 md:py-4 font-sans text-foreground text-md md:text-2xl text-center hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 duration-75 cursor-pointer"
				href="https://mcbeet.dev/"
			>
				Docs
			</a>
		</div>

		<img
			src={logo}
			alt="Beet logo"
			class="bottom-0 left-1/2 absolute drop-shadow-2xl drop-shadow-primary/25 h-1/3 -translate-x-1/2"
		/>
	</header>
	<footer class="space-y-8 md:space-y-20 p-8 md:p-12 xl:p-20">
		<div
			class="m-auto max-w-3xl"
			bind:this={consoleComponent}
		>
			<div class="flex gap-3 bg-gray-900/50 p-3 w-full">
				<div class="bg-red-500 rounded-full size-4"></div>
				<div class="bg-yellow-400 rounded-full size-4"></div>
				<div class="bg-green-400 rounded-full size-4"></div>
			</div>
			{#if consoleVisible}
				<Typewriter
					class="bg-background/50 p-8 font-mono text-foreground text-md leading-snug"
					text={consoleText}
				></Typewriter>
			{/if}
		</div>
	</footer>
</div>
