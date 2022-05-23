import { Meta, Story } from '@storybook/angular';
import { TabButtonComponent } from '../app/tab-button.component';

const name = "titulo da aba";
const selected = false;

// Meta
export default {
    title: 'Tab Button',
    component: TabButtonComponent,
    argTypes: {
        name: { control: 'text' },
        selected: { control: 'boolean' },
    }
} as Meta;

// Story
export const Default: Story = (args) => ({
    props: args,
});
Default.args = {
    name: name,
    selected: selected,
    id: -1
};
Default.parameters = {
    docs: {
        source: {
            code: '<tab-button [name]="name" [selected]="selected" [id]="-1"></tab-button>'
        },
    },
};