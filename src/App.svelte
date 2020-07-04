<script>
  import { onMount } from "svelte";
  import Soundboard from "./Soundboard.svelte";
  import SoundSearch from "./SoundSearch.svelte";
  export let name;

  let searchTerm = "";
  let sounds = [];
  let displayList = [];

  onMount(async () => {
    const res = await fetch(`soundboard.json`);
    sounds = await res.json();
    displayList = sounds.files;
  });

  function filterList(list, query) {
    displayList = sounds.files;
    return displayList.filter(item => {
      return (
        item.name.toLowerCase().match(query.toLowerCase()) ||
        item.artist.toLowerCase().match(query.toLowerCase())
      );
    });
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  h1 {
    color: rgb(1, 1, 59);
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
    text-align: center;
  }
</style>

<svelte:head>
  <title>{name}</title>
</svelte:head>
<header>
  <h1>{name}</h1>
</header>
<main>
  <section>
    <SoundSearch
      bind:searchTerm
      on:updateSearch={() => {
        displayList = filterList(sounds, searchTerm);
      }} />
    <Soundboard bind:sounds={displayList} />
  </section>
</main>
