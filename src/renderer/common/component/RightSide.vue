<template>
  <div class="right-side-wrapper">
    <div class="tool-bar">
      <div class="tool-wrapper">
        <div class="left-tool">
          <section class="tool">
            <span class="icon el-icon-arrow-left"></span>
            <span class="icon el-icon-arrow-right"></span>
            <input type="text" class="search-word" placeholder="搜索音乐" />
            <span class="icon el-icon-cpu"></span>
          </section>
          <section class="tool"></section>
        </div>
        <div class="right-tool">
          <section class="tool">
            <span class="login icon" @click="createNewWindow"></span>
            <skin></skin>
            <drop-menu></drop-menu>
          </section>
          <span class="line"></span>
          <section class="tool">
            <span
              class="icon minium"
              @click="operateWindow('window-minium')"
            ></span>
            <span class="icon cut" @click="operateWindow('window-cut')"></span>
            <span
              class="icon maxium"
              @click="operateWindow('window-maxium')"
            ></span>
            <span
              class="icon close"
              @click="operateWindow('window-close')"
            ></span>
          </section>
        </div>
      </div>
    </div>
    <main class="routerView" id="routerView">
      <router-view></router-view>
    </main>
    <!-- 播放控制面板占位 -->
    <player></player>
  </div>
</template>

<script>
import skin from "./skin";
import dropMenu from "./menu";
import player from "./player";
export default {
  components: {
    skin,
    dropMenu,
    player
  },
  methods: {
    createNewWindow() {
      this.$electron.ipcRenderer.send("createLoginWindow");
    },
    operateWindow(operateName) {
      this.$electron.ipcRenderer.send(operateName);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variable.scss";
.right-side-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  & .tool-bar {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    line-height: 80px;
    z-index: 99;
    -webkit-app-region: drag;
    @include right_side_color;
    .tool-wrapper {
      display: flex;
      flex-direction: row;
      width: 95%;
      height: 60px;
      .left-tool {
        flex: 2;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .line {
        width: 2px;
        height: 15px;
        margin: 0 15px;
        background-color: #ffffff;
      }
      .right-tool {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1;
      }
      .tool {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        .search-word {
          display: inline-block;
          box-sizing: border-box;
          height: 30px;
          border: none;
          outline: none;
          border-radius: 20px;
          padding-left: 30px;
          margin-right: 10px;
          caret-color: #ffffff;
          color: #ffffff;
          background: url("~@/assets/images/search.png") no-repeat 7px center;
          -webkit-app-region: no-drag;
          @include new_window_color;
        }
        .icon {
          display: inline-block;
          cursor: pointer;
          outline: none;
          -webkit-app-region: no-drag;
          width: 25px;
          height: 25px;
          line-height: 25px;
          color: #ffffff;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }
  .routerView {
    padding: 80px 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    -webkit-drag-region: no-drag;
  }
}
.cut {
  background-image: url("~@/assets/images/cut.png");
}
.minium {
  background-image: url("~@/assets/images/minium.png");
}
.maxium {
  background-image: url("~@/assets/images/maxium.png");
}
.close {
  background-image: url("~@/assets/images/close.png");
}
.login {
  background-image: url("~@/assets/images/login.png");
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  @include right_side_color
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
