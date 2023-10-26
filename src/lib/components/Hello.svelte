<script>
	import { json } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	let helloMessage = '';

	onMount(async () => {
		try {
			const response = await fetch('/api/rooms');
			const data = await response.json();
			helloMessage = JSON.stringify(data);
		} catch (error) {
			console.error('Error:', error);
		}
	});
</script>

<h1>{helloMessage}</h1>
