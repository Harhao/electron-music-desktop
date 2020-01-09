<template>
  <div class="left-side-wrapper">
    <header>
      <img :src="Logo" />
      <span class="desc">QQ 音乐</span>
    </header>
    <section class="menulist">
      <div
        class="menuItem"
        v-for="(section, index) in routerList"
        :key="index"
        :class="section.className ? section.className : ''"
      >
        <div class="label">
          <span class="labelText">{{ section.labelText }}</span>
        </div>
        <div class="content" aria-role="ul">
          <router-link
            class="labelItem"
            v-for="item in section.sectionData"
            :key="item.className"
            :to="item.url"
            :class="{ active: item.className === activeName }"
            @click="showActiveRoute(item.className)"
            tag="div"
          >
            <i class="icon" :class="item.className"></i>
            <span class="value">{{ item.label }}</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.png";
export default {
  data() {
    return {
      Logo: Logo,
      activeName: "music",
      routerList: [
        {
          className: "",
          labelText: "在线音乐",
          sectionData: [
            {
              label: "音乐馆",
              className: "music",
              url: "/music"
            },
            {
              label: "视频",
              className: "video",
              url: "/video"
            },
            {
              label: "电台",
              className: "broadcast",
              url: "/broadcast"
            }
          ]
        },
        {
          className: "top-distance",
          labelText: "我的音乐",
          sectionData: [
            {
              label: "本地和下载",
              className: "computer",
              url: "/download"
            },
            {
              label: "播放历史",
              className: "time",
              url: "/history"
            },
            {
              label: "试听列表",
              className: "listen",
              url: "/listen"
            }
          ]
        }
      ]
    };
  },
  methods: {
    showActiveRoute(className) {
      this.activeName = className;
    }
  }
};
</script>

<style lang="scss" scoped>
.left-side-wrapper {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  & > header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 18px;
    padding: 10px 0;
    img {
      -webkit-user-select: none;
    }
    .desc {
      color: #ffffff;
      margin-left: 8px;
      font-family: "source-beauty";
    }
  }
  .menulist {
    font-family: "source-beauty-light";
    & .menuItem {
      margin-top: 10px;
      .label {
        width: 100%;
        text-align: center;
        .labelText {
          display: inline-block;
          width: 50%;
          font-size: 14px;
          text-align: left;
          color: #a79e9e;
        }
      }
      .labelItem {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70%;
        box-sizing: border-box;
        margin: 15px auto;
        padding: 0 5px;
        cursor: pointer;
        font-size: 14px;
        border-radius: 4px;
        .icon {
          display: inline-block;
          width: 25px;
          height: 25px;
          line-height: 25px;
          background-repeat: no-repeat;
          background-position: center;
        }
        .music {
          background-image: url("~@/assets/images/music.png");
        }
        .video {
          background-image: url("~@/assets/images/video.png");
        }
        .broadcast {
          background-image: url("~@/assets/images/broadcast.png");
        }
        .computer {
          background-image: url("~@/assets/images/computer.png");
        }
        .time {
          background-image: url("~@/assets/images/time.png");
        }
        .listen {
          background-image: url("~@/assets/images/listen.png");
        }
        .value {
          color: #ffffff;
          font-weight: normal;
          margin-left: 5px;
        }
        &:hover {
          background-color: #525252;
        }
      }
    }
  }
}
.top-distance {
  margin-top: 50px !important;
}
.active {
  background-color: #17d28d !important;
}
</style>
