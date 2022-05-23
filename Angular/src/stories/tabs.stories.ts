import { Meta, Story } from '@storybook/angular';
import { TabsComponent } from '../app/tabs.component';

const tabs = [
    { name: "tab 1", content: "Texto do primeiro tab" },
    { name: "tab 2", content: "Texto do segundo tab" },
    { name: "tab 3", content: "Texto do terceiro tab" },
    { name: "tab 4", content: "Texto do quarto tab" }
];

// Meta
export default {
    title: 'Outer Tabs',
    component: TabsComponent,
    argTypes: {
        tabs: { control: 'any' },
    }
} as Meta;

// Story
export const Default: Story = (args) => ({
    props: args,
});
Default.args = {
    tabs: tabs,
};
Default.parameters = {
    docs: {
        source: {
            code: '<tabs [tabs]="tabs"></tabs>'
        },
    },
};