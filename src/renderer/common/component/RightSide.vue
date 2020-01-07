<template>
  <div class="right-side-wrapper">
    <div class="tool-bar">
      <div class="tool-wrapper">
        <div class="left-tool"></div>
        <div class="right-tool">
          <section class="tool">
            <span class="icon skin"></span>
            <span class="icon fold"></span>
          </section>
          <span class="line"></span>
          <section class="tool">
            <span class="icon minium"></span>
            <span class="icon cut"></span>
            <span class="icon maxium"></span>
            <span class="icon close" @click="closeWindow"></span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeWindow() {
      this.$electron.ipcRenderer.send("window-close");
    }
  }
};
</script>

<style lang="scss" scoped>
.right-side-wrapper {
  width: 100%;
  height: 100%;
  & .tool-bar {
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
.skin {
  background-image: url("~@/assets/images/skin.png");
}
.fold {
  background-image: url("~@/assets/images/fold.png");
}
</style>
