<template>
  <div class="song-wrapper">
    <div class="song-info">
      <span class="like"></span>
      <div class="song-detail">
        <img :src="demo" class="poster" />
        <div class="song-text">
          <div class="song-title">
            <span>古风情话 | 心中藏你，何日忘你</span>
            <div class="icon"></div>
          </div>
          <div class="song-desc">民谣歌曲</div>
        </div>
        <slot name="extend"></slot>
      </div>
    </div>
    <div class="song-operate">
      <span class="icon play"></span>
      <span class="icon add"></span>
      <span class="icon download"></span>
      <span class="icon menu"></span>
    </div>
  </div>
</template>

<script>
import demo from "@/assets/images/demo.jpg";
export default {
  name: "song",
  data() {
    return {
      demo
    };
  }
};
</script>

<style scoped lang="scss">
.song-wrapper {
  display: flex;
  flex-direction: row;
  flex: 0 0 50%;
  padding: 10px 0;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background-color: #333;
  }
  &:hover .song-operate {
    display: flex !important;
    align-items: center;
    justify-content: space-around;
  }
  .song-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .like {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 8px;
      cursor: pointer;
      background-image: url("~@/assets/images/heart.png");
      background-position: center;
      background-size: contain;
      &:hover {
        background-image: url("~@/assets/images/heartHover.png");
      }
    }
    .song-detail {
      display: flex;
      width: 220px;
      flex-direction: row;
      .poster {
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 8px;
      }
      .song-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #ffffff;
        font-size: 14px;
        font-family: "source-beauty-light";
        padding: 0 15px;
      }
    }
  }
  .song-operate {
    display: none;
    flex: 1;
    box-sizing: border-box;
    padding: 0 10px;
    .icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-position: center;
      background-size: contain;
    }
    .play {
      background-image: url("~@/assets/images/playIcon.png");
      &:hover {
        background-image: url("~@/assets/images/playHover.png");
      }
    }
    .add {
      background-image: url("~@/assets/images/add.png");
      &:hover {
        background-image: url("~@/assets/images/addHover.png");
      }
    }
    .download {
      background-image: url("~@/assets/images/download.png");
      &:hover {
        background-image: url("~@/assets/images/downloadHover.png");
      }
    }
    .menu {
      background-image: url("~@/assets/images/menu.png");
      &:hover {
        background-image: url("~@/assets/images/menuHover.png");
      }
    }
  }
}
</style>