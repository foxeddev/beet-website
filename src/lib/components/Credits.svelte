<script lang="ts">
	import Window from './Window.svelte';
	import Code from './Code.svelte';
	import Typewriter from './Typewriter.svelte';

	let { credits, ...props } = $props();

	type Credits = {
		maintainers: { user: string; url: string }[];
		contributors: { user: string; url: string }[];
	};

	const buildCredits = (c: Credits) =>
		[
			'$ beet build',
			'',
			'Building credits...',
			'',
			'Maintainers:',
			...c.maintainers.map((u) => `* ${u.user}`),
			'',
			'Contributors:',
			...c.contributors.map((u) => `* ${u.user}`),
			'',
			'Done!'
		].join('\n');
</script>

<Window {...props}>
	<Code>
		<Typewriter text={buildCredits(credits)}></Typewriter>
	</Code>
</Window>
