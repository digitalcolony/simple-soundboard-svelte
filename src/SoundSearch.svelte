<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = new createEventDispatcher();
  export let searchTerm;
</script>

<style>
  input {
    border: 1px solid;
    padding: 10px;
    box-shadow: 1px 3px;
    margin-left: 20px;
    margin-right: 20px;
    display: inline;
  }
</style>

<div>
  <input
    type="text"
    aria-label="Search Input"
    placeholder="Filter Sounds"
    bind:value={searchTerm}
    on:input={() => {
      dispatch('updateSearch');
    }} />
</div>
