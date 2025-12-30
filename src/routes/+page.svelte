<script lang="ts">
	import logo from '$lib/assets/beet.png';
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

	<div class="flex justify-center">
		<div class="flex bg-background">
			<input
				type="text"
				value="$ pip install beet"
				readonly
				class="px-8 py-4 outline-0 font-mono text-foreground text-2xl"
			/>
			<button
				class="bg-primary px-8 py-4 font-sans text-foreground text-2xl hover:-translate-y-2 hover:translate-x-2 active:-translate-y-1 active:translate-x-1 duration-75 cursor-pointer"
				>Copy</button
			>
		</div>
	</div>

	<img src={logo} alt="" class="bottom-0 left-1/2 fixed size-96 -translate-x-1/2" />
</div>
