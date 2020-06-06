<script>
  export let sounds;
//   let counter = 0;
//   const increment = () => counter++;

  function playSound(mp3) {
    const sound = new Audio(mp3.mp3);
    sound.play();
  }
</script>

{#each sounds as { name, artist, mp3 }}

  <span class="track">
    <button class="mybutton" title={artist} on:click={() => playSound({ mp3 })}>
      {name}
    </button>
  </span>
{:else}
  <p>no drops found</p>
{/each}
