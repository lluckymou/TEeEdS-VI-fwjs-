import { Meta, Story } from '@storybook/angular';
import { TabAreaComponent } from '../app/tab-area.component';

const content = "conteudo de um tab";

// Meta
export default {
    title: 'Tab Content',
    component: TabAreaComponent,
    argTypes: {
        content: { control: 'text' },
    }
} as Meta;

// Story
export const Default: Story = (args) => ({
    props: args,
});
Default.args = {
    content: content,
};
Default.parameters = {
    docs: {
        source: {
            code: '<tab-area [content]="content"></tab-area>'
        },
    },
};