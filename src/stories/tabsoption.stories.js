import TabsOption from '../components/tabsoption.svelte'

export default {
  title: 'Tabs/TabsOption',
  component: TabsOption,
  argTypes: {
    onCustomClick: { action: 'handleClick' },
    selecionado: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: TabsOption,
  props: args,
  on: {
    custom_click: args.onCustomClick,
  },
});

export const Default = Template.bind({});
Default.args = {
  selecionado: false,
  optionId: "default"
};

export const TextoGrande = Template.bind({});
TextoGrande.args = {
  selecionado: false,
  optionId: "texto muito maior do que o default"
};

export const SemTexto = Template.bind({});
SemTexto.args = {
  selecionado: false,
  optionId: ""
};