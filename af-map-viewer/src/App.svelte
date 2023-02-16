<script>
	import Dropdown from './Dropdown.svelte';
	import data from './data.json';
  
	const options = data.rum;
  </script>
  
  <Dropdown options={options} />