import TabButton from '../components/TabButton.vue';

var name = "titulo da aba";
var selected = false;

// Meta
export default {
    title: 'Tab Button',
    component: TabButton,
    argTypes: {
        name: { control: 'text' },
        selected: { control: 'boolean' },
    },
};

// Arguments
const Template = (args) => ({
    components: { TabButton },
    template: '<TabButton v-bind="args" />',
    
    setup() {
        return { args };
    }
});

// Story
export const Default = Template.bind({});
Default.args = { name: name, selected: selected };
Default.parameters = {
  docs: {
    source: {
      code: '<TabButton content="titulo da aba" selected="false" />'
    },
  },
};