<template>
  <div class="player">

  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../assets/styles/variable.scss';
.player {
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    z-index: 99;
    border-top: 1px solid #eaeaea;
    @include right_side_color;
}
</style>