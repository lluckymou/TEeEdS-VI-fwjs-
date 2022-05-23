import TabArea from '../components/TabArea.vue';

var content = "conteudo de um tab";

// Meta
export default {
    title: 'Tab Content',
    component: TabArea,
    argTypes: {
        content: { control: 'text' }
    },
};

// Arguments
const Template = (args) => ({
    components: { TabArea },
    template: '<TabArea v-bind="args" />',
    
    setup() {
        return { args };
    }
});

// Story
export const Default = Template.bind({});
Default.args = { content: content };
Default.parameters = {
  docs: {
    source: {
      code: '<TabArea content="conteudo de um tab" />'
    },
  },
};