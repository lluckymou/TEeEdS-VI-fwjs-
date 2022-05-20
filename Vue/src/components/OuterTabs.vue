<template>
  <div class="tabs">
      <TabButton 
        v-for="(tab, i) in tabs" 
        v-bind:key="tab.name"
        :id="i"
        :name="tab.name"
        :selected="selected == i"
        @click="tabClick(i)"
      />
  </div>
  <TabArea :content="tabs[selected].content"/>
</template>

<script>
import TabArea from './TabArea.vue'
import TabButton from './TabButton.vue'

export default {
  name: 'OuterTabs',
  components: {
    TabArea,
    TabButton
  },
  data() {
    return {
      selected: 0,
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
  methods: {
    tabClick: function(id) {
      this.selected = id;
    }
  }
}
</script>

<style>
  /* Tabs não possui estilos */
</style>