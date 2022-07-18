<script>
  import TopicosList from "./topicoslist.svelte";
  import TabsMain from "./tabsmain.svelte";
</script>

<reading-component>
  <div class="ReadingComponent">
    <TopicosList />
    <div class="horizontalline" />
    <TabsMain />
  </div>
</reading-component>

<style>
  .ReadingComponent {
    width: auto;
    display: inline-block;
    margin: 0 20px;
    vertical-align: top;
  }

  .horizontalline {
    width: 100%;
    background: gray;
    height: 2px;
    display: block;
    opacity: 0.5;
    margin-bottom: 20px;
  }
</style>
