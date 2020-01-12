<template>
  <div class="player">
    <div class="play-progress">
      <div class="tool-bar" :style="{width:toolBarWidth}"></div>
      <span class="dot"></span>
    </div>
    <div class="control-pane">
      <div class="left-side-info tool-item">
        <div class="album-picture" @click="showDetail">
          <img :src="demo" />
          <div class="detail-arrow">
            <span class="el-icon-arrow-up icon"></span>
            <span class="el-icon-arrow-up icon last-icon"></span>
          </div>
        </div>
        <div class="song-info">
          <div class="song-name">
            <span class="name">逃亡</span>
            <span class="author">-（吴青峰）</span>
          </div>
          <div class="song-operate">
            <span class="el-icon-thumb"></span>
            <span class="el-icon-download"></span>
            <span class="el-icon-chat-dot-square"></span>
          </div>
        </div>
      </div>
      <div class="control-tools tool-item">
        <span class="refresh icon"></span>
        <span class="prev icon"></span>
        <span class="play"></span>
        <span class="next icon"></span>
        <span class="voice icon"></span>
      </div>
      <div class="right-side-info tool-item">
        <span class="music-queue icon" @click="showQueue"></span>
      </div>
    </div>
  </div>
</template>

<script>
import demo from "@/assets/images/demo.jpg";
export default {
  name: "player",
  data() {
    return {
      demo,
      toolBarWidth: 0
    };
  },
  methods: {
    showDetail() {
      this.$store.dispatch("song/set_detail_show", true);
    },
    showQueue(){
      this.$store.dispatch("song/set_right_show", true);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variable.scss";
.player {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  bottom: 0;
  z-index: 99;
  @include right_side_color;
  .play-progress {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 2px;
    -webkit-app-region: no-drag;
    cursor: pointer;
    background-color: #dddddd;
    margin-top: 10px;
    .tool-bar {
      height: 2px;
      background-color: #17d28d;
    }
    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      cursor: pointer;
      -webkit-app-region: no-drag;
      background-color: #17d28d;
    }
  }
  .control-pane {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    box-sizing: border-box;
    padding: 0 45px;
    .tool-item {
      flex: 1;
      height: 100%;
    }
    .left-side-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      box-sizing: border-box;
      & .album-picture {
        position: relative;
        width: 40px;
        height: 40px;
        & > img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
        .detail-arrow {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          cursor: pointer;
          background-color: rgba($color: #000000, $alpha: 0.3);
          .icon {
            display: block;
            color: #ffffff;
          }
          .last-icon {
            position: absolute;
            top: 5px;
          }
        }
        &:hover .detail-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
      .song-info {
        flex: 1;
        box-sizing: border-box;
        padding-left: 15px;
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .song-name {
          width: 100%;
          font-size: 12px;
          & .name {
            color: #ffffff;
          }
          .author {
            color: #dddddd;
          }
        }
        .song-operate {
          display: flex;
          flex-direction: row;
          & > span {
            color: #ffffff;
            font-size: 18px;
            margin-right: 15px;
            cursor: pointer;
          }
        }
      }
    }
    .control-tools {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .prev {
        background-image: url("~@/assets/images/prev.png");
      }
      .play {
        display: inline-block;
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url("~@/assets/images/play.png");
      }
      .next {
        transform: rotate(180deg);
        background-image: url("~@/assets/images/prev.png");
      }
      .refresh {
        background-image: url("~@/assets/images/refresh.png");
      }
      .voice {
        background-image: url("~@/assets/images/voice.png");
      }
    }
    .right-side-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        -webkit-app-region:no-drag;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .music-queue {
        background-image: url("~@/assets/images/rightBtn.png");
      }
    }
  }
}
</style>