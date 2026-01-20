<script lang="ts">
	import { onMount, tick } from 'svelte';

	let { text, ...props } = $props();

	let el: HTMLElement;
	let output = $state('');
	let running = false;

	const getCharDelay = () => Math.random() * 50;
	const getNewlineDelay = () => Math.random() * 100;

	async function run() {
		for (const char of text) {
			if (!running) return;
			const stickToBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 25;
			output += char;
			await tick();
			if (stickToBottom) window.scrollTo(0, document.body.scrollHeight);
			await new Promise((r) => setTimeout(r, char === '\n' ? getNewlineDelay() : getCharDelay()));
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !running) {
				running = true;
				run();
			} else if (!entry.isIntersecting && running) {
				running = false;
				output = '';
			}
		});

		observer.observe(el);
	});
</script>

<span bind:this={el} {...props}>{output}</span>
