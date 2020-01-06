<template>
  <div class="left-side-wrapper">
    <header>
      <img :src="Logo"></img>
      <span class="desc">QQ 音乐</span>
    </header>
    <section class="menulist">
      <div class="menuItem">
        <div class="label">
          <span class="labelText">在线音乐</span>
        </div>
        <div class="content" aria-role="ul">
          <div class="labelItem">
            <i class="music icon"></i>
            <span class="value">音乐馆</span>
          </div>
          <div class="labelItem">
            <i class="video icon"></i>
            <span class="value">视频</span>
          </div>
          <div class="labelItem">
            <i class="broadcast icon"></i>
            <span class="value">电台</span>
          </div>
        </div>
      </div>
      <div class="menuItem top-distance">
        <div class="label">
          <span class="labelText">我的音乐</span>
        </div>
        <div class="content" aria-role="ul">
          <div class="labelItem">
            <i class="music icon"></i>
            <span class="value">本地和下载</span>
          </div>
          <div class="labelItem">
            <i class="video icon"></i>
            <span class="value">播放历史</span>
          </div>
          <div class="labelItem">
            <i class="broadcast icon"></i>
            <span class="value">试听列表</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '@/assets/images/logo.png'
export default {
  data() {
    return {
      Logo: Logo
    }
  }
}
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
    .desc {
      color: #ffffff;
      margin-left: 8px;
      font-family: 'source-beauty';
    }
  }
  .menulist {
    font-family: 'source-beauty-light';
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
        width: 60%;
        box-sizing: border-box;
        margin: 15px auto;
        padding: 0 5px;
        font-size: 14px;
        cursor: pointer;
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
          background-image: url('~@/assets/images/music.png');
        }
        .video {
          background-image: url('~@/assets/images/video.png');
        }
        .broadcast {
          background-image: url('~@/assets/images/broadcast.png');
        }
        .value {
          color: #ffffff;
          font-weight: normal;
          margin-left: 5px;
        }
      }
      .labelItem:hover {
        background-color: #17d28d;
      }
    }
  }
}
.top-distance {
  margin-top: 50px !important;
}
</style>