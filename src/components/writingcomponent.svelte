<script>
  import FormErrors from "./formerrors.svelte";
  import { topicosData } from "./stores";

  let topicos;

  topicosData.subscribe((value) => {
    topicos = Object.assign(value);
  });

  let formErrorsMsgs = {};

  let newTopicoData = {
    newTopicoTitle: "",
    newTopicoTitleValid: true,
    numberOfTabs: 2,
    newTabs: [
      {
        newTabTitle: "",
        newTabContent: "",
        titleValid: true,
        contentValid: true,
        titleErrorMsg: "",
        contentErrorMsg: "",
      },
      {
        newTabTitle: "",
        newTabContent: "",
        titleValid: true,
        contentValid: true,
        titleErrorMsg: "",
        contentErrorMsg: "",
      },
      {
        newTabTitle: "",
        newTabContent: "",
        titleValid: true,
        contentValid: true,
        titleErrorMsg: "",
        contentErrorMsg: "",
      },
      {
        newTabTitle: "",
        newTabContent: "",
        titleValid: true,
        contentValid: true,
        titleErrorMsg: "",
        contentErrorMsg: "",
      },
    ],
  };

  function changeSelect(e) {
    newTopicoData.numberOfTabs = parseInt(e.target.value);
  }

  function button_cadastro_handler(e) {
    // itera pelos campos
    for (let i = 0; i < newTopicoData.numberOfTabs; ++i) {
      let o = newTopicoData.newTabs[i];
      onInputFocusOutHandler(o.newTabTitle, i, true);
      onInputFocusOutHandler(o.newTabContent, i, false);
    }

    onTabCollectionTitleFocusOutHandler(newTopicoData.newTopicoTitle);

    // verifica se tem erros
    if (Object.keys(formErrorsMsgs).length > 0) return;

    let newTopicoObj = { topicoTitle: newTopicoData.newTopicoTitle, tabs: [] };
    for (let i = 0; i < newTopicoData.numberOfTabs; ++i) {
      newTopicoObj.tabs.push({
        tabId: newTopicoData.newTabs[i].newTabTitle,
        tabContent: newTopicoData.newTabs[i].newTabContent,
      });
    }

    topicosData.update((old) => ({
      topicos: [...old.topicos, newTopicoObj],
    }));
  }

  function onInputFocusOut(event, index, isTabTitle) {
    onInputFocusOutHandler(event.target.value, index, isTabTitle);
  }

  function onInputFocusOutHandler(text, index, isTabTitle) {
    // ...
    let newTab = { ...newTopicoData.newTabs[index] };

    let errorMsgId = isTabTitle ? "title" : "content";
    errorMsgId += index;

    let errorMsg = validateInput(text, index, isTabTitle);
    if (errorMsg) {
      formErrorsMsgs[errorMsgId] = errorMsg;

      if (isTabTitle) newTab.titleValid = false;
      else newTab.contentValid = false;
    } else {
      delete formErrorsMsgs[errorMsgId];
      formErrorsMsgs = formErrorsMsgs; // svelte workaround

      if (isTabTitle) newTab.titleValid = true;
      else newTab.contentValid = true;
    }

    if (isTabTitle) newTab.newTabTitle = text;
    else newTab.newTabContent = text;

    newTopicoData.newTabs[index] = newTab;
  }

  function onTabCollectionTitleFocusOut(event) {
    onTabCollectionTitleFocusOutHandler(event.target.value);
  }

  function onTabCollectionTitleFocusOutHandler(text) {
    let errorMsg = validateInput(text, null, null, true);
    let newTopicoTitleValid = true;
    let errorMsgId = "topicoTitle";
    if (errorMsg) {
      newTopicoTitleValid = false;
      formErrorsMsgs[errorMsgId] = errorMsg;
    } else {
      newTopicoTitleValid = true;
      delete formErrorsMsgs[errorMsgId];
      formErrorsMsgs = formErrorsMsgs;
    }

    newTopicoData.newTopicoTitle = text;
    newTopicoData.newTopicoTitleValid = newTopicoTitleValid;
  }

  function validateInput(text, i, isTitle, isTopicoTitle) {
    let msgDeErro = "";

    if (isTopicoTitle) {
      msgDeErro += "Título do novo tópico";
    } else {
      if (isTitle) {
        msgDeErro += "Título do tab " + (i + 1);
      } else {
        msgDeErro += "Conteúdo do tab " + (i + 1);
      }
    }

    if (text.length == 0) {
      msgDeErro += " vazio!";
      return msgDeErro;
    }

    if (text.length < 4) {
      msgDeErro += " muito curto!";
      return msgDeErro;
    }
  }
</script>

<writing-component>
  <div class="WritingComponent">
    <p>Cadastro de novo tópico</p>
    <form>
      <input type="text" class="inputTitulo" placeholder="Título" on:blur={onTabCollectionTitleFocusOut}/>
      <br />
      <span class="simple_span_select">Número de tabs:</span>
      <select class="selectNumber" on:change={changeSelect} name="select">
        {#each [2, 3, 4] as n}
          <option value={n}>{n}</option>
        {/each}
      </select>
      {#each Array.from(Array(newTopicoData.numberOfTabs)) as _, n}
        <div class="new_tab_div">
          <input
            type="text"
            class="new_tab_div"
            placeholder={`Título do tab ${n + 1}`}
            on:blur={(e) => onInputFocusOut(e, n, true)}
          />
          <input
            type="text"
            class="new_tab_div"
            placeholder={`Conteúdo do tab ${n + 1}`}
            on:blur={(e) => onInputFocusOut(e, n, false)}
          />
        </div>
      {/each}
      <FormErrors errors={formErrorsMsgs} />
      {#if Object.keys(formErrorsMsgs).length > 0}
        <div
          class="button_cadastro button_disabled"
          on:click={button_cadastro_handler}
        >
          Cadastrar tópico
        </div>
      {:else}
        <div class="button_cadastro" on:click={button_cadastro_handler}>
          Cadastrar tópico
        </div>
      {/if}
    </form>
  </div>
</writing-component>

<style>
  .WritingComponent {
    width: 400px;
    height: auto;
    display: inline-block;
    margin: 0 20px;
    vertical-align: top;
    background: #e3e3e3;
  }

  p {
    color: #3e3e3e;
    font-size: 20px;
    font-weight: bold;
  }

  .inputTitulo {
    border-radius: 3px;
    border: 1px black;
    height: 30px;
    width: 80%;
    padding: 5px;
    display: inline-block;
    margin-bottom: 20px;
  }

  .selectNumber {
    border-radius: 3px;
    border: 1px black;
    line-height: 20px;
    width: 20%;
    padding: 5px;
    display: inline-block;
    margin-bottom: 20px;
  }

  .button_cadastro {
    display: inline-block;
    border: 0;
    cursor: pointer;
    background: rgb(68, 68, 219);
    width: 50%;
    color: white;
    padding: 8px 5px;
    border-radius: 3px;
    margin-bottom: 20px;
  }

  .button_cadastro:hover {
    background: rgb(47, 47, 218);
  }

  .simple_span_select {
    font-size: 14px;
    margin-right: 12px;
  }

  .new_tab_div {
    margin-bottom: 20px;
  }

  input.new_tab_div {
    border-radius: 3px;
    border: 0px;
    height: 30px;
    width: 80%;
    padding: 5px;
    display: inline-block;
    margin-bottom: 5px;
  }

  .button_disabled,
  .button_disabled:hover {
    background: rgb(88, 88, 88);
    cursor: default;
  }
</style>
