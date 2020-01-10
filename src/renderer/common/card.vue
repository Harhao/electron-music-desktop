<template>
  <div
    class="card-container"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <div class="card">
      <img :src="data.url" />
      <div class="listen-count" v-show="showIcon">
        <span class="icon"></span>
        <span class="count">{{ data.count }}</span>
      </div>
      <div class="icon-container">
        <i class="video-play"></i>
      </div>
    </div>
    <div class="desc">
      <div class="title">{{ data.title }}</div>
      <div class="author">{{ data.author }}</div>
      <div class="time">{{ data.time }}</div>
    </div>
  </div>
</template>

<script>
import demo from "@/assets/images/demo.jpg";
export default {
  name: "card",
  data() {
    return {
      demo
    };
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
.card-container {
  color: #fff;
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: #ffffff;
    margin-top: 30px;
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
    &:hover {
      transform: translateY(-10px);
      transition: all 0.3s ease-in-out;
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
  .desc {
    font-size: 14px;
    margin-top: 10px;
    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .author {
      color: #dddddd;
    }
    .time {
      font-size: 12px;
    }
  }
}
</style>
