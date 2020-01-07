<template>
  <div class="right-side-wrapper">
    <div class="tool-bar">
      <div class="tool-wrapper">
        <div class="left-tool"></div>
        <div class="right-tool">
          <section class="tool">
            <span class="login icon" @click="createNewWindow"></span>
            <skin></skin>
            <span class="icon fold"></span>
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
    <main class="routerView">
      <router-view></router-view>
    </main>
    <!-- 播放控制面板占位 -->
    <player></player>
  </div>
</template>

<script>
import skin from "./skin";
import player from './player';
export default {
  components: {
    skin,
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
.right-side-wrapper {
  position: relative;
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
    -webkit-app-region: drag;
    .tool-wrapper {
      display: flex;
      flex-direction: row;
      width: 95%;
      height: 60px;
      .left-tool {
        flex: 2;
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
        .tool {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex: 1;
          .icon {
            display: inline-block;
            cursor: pointer;
            outline: none;
            -webkit-app-region: no-drag;
            width: 25px;
            height: 25px;
            background-repeat: no-repeat;
            background-position: center;
          }
        }
      }
    }
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
.fold {
  background-image: url("~@/assets/images/fold.png");
}
.login {
  background-image: url("~@/assets/images/login.png");
}
</style>
