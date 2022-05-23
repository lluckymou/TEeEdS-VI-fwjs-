import { Meta, Story } from '@storybook/react';
import { TabArea } from '../components/TabArea';

var content = "conteudo de um tab";

// Meta
export default {
    title: 'Tab Content',
    component: TabArea,
    argTypes: {
        content: { name: 'content' }
    },
};

// Arguments
const Template: Story = (args) => <TabArea {...args} />;

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