<script lang="ts">
	let { priority = 'primary', class: className = '', children, ...props } = $props();
</script>

<a
	class={`px-6 py-3 text-lg transition select-none hover:translate-x-2 hover:-translate-y-2 active:translate-x-1 active:-translate-y-1 md:px-8 md:py-4 md:text-2xl ${priority == 'primary' ? 'bg-primary' : priority == 'secondary' ? 'bg-secondary' : ''} ${className}`}
	{...props}
>
	{@render children()}
</a>
