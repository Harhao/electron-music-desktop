<template>
  <div id="login-wrapper">
    <div class="header">
      <div class="login-ways">
        <div
          class="login-item"
          v-for="(item, index) in loginWaysList"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click="showLoginPane(index)"
        >
          {{ item }}
        </div>
      </div>
      <span class="icon close"></span>
    </div>
    <main class="login-content">
      <div class="login-QQ-input login-container">
        <div class="form">
          <div class="form-item">
            <span class="el-icon-user icon"></span>
            <input
              type="text"
              placeholder="账号"
              class="input-item"
              v-model="loginIput.number"
            />
            <span class="el-icon-arrow-down icon"></span>
          </div>
          <div class="form-item">
            <span class="el-icon-user icon"></span>
            <input
              type="text"
              placeholder="账号"
              class="input-item"
              v-model="loginIput.number"
            />
          </div>
        </div>
      </div>
      <!-- <div class="login-QQ-scan login-container">

      </div>
      <div class="login-wechat-scan login-container">

      </div> -->
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      loginWaysList: ["QQ登录", "微信登录"],
      loginIput: {
        number: "",
        password: ""
      }
    };
  },
  methods: {
    showLoginPane(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variable.scss";
#login-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -webkit-app-region: drag;
  @include new_window_color;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #333333;
    .login-ways {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
      .login-item {
        flex: 1;
        text-align: center;
        cursor: pointer;
        outline: none;
        color: #ffffff;
        -webkit-app-region: no-drag;
        font-family: "source-beauty";
      }
    }
    .icon {
      display: inline-block;
      cursor: pointer;
      outline: none;
      -webkit-app-region: no-drag;
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-position: center;
    }
    .close {
      background-image: url("~@/assets/images/close.png");
    }
  }
  .login-content {
    flex: 1;
    .login-container {
      display: flex;
      flex-direction: row;
      // align-items: center;
      width: 80%;
      height: 100%;
      margin: 0 auto;
      color: #ffffff;
      .form {
        width: 100%;
        box-sizing: border-box;
        padding-top: 50px;
        .form-item {
          width: 100%;
          height: 40px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          -webkit-app-region: no-drag;
          border-bottom: 1px solid #ffffff;
          margin-bottom: 20px;
          .icon {
            font-size: 18px;
            height: 60%;
          }
          .input-item {
            flex: 1;
            height: 60%;
            font-size: 14px;
            box-sizing: border-box;
            padding-left: 10px;
            outline: none;
            border: none;
            color: #ffffff;
            caret-color: #ffffff;
            background-color: none;
            -webkit-app-region: no-drag;
            margin-bottom: 2px;
            @include new_window_color;
          }
        }
      }
    }
  }
}
.active {
  color: #17d28d !important;
}
</style>
