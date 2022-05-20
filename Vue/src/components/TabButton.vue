<template>
  <button
    :class="[selected ? {selected} : {}]"
    :name="{ name }"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'TabButton',
  props: {
    name: String,
    selected: Boolean
  }
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