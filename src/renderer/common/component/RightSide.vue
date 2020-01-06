<template>
  <div class="right-side-wrapper">
    <div class="tool-bar">
      <div class="tool-wrapper">
        <div class="left-tool"></div>
        <div class="right-tool">
          <section></section>
          <section>
            
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.right-side-wrapper {
  width: 100%;
  height: 100%;
  & .tool-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    line-height: 80px;
    .tool-wrapper {
      display: flex;
      flex-direction: row;
      width: 95%;
      height: 60px;
      .left-tool{
        flex: 1;
      }
      .right-tool {
        flex: 1;
      }
    }
  }
}
</style>