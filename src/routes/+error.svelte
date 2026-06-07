<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Logo from '$lib/components/Logo.svelte';
</script>

<div
	id="wrapper"
	class="min-h-screen w-full space-y-8 bg-radial-[circle_at_50vw_100vh] from-glow to-bg to-[80vh] bg-fixed p-8 text-text selection:bg-primary md:space-y-20 md:p-12 xl:p-20"
>
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
	<header class="min-h-screen w-full space-y-8 p-8 md:space-y-20 md:p-12 xl:p-20">
		<!-- Title -->

		<div class="text-center">
			<h1 class="text-9xl tracking-wide md:text-10xl xl:text-11xl">
				Error <span class="selection:bg-selection-highlight text-text-highlight font-bold"
					>{page.status}</span
				>
			</h1>
			<h2
				class="selection:bg-text-secondary-selection text-2xl font-medium tracking-wide text-text-secondary md:text-3xl xl:text-4xl"
			>
				{page.error?.message}
			</h2>
		</div>

		<!-- Button -->

		<div class="flex flex-row flex-wrap justify-center gap-2 md:gap-7">
			<a
				class="bg-primary px-6 py-3 text-lg transition select-none hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1 md:px-8 md:py-4 md:text-2xl"
				href={resolve('/')}
			>
				Return To Homepage
			</a>
		</div>

		<Logo />
	</header>
</div>
