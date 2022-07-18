<script>
  import { topicosData, currentSelectedTopico } from "./stores";

  let topicos;

  topicosData.subscribe((value) => {
    topicos = Object.assign(value);
  });

  let currentTopico;

  currentSelectedTopico.subscribe((value) => {
    currentTopico = value;
  });

  function selecionaTopico(i) {
    currentSelectedTopico.update(old => i);
  }
</script>

<topicos-list>
  <div class="List">
    <h3>Lista de tópicos cadastrados</h3>
    {#each topicos.topicos as t, i}
        <button class="button_list" on:click={() => selecionaTopico(i)}>{t.topicoTitle}</button>
    {/each}
  </div>
</topicos-list>

<style>
  .List {
    margin-bottom: 20px;
  }

  .button_list {
    display: block;
    width: 100%;
    line-height: 18px;
    font-size: 20px;
    padding: 8px;
    border: 0;
    cursor: pointer;
    background: #4d9c57;
    color: white;
  }

  .button_list:hover {
    background: #237a2f;
  }
</style>
