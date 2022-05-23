import { Meta, Story } from '@storybook/react';
import { TabButton } from '../components/TabButton';

var name = "titulo da aba";
var selected = false;

// Meta
export default {
    title: 'Tab Button',
    component: TabButton,
    argTypes: {
        name: { name: 'name' },
        selected: { name: 'selected' },
    },
};

// Arguments
const Template: Story = (args) => <TabButton {...args} />;

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