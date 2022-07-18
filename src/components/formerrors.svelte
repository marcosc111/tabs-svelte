<script>
  export let errors;
</script>

<form-errors>
  {#if Object.keys(errors).length > 0}
    <div class="FormErrors">
      <div class="ErrorListWrapper">
        <ul>
          {#each Object.values(errors) as fe}
            <li>{fe}</li>
          {/each}
        </ul>
      </div>
    </div>
  {:else}
    <div />
  {/if}
</form-errors>

<style>
  .FormErrors {
    margin-bottom: 20px;
    color: rgb(223, 80, 80);
    font-weight: bold;
    font-size: 13px;
  }

  .ErrorListWrapper {
    width: auto;
    display: inline-block;
    padding-right: 30px;
  }
</style>
