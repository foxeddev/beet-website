<script lang="ts">
	import logo from '$lib/assets/beet.png';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<div
	id="wrapper"
	class="bg-radial-[circle_at_50vw_85vh] from-glow to-bg-base to-[80vh] text-text-base selection:bg-selection-base"
>
	<header class="min-h-screen w-full space-y-8 p-8 md:space-y-20 md:p-12 xl:p-20">
		<!-- Title -->

		<div class="text-center">
			<h1 class="text-9xl tracking-wide md:text-10xl xl:text-11xl">
				Error <span class="font-bold text-text-highlight selection:bg-selection-highlight"
					>{page.status}</span
				>
			</h1>
			<h2
				class="selection:bg-text-secondary-selection text-2xl font-medium tracking-wide text-text-secondary md:text-3xl xl:text-4xl"
			>
				{page.error?.message}
			</h2>
		</div>

		<!-- Buttons -->

		<div class="flex flex-row flex-wrap justify-center gap-2 md:gap-7">
			<a
				class="cursor-pointer bg-bg-button-base px-6 py-3 text-lg transition selection:bg-transparent! hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1 md:px-8 md:py-4 md:text-2xl"
				href={resolve('/')}
			>
				Return To Homepage
			</a>
		</div>

		<!-- Logo -->

		<img
			src={logo}
			alt="Beet Logo"
			class={`fixed bottom-0 left-1/2 z-10 -translate-x-1/2 drop-shadow-2xl drop-shadow-glow/50 duration-200 ${scrollY < 200 ? 'w-2/3 max-w-96' : 'pointer-events-none w-1/3 max-w-64'}`}
		/>
	</header>
</div>
