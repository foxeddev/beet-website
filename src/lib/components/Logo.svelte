<script lang="ts">
	import logo from '$lib/assets/beet.png';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<a href="#top">
	<img
		src={logo}
		alt="Beet Logo"
  fetchpriority="high"
		class={`fixed bottom-0 left-1/2 z-10 -translate-x-1/2 drop-shadow-2xl drop-shadow-glow/50 duration-200 ${scrollY < 200 ? 'h-[calc(100vh-32rem)] max-h-96' : 'h-32 md:h-48'}`}
	/>
</a>
