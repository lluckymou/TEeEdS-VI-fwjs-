<script>
    import Tabs from "../Tabs.svelte";

    // https://storybook.js.org/blog/storybook-for-svelte/
    // O padrão do storybook é que a sintaxe seja em JS/TS, mas prefiro fazer na própria framework
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

    var tabs = [
        { name: "tab 1", content: "Texto do primeiro tab" },
        { name: "tab 2", content: "Texto do segundo tab" },
        { name: "tab 3", content: "Texto do terceiro tab" },
        { name: "tab 4", content: "Texto do quarto tab" }
    ];

</script>
  
<Meta title="Tabs Outer" component={Tabs} />
<Story name="Default" args={{tabs}} source="<Tabs tabs={tabs} />" />
  
<Template let:args>
    <Tabs {...args} />
</Template>
  