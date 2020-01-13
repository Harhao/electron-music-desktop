<template>
  <div class="music-detail">
    <div class="mask"></div>
    <div class="header">
      <div class="left-side">
        <span class="icon el-icon-arrow-down" @click="closeDetail"></span>
      </div>
      <div class="right-side">
        <span
          class="icon el-icon-minus"
          @click="operateWindow('window-cut')"
        ></span>
        <span class="icon el-icon-full-screen"></span>
        <span
          class="icon el-icon-close"
          @click="operateWindow('window-close')"
        ></span>
      </div>
    </div>
    <div class="song-wrapper">
      <div class="song-info">
        <div class="pictures">
          <img :src="demo" />
        </div>
        <div class="lyrics"></div>
      </div>
    </div>
    <div class="control">
      <player :isShowBackground="false" :isShowPicture="false"></player>
    </div>
  </div>
</template>

<script>
import player from "./player.vue";
import demo from "@/assets/images/demo.jpg";
export default {
  name: "music-detail",
  components: {
    player
  },
  data() {
    return {
      demo
    };
  },
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
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  background: rgba($color: #000000, $alpha: 1);
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
  .song-wrapper {
    flex: 1;
    .song-info {
      display: flex;
      flex-direction: row;
      width: 90%;
      height: 100%;
      margin: 0 auto;
      .pictures,
      .lyrics {
        flex: 1;
      }
      .pictures {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .control {
    position: relative;
    width: 90%;
    height: 80px;
    margin: 0 auto;
    overflow: hidden;
  }
}
</style>
