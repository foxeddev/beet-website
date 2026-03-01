<script lang="ts">
	import logo from '$lib/assets/beet.png';
</script>

<div
	id="wrapper"
	class="space-y-8 md:space-y-20 selection:bg-primary bg-radial-[circle_at_50vw_100vh] from-glow to-[80vh] to-bg bg-fixed p-8 md:p-12 xl:p-20 w-full min-h-screen text-text"
>
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

	<!-- Button -->

	<div class="flex flex-row flex-wrap justify-center gap-2 md:gap-7">
		<a
			class="bg-primary px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 select-none"
			href="/"
		>
			Return To Homepage
		</a>
	</div>

	<!-- Logo -->

	<img
		src={logo}
		alt="Beet Logo"
		class="bottom-0 left-1/2 z-10 fixed drop-shadow-2xl drop-shadow-glow/50 h-48 sm:h-72 md:h-96 transition-all -translate-x-1/2"
	/>
</div>
