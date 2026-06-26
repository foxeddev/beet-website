<script lang="ts">
	let { priority = 'primary', class: className = '', children, ...props } = $props();
</script>

<p
	class={`bg-primary px-4 py-2 transition selection:bg-secondary hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1 ${priority == 'primary' ? 'bg-primary' : priority == 'secondary' ? 'bg-secondary' : ''} ${className}`}
	{...props}
>
	{@render children()}
</p>
