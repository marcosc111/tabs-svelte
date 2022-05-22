<script>
  export let titulo;
  export let tabsData;

  import TabOption from "./tabsoption.svelte";
  import TabContent from "./tabscontent.svelte";

  const currentData = { selectedTab: 0 };

  function switchTab(index) {
    currentData.selectedTab = index;
  }
</script>

<tabs-main>
  <h1 class="titulo">{titulo}</h1>
  {#each tabsData as tab, index}
    <li>
      <TabOption
        on:custom_click={() => {
          switchTab(index);
        }}
        selecionado={index == currentData.selectedTab}
        optionId={tab.tabId}
      />
    </li>
  {/each}
  <div>
    <TabContent conteudoTab={tabsData[currentData.selectedTab].tabContent} />
  </div>
</tabs-main>

<style>
  tabs-main {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: rgb(255, 146, 102);
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    padding: 5px;
    width: auto;
    max-width: 700px;
    overflow-wrap: break-word;
    color: white;
  }
  .titulo {
    display: block;
    margin: 20px;
  }
  li {
    display: inline-block;
  }
</style>
