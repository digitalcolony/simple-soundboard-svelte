<script>
  import { onMount } from "svelte";
  import Soundboard from "./Soundboard.svelte";
  export let name;
  let sounds = [];
  let displayList = [];

  onMount(async () => {
    const res = await fetch(`soundboard.json`);
    sounds = await res.json();
    displayList = sounds.files;
  });
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:head>
  <title>Soundboard</title>
</svelte:head>

<main>
  <section class="container">

    <Soundboard bind:sounds={displayList} />

  </section>
</main>
