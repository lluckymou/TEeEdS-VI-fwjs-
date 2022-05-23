<template>
  <!-- Tabs precisa ser multiword, por isso é OuterTabs -->
  <OuterTabs :tabs="tabs" />
</template>

<script>
import OuterTabs from './components/OuterTabs.vue'

export default {
  name: 'App',
  components: {
    OuterTabs
  },
  data() {
    return {
      tabs: [
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
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: sans-serif;
}
</style>
