<template>
  <div class="music-detail">
    <div class="mask"></div>
    <div class="header">
      <div class="left-side">
        <span class="icon el-icon-arrow-down" @click="closeDetail"></span>
      </div>
      <div class="right-side">
        <span class="icon el-icon-minus" @click="operateWindow('window-cut')"></span>
        <span class="icon el-icon-full-screen"></span>
        <span class="icon el-icon-close" @click="operateWindow('window-close')"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "music-detail",
  methods: {
    operateWindow(operateName) {
      this.$electron.ipcRenderer.send(operateName);
    },
    closeDetail() {
      this.$store.dispatch("song/set_detail_show", false);
    }
  },
  computed: {
    background() {
      return this.$store.state.song.song_detail_background;
    }
  }
};
</script>

<style scoped lang="scss">
.music-detail {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 9999;
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-image: url("~@/assets/images/demo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba($color: #000, $alpha: 0.7);
    filter: blur(10px);
    z-index: -1;
  }
  .header {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    height: 80px;
    padding: 0 30px;
    .left-side,
    .right-side {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      .icon {
        display: inline-block;
        text-align: center;
        width: 25px;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        color: #ffffff;
        margin-right: 20px;
        cursor: pointer;
        -webkit-app-region: no-drag;
      }
    }
    .right-side {
      justify-content: flex-end;
    }
  }
}
</style>