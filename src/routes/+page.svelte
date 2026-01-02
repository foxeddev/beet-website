<script lang="ts">
	import { fly } from 'svelte/transition';
	import logo from '$lib/assets/beet.png';

	let copied = false;

	function handleCopy() {
		navigator.clipboard.writeText('pip install beet');
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 5000);
	}

	import { onMount, tick } from 'svelte';

	let el: HTMLPreElement;
	let visible = false;
	let output = '';

	const text = `$ beet build

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

	async function typewriter() {
		for (const char of text) {
			const stickToBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 25;

			output += char;

			if (stickToBottom) {
				await tick();
				window.scrollTo(0, document.body.scrollHeight);
			}

			await new Promise((r) =>
				setTimeout(r, char == '\n' ? Math.random() * 200 : Math.random() * 100)
			);
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !visible) {
					visible = true;
					observer.disconnect();
					typewriter();
				}
			},
			{ threshold: 0.3 }
		);

		observer.observe(el);
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
			<div class="flex bg-background">
				<p
					class="absolute py-3 md:py-4 pl-4 md:pl-8 outline-0 font-mono text-foreground text-md md:text-2xl pointer-events-none select-none"
				>
					$
				</p>
				<input
					type="text"
					value="pip install beet"
					readonly
					class="py-3 md:py-4 pl-8 md:pl-16 outline-0 font-mono text-foreground text-md md:text-2xl"
				/>
				<button
					class="relative bg-primary size-12 md:size-16 overflow-hidden font-sans text-foreground text-2xl hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 duration-75 cursor-pointer"
					onclick={handleCopy}
					title="Copy"
				>
					{#if !copied}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="top-3 md:top-4 left-3 md:left-4 absolute size-6 md:size-8"
							transition:fly={{ y: '100%' }}
						>
							<g fill="none" stroke="currentColor" stroke-width="1.5">
								<path
									d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"
								/>
								<path
									d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h4a3 3 0 0 1 3 3"
								/>
							</g>
						</svg>
					{/if}
					{#if copied}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="top-3 md:top-4 left-3 md:left-4 absolute size-6 md:size-8"
							transition:fly={{ y: '-100%' }}
						>
							<path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="m7 12.9l3.143 3.6L18 7.5"
							/>
						</svg>
					{/if}
				</button>
			</div>
			<a
				class="flex justify-center items-center gap-1 md:gap-2 bg-accent px-4 md:px-8 py-3 md:py-4 font-sans text-foreground text-md md:text-2xl text-center hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 duration-75 cursor-pointer"
				href="https://mcbeet.dev/"
			>
				Docs
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 14 14"
					class="size-4 md:size-6"
				>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M2 1.625A.375.375 0 0 0 1.625 2v10c0 .207.168.375.375.375h10a.375.375 0 0 0 .375-.375V8a.625.625 0 1 1 1.25 0v4c0 .898-.727 1.625-1.625 1.625H2A1.625 1.625 0 0 1 .375 12V2C.375 1.103 1.103.375 2 .375h4a.625.625 0 1 1 0 1.25zM8.375 1c0-.345.28-.625.625-.625h4c.345 0 .625.28.625.625v4a.625.625 0 1 1-1.25 0V2.509L7.442 7.442a.625.625 0 1 1-.884-.884l4.933-4.933H9A.625.625 0 0 1 8.375 1"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>

		<img
			src={logo}
			alt="Beet logo"
			class="bottom-0 left-1/2 absolute drop-shadow-2xl drop-shadow-primary/25 h-1/3 -translate-x-1/2"
		/>
	</header>
	<footer class="space-y-8 md:space-y-20 p-8 md:p-12 xl:p-20">
		<div class="m-auto max-w-3xl">
			<div class="flex gap-3 bg-gray-900/50 p-3 w-full">
				<div class="bg-red-500 rounded-full size-4"></div>
				<div class="bg-yellow-400 rounded-full size-4"></div>
				<div class="bg-green-400 rounded-full size-4"></div>
			</div>
			<pre
				class="bg-background/50 p-8 font-mono text-foreground text-md leading-snug"
				bind:this={el}>{output}</pre>
		</div>
	</footer>
</div>
