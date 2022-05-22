<script setup>
  import TabsMain from "./components/tabsmain.svelte";

  const tData = [
    {
      tabId: "Tab 1",
      tabContent: "Esse é o conteúdo da tab 1",
    },
    {
      tabId: "Tab 2",
      tabContent: "Esse é o conteúdo da tab número 2",
    },
    {
      tabId: "Tab 3",
      tabContent: "Terceiro conteúdo",
    },
    {
      tabId: "Tab 4",
      tabContent: "Quarta página",
    },
  ];
</script>

<main>
  <TabsMain titulo="Tabs com Svelte" tabsData={tData} />
</main>

<style>
  main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 100px;
  }
</style>
