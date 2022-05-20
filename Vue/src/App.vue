<template>
  <!-- Tabs precisa ser multiword, por isso é OuterTabs -->
  <OuterTabs/>
</template>

<script>
import OuterTabs from './components/OuterTabs.vue'

export default {
  name: 'App',
  components: {
    OuterTabs
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
}
</style>
