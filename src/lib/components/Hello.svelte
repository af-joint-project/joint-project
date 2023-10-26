<script>
	import { onMount } from 'svelte';

	let helloMessage = '';

	onMount(async () => {
		try {
			const response = await fetch('/api/rooms');
			const data = await response.json();
			helloMessage = data.message;
		} catch (error) {
			console.error('Error:', error);
		}
	});
</script>

<h1>{helloMessage}</h1>
