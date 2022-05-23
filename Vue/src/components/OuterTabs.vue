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
  props: {
    tabs: { type: Array }
  },
  data() {
    return {
      selected: 0
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