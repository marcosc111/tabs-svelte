<script>
  import WritingComponent from "./writingcomponent.svelte";
  import ReadingComponent from "./readingcomponent.svelte";

</script>

<root class="Root">
  <WritingComponent />
  <div class="line" />
  <ReadingComponent />
</root>

<style>
  .Root {
    padding: 30px;
  }

  .line {
    width: 2px;
    background: gray;
    height: 600px;
    display: inline-block;
    vertical-align: top;
    opacity: 0.3;
  }
</style>
