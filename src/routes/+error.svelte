<script lang="ts">
	import logo from '$lib/assets/beet.png';
	import { page } from '$app/state';
</script>

<div
	id="wrapper"
	class="space-y-32 selection:bg-primary bg-radial-[circle_at_50vw_85vh] from-accent to-[80vh] to-background"
>
	<header class="space-y-8 md:space-y-20 p-8 md:p-12 xl:p-20 w-full h-screen">
		<div>
			<h1
				class="text-foreground xl:text-[12rem] text-9xl text-center leading-30 md:leading-none tracking-wider"
			>
				Error <span class="font-bold text-primary selection:text-accent">{page.status}</span>
			</h1>
			<h2 class="font-medium text-secondary text-2xl md:text-4xl text-center tracking-wider">
				{page.error?.message}
			</h2>
		</div>

		<div class="flex flex-row flex-wrap justify-center gap-2 md:gap-8 m-auto w-fit">
			<a
				class="flex justify-center items-center gap-1 md:gap-2 bg-primary px-4 md:px-8 py-3 md:py-4 font-sans text-foreground text-md md:text-2xl text-center transition hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 cursor-pointer"
				href="/"
			>
				Return To Homepage
			</a>
		</div>

		<img
			src={logo}
			alt="Beet logo"
			class="bottom-0 left-1/2 absolute drop-shadow-2xl drop-shadow-primary/25 h-1/3 -translate-x-1/2"
		/>
	</header>
</div>
