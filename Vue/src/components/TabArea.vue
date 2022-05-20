<template>
  <div class="tab-content">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'TabArea',
  props: {
    content: String
  }
}
</script>

<style>
  .tab-content {
    margin: 5px;
    border: 1.5px solid #aaa;
    background: #f0f0f0;
    border-radius: 5px;
    font-size: 13pt;
    padding: 20px;
  }
</style>