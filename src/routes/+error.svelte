<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Button from '$lib/components/Button.svelte';
	import Logo from '$lib/components/Logo.svelte';
</script>

<header class="min-h-screen space-y-8 p-8 md:space-y-20 md:p-12 xl:p-20">
	<div class="text-center">
		<h1 class="text-9xl tracking-wide md:text-10xl xl:text-11xl">
			Error <b class="text-primary selection:text-secondary">{page.status}</b>
		</h1>
		<p class="text-2xl font-medium tracking-wide text-text-secondary md:text-3xl xl:text-4xl">
			{page.error?.message}
		</p>
	</div>
	<div class="flex flex-row flex-wrap justify-center gap-2 md:gap-7">
		<Button priority="secondary" href={resolve('/')}>Back to start</Button>
	</div>
	<Logo />
</header>
