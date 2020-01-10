<template>
  <div class="rank-card" :style="{ height: height + 'px' }">
    <div class="card" :style="{ width: width + 'px', height: height + 'px' }">
      <img :src="data.url" />
      <div class="listen-count" v-show="showIcon">
        <span class="icon"></span>
        <span class="count">{{ data.count }}</span>
      </div>
      <div class="icon-container">
        <i class="video-play"></i>
      </div>
    </div>
    <div class="rank-list">
      <div class="rank-title">流行指数榜</div>
      <div class="song-list">
        <div class="song">1. 下山-要不要买菜</div>
        <div class="song">2. 下山-要不要买菜</div>
        <div class="song">3. 下山-要不要买菜</div>
      </div>
    </div>
  </div>
</template>
<script>
import demo from "@/assets/images/demo.jpg";
export default {
  name: "rank-card",
  data() {
    return {};
  },
  props: {
    width: {
      type: Number,
      default: 160
    },
    height: {
      type: Number,
      default: 160
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default() {
        return {
          url: demo,
          count: "12万",
          title: "大卫·鲍伊 | 致敬永远的音乐大师",
          author: "wuli凡凡",
          time: ""
        };
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variable.scss";
.rank-card {
  width: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  -webkit-app-region: no-drag;
  cursor: pointer;
  @include new_window_color;
  font-family: "source-beauty";
  color: #fff;
  &:hover {
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;
  }
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: #ffffff;
    cursor: pointer;
    overflow: hidden;
    transform: translateY(0px);
    -webkit-app-region: no-drag;
    .listen-count {
      position: absolute;
      z-index: 8;
      width: 70px;
      height: 25px;
      bottom: 15px;
      right: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 12px;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.7);
      .icon {
        width: 15px;
        height: 15px;
        padding-left: 10px;
        background-image: url("~@/assets/images/listen.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      .count {
        margin-left: 5px;
      }
    }
    &:hover .icon-container {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      .video-play {
        width: 60px;
        height: 60px;
        background-image: url("~@/assets/images/cover_play.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .icon-container {
      display: none;
    }
  }
  .rank-list {
    flex: 1;
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    .rank-title {
      width: 100%;
      height: 50px;
      font-size: 20px;
      line-height: 50px;
    }
    .song-list {
      .song {
        font-size: 14px;
        margin-top: 8px;
      }
    }
  }
}
</style>
