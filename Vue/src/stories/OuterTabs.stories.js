import OuterTabs from '../components/OuterTabs.vue';

var tabs = [
    { name: "tab 1", content: "Texto do primeiro tab" },
    { name: "tab 2", content: "Texto do segundo tab" },
    { name: "tab 3", content: "Texto do terceiro tab" },
    { name: "tab 4", content: "Texto do quarto tab" }
];

// Meta
export default {
    title: 'Outer Tabs',
    component: OuterTabs
};

// Arguments
const Template = (args) => ({
    components: { OuterTabs },
    template: '<OuterTabs v-bind="args" />',
    
    setup() {
        return { args };
    }
});

// Story
export const Default = Template.bind({});
Default.args = {tabs};
Default.parameters = {
  docs: {
    source: {
      code: '<OuterTabs :tabs="tabs" />'
    },
  },
};