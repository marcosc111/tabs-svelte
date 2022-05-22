<script>
  export let optionId;
  export let selecionado;

  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher();

  function handleTabOptionClick() {
    dispatcher("custom_click");
  }
</script>

<div on:click={handleTabOptionClick}>
  {#if selecionado}
    <tab-option class="selecionado">
      <div>
        <span><b>{optionId} </b></span>
      </div>
    </tab-option>
  {:else}
    <tab-option>
      <div>
        <span><b>{optionId} </b></span>
      </div>
    </tab-option>
  {/if}
</div>

<style>
  tab-option {
    text-align: center;
    min-width: 100px;
    min-height: 18px;
    background: #1282bb;
    color: white;
    padding: 10px 5px 5px 5px;
    margin: 8px;
    display: inline-block;
    border-radius: 3px;
    border: 4px solid #1282bb;
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  tab-option:hover {
    cursor: pointer;
  }

  .selecionado {
    color: #1282bb;
    background: white;
    border: 4px solid #1282bb;
  }
</style>
