<template>
  <div class="queue-wrapper" @click="clickOutSide">
    <div class="right-side">
      <div class="top-header">
        <h3 class="title">播放队列</h3>
        <div class="song-count">
          <span class="count">10首歌曲</span>
          <span class="operate">
            <i class="el-icon-s-unfold"></i>
            <i class="el-icon-delete"></i>
          </span>
        </div>
      </div>
      <div class="song-list">
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
        <div class="song">
          <div class="song-info">
            <span class="name">麻雀</span>
            <span class="author">李荣浩</span>
          </div>
          <div class="song-operate">
            <span class="time">04:39</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span class="el-icon-right icon"></span>
        <span class="babel">收起</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "queue",
  methods: {
    clickOutSide(e) {
      e.stopPropagation();
      e.preventDefault();
      if (!Array.from(e.target.classList).includes("right-side")) {
        this.$store.dispatch("song/set_right_show", false);
      }
    }
  },
  computed: {
    isShowRight() {
      return this.$store.state.song.is_show_right;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variable.scss";
.queue-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  & .right-side {
    width: 30%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-left: 1px solid #3c3838;
    font-family: "source-beauty";
    -webkit-app-region: no-drag;
    @include new_window_color;
    .top-header {
      width: 100%;
      position: absolute;
      top: 0;
      padding: 20px;
      box-sizing: border-box;
      @include new_window_color;
      .title {
        color: #ffffff;
        font-weight: normal;
      }
      .song-count {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #dedede;
        .count {
          font-size: 12px;
        }
        .operate {
          font-size: 18px;
        }
      }
    }
    .song-list {
      width: 100%;
      height: 100%;
      margin-top: 130px;
      overflow: scroll;
      .song {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        cursor: pointer;
        padding: 0 20px;
        &:hover {
          @include right_side_color;
        }
        .song-info {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .name {
            color: #ffffff;
            font-size: 14px;
          }
          .author {
            color: #dedede;
            font-size: 14px;
          }
        }
        .song-operate {
          color: #dedede;
          font-size: 12px;
        }
      }
    }
    .bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 70px;
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
      @include new_window_color;
      border-top: 1px solid #3e3c3c;
      & .icon {
        color: #ffffff;
        font-size: 18px;
      }
      .babel {
        font-size: 14px;
        margin-right: 20px;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  @include right_side_color;
}
::-webkit-scrollbar-thumb {
  background-color: #333;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #777;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
</style>