<script lang="ts">
	import { onMount, tick } from 'svelte';

	export let text: string;

	const getCharDelay = () => {
		return Math.random() * 50;
	};
	const getNewlineDelay = () => {
		return Math.random() * 100;
	};

	let el: HTMLPreElement;
	let output = '';
	let stickToBottom = false;

	async function run() {
		for (const char of text) {
			stickToBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 25;
			output += char;
			await tick();
			if (stickToBottom) window.scrollTo(0, document.body.scrollHeight);
			await new Promise((r) => setTimeout(r, char === '\n' ? getNewlineDelay() : getCharDelay()));
		}
	}

	onMount(run);
</script>

<pre bind:this={el} class="whitespace-pre-wrap" {...$$restProps}>{output}</pre>
