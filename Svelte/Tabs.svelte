<script>
  import TabButton from "./TabButton.svelte";
  import TabArea from "./TabArea.svelte";

  var tabs = [
    {
      name: "tab 1",
      content: "Texto do primeiro tab"
    },
    {
      name: "tab 2",
      content: "Texto do segundo tab"
    },
    {
      name: "tab 3",
      content: "Texto do terceiro tab"
    },
    {
      name: "tab 4",
      content: "Texto do quarto tab"
    }
  ];

  var selected = 0;

  function tabClick(id) {
    selected = id;
  }
</script>

<style>
  /* Tabs não possui estilos */
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