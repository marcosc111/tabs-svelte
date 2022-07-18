<script>
  export let titulo;

  import TabOption from "./tabsoption.svelte";
  import TabContent from "./tabscontent.svelte";

  import { topicosData, currentSelectedTopico } from "./stores";

  let topicos;

  topicosData.subscribe((value) => {
    topicos = Object.assign(value);
  });

  let currentTopico;

  currentSelectedTopico.subscribe((value) => {
    currentTopico = value;
  });




  const currentData = { selectedTab: 0 };

  function switchTab(index) {
    currentData.selectedTab = index;
  }

</script>

<tabs-main>
  <h1 class="titulo">{topicos.topicos[currentTopico].topicoTitle}</h1>
  {#each topicos.topicos[currentTopico].tabs as tab, index}
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
    <TabContent conteudoTab={topicos.topicos[currentTopico].tabs[currentData.selectedTab].tabContent} />
  </div>
</tabs-main>

<style>
  tabs-main {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: inline-block;
    text-align: center;
    border-radius: 10px;
    padding: 5px;
    width: auto;
    max-width: 700px;
    overflow-wrap: break-word;
  }
  .titulo {
    display: block;
    margin: 20px;
  }
  li {
    display: inline-block;
  }
</style>
