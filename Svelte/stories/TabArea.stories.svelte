<script>
    import TabArea from "../TabArea.svelte";

    // https://storybook.js.org/blog/storybook-for-svelte/
    // O padrão do storybook é que a sintaxe seja em JS/TS, mas prefiro fazer na própria framework
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

    var content = "conteudo de um tab";

</script>
  
<Meta title="Tab Content" component={TabArea} argTypes={{ content: { control: "text"} }} />
<Story name="Default" args={{content}} source="<TabArea content={content} />" />
  
<Template let:args>
    <TabArea {...args} />
</Template>
  