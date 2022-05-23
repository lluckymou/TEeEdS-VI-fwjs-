<script>
    import TabButton from "../TabButton.svelte";

    // https://storybook.js.org/blog/storybook-for-svelte/
    // O padrão do storybook é que a sintaxe seja em JS/TS, mas prefiro fazer na própria framework
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

    var name = "titulo da aba";
    var selected = false;

</script>
  
<Meta title="Tab Button" component={TabButton} 
    argTypes={{ 
        name: { control: "text"}, 
        selected: { control: "boolean" }, 
        id: { control: "number" },
        onClick: { action: 'selection' } 
    }} 
/>

<Story name="Default" args={{selected: selected, name: name, id: -1 }} source="<TabButton />" />
  
<Template let:args>
    <TabButton {...args} />
</Template>