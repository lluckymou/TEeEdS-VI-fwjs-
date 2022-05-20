<script>
  import { createEventDispatcher } from "svelte";

  var dispatcher = createEventDispatcher();
  export var name, selected, id;

  export function onClick(number) {
    dispatcher("selection", number);
  }
</script>

<style>
  button {
    margin: 0 5px;
    background: #ccc;
    border-radius: 5px;
    border: 1.5px solid #777;
    padding: 5px 30px;
    font-size: 12pt;
  }
  button.selected {
    font-weight: bold;
    background: #aaa;
  }
</style>

<button
    class={selected ? 'selected' : {id}}
    name={name}
    on:click={e => onClick(id)}
>
    { name }
</button>
