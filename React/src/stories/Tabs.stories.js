import { Meta, Story } from '@storybook/react';
import { Tabs } from '../components/Tabs';

var tabs = [
    { name: "tab 1", content: "Texto do primeiro tab" },
    { name: "tab 2", content: "Texto do segundo tab" },
    { name: "tab 3", content: "Texto do terceiro tab" },
    { name: "tab 4", content: "Texto do quarto tab" }
];

// Meta
export default {
    title: 'Outer Tabs',
    component: Tabs
};

// Arguments
const Template: Story = (args) => <Tabs tabs={tabs} {...args} />;

// Story
export const Default = Template.bind({});
Default.args = {tabs};
Default.parameters = {
  docs: {
    source: {
      code: '<Tabs tabs="tabs" />'
    },
  },
};