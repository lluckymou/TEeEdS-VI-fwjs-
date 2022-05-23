<script>
  import TabButton from "./TabButton.svelte";
  import TabArea from "./TabArea.svelte";

  export let tabs = []
  var selected = 0;

  function tabClick(id) {
    selected = id;
  }
</script>

<style>
  * {
    font-family: sans-serif;
  }
</style>

<div class="tabs">
    {#each tabs as tab, i}
        <TabButton
            id={i}
            name={tab.name}
            selected={selected === i}
            on:selection={e => tabClick(e.detail)}
        />
    {/each}

    <TabArea content={tabs[selected].content} />
</div>