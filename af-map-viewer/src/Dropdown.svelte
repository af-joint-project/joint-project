<script>
    export let options = [];
    let selectedOption = null;
    function handleChange(event) {
      const selectedItem = event.target.value;
      if (selectedItem) {
        const selectedOption = options.find(option => option.name === selectedItem);
        console.log(selectedOption); // log matching option to console
        
      }else{
        selectedOption = null
      }
    }
  </script>

  <label for="select">Välj ett rum:</label>
  <select id="select" name="select" on:change={handleChange}>
    <option value="">Välj ett rum</option>
    {#each options as option}
      <option value={option.name}>{option.name}</option>
    {/each}

  </select>