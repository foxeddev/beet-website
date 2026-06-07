<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import thumbnail from '$lib/assets/thumbnail.png';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Meta -->

	<link rel="icon" href={favicon} />
	<title>Meet Beet</title>
	<meta name="description" content="The Minecraft pack development kit" />

	<!-- Open Graph Protocol -->

	<meta property="og:title" content="Meet Beet" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.toString()} />
	<meta property="og:description" content="The Minecraft pack development kit" />
	<meta property="og:image" content={thumbnail} />
	<meta property="og:image:secure_url" content={thumbnail} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />
	<meta
		property="og:image:alt"
		content="A website with a big title and description and an image of a pixel art beetroot at the bottom."
	/>
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Beet" />

	<!-- Fonts -->

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
{@render children()}
