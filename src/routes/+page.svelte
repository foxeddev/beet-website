<script lang="ts">
	import { fly } from 'svelte/transition';
	import logo from '$lib/assets/beet.png';

	let copied = false;

	function copy(text: string) {
		navigator.clipboard.writeText(text);
	}

	function handleCopy() {
		copy('pip install beet');
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 5000);
	}
</script>

<div
	class="space-y-20 selection:bg-primary bg-radial-[at_50%_90%] from-accent to-75% to-background p-24 w-full min-h-screen"
>
	<div>
		<h1 class="text-[12rem] text-foreground text-center leading-none tracking-wider">
			Meet <span class="font-bold text-primary selection:text-accent">Beet</span>
		</h1>
		<h2 class="font-medium text-secondary text-5xl text-center tracking-wider">
			The Minecraft pack development kit
		</h2>
	</div>

	<div class="flex justify-center gap-8">
		<div class="flex bg-background">
			<p
				class="absolute px-8 py-4 outline-0 font-mono text-foreground text-2xl pointer-events-none select-none"
			>
				$
			</p>
			<input
				type="text"
				value="pip install beet"
				readonly
				class="py-4 pl-16 outline-0 font-mono text-foreground text-2xl"
			/>
			<button
				class="relative bg-primary size-16 overflow-hidden font-sans text-foreground text-2xl hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 duration-75 cursor-pointer"
				onclick={handleCopy}
				title="Copy"
			>
				{#if !copied}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="top-4 left-4 absolute size-8"
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
						class="top-4 left-4 absolute size-8"
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
			class="bg-accent px-8 py-4 overflow-hidden font-sans text-foreground text-2xl hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 duration-75 cursor-pointer"
			href="https://mcbeet.dev/"
		>
			Docs
		</a>
	</div>

	<img src={logo} alt="" class="bottom-0 left-1/2 fixed size-96 -translate-x-1/2" />
</div>
