<script>
	import Tabs from "./Tabs.svelte";

  var tabs = [
    { name: "tab 1", content: "Texto do primeiro tab" },
    { name: "tab 2", content: "Texto do segundo tab" },
    { name: "tab 3", content: "Texto do terceiro tab" },
    { name: "tab 4", content: "Texto do quarto tab" }
  ];
</script>

<style>
</style>

<main>
	<Tabs tabs={tabs} />
</main>