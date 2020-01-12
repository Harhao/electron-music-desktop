<template>
  <div class="player">
    <el-button @click="showDetail">show</el-button>
  </div>
</template>

<script>
export default {
  name: "player",
  methods: {
    showDetail() {
      this.$store.dispatch("song/set_detail_show",true)
    }
  }
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