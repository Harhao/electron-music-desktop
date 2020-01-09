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
      <span class="icon close" @click="closeModal"></span>
    </div>
    <main class="login-content">
      <div class="login-QQ-input login-container" v-show="activeIndex === 0">
        <div class="form">
          <div class="form-item">
            <span class="el-icon-user icon"></span>
            <input
              type="text"
              placeholder="请输入QQ号"
              class="input-item"
              v-model="loginIput.number"
            />
            <span class="el-icon-arrow-down icon"></span>
          </div>
          <div class="form-item">
            <span class="el-icon-lock icon"></span>
            <input
              type="password"
              placeholder="请输入密码"
              class="input-item"
              v-model="loginIput.password"
            />
          </div>
          <div class="auto-login">
            <el-checkbox v-model="loginIput.autoLogin">自动登录</el-checkbox>
          </div>
          <div class="submit">
            <button class="submit-button">立刻登录</button>
            <div class="agree-license">
              <el-checkbox v-model="loginIput.license"
                >同意《用户许可协议》《隐私协议》</el-checkbox
              >
            </div>
            <div class="scan-qq">
              <span class="scan" @click="activeIndex = 2">QQ扫描登录</span>
            </div>
          </div>
        </div>
      </div>
      <div class="login-QQ-scan login-container" v-show="activeIndex === 2">
        <div class="qr-code">
          <img :src="qrCode" />
        </div>
        <div class="scan-tips">
          <div class="tips-first">请使用手机QQ扫描二维码登录</div>
          <div class="tips-second">手机QQ扫码登录目前不支持自动登录</div>
          <div class="operate">
            <span class="login-password" @click="activeIndex = 0">账号密码登录</span>
          </div>
        </div>
      </div>
      <div
        class="login-wechat-scan login-container"
        v-show="activeIndex === 1"
      >
        <div class="qr-code">
          <img :src="qrCode" />
        </div>
        <div class="scan-tips">
          <div class="tips-first">请使用微信扫描二维码登录</div>
          <div class="tips-second">QQ与微信账号的音乐资产、付费特权不互通</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import qrCode from "@/assets/images/qr-code.png";
export default {
  data() {
    return {
      qrCode: qrCode,
      activeIndex: 0,
      loginWaysList: ["QQ登录", "微信登录"],
      loginIput: {
        number: "",
        password: "",
        autoLogin: false,
        license: true
      }
    };
  },
  methods: {
    showLoginPane(index) {
      this.activeIndex = index;
    },
    closeModal() {
      this.$electron.ipcRenderer.send('closeLoginWindow')
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
      flex-direction: column;
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
          border-bottom: 1px solid #444343;
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
        /deep/ .el-checkbox__label {
          font-size: 12px;
        }
        .auto-login {
          text-align: right;
          margin-bottom: 30px;
          -webkit-app-region: no-drag;
        }
        .submit {
          width: 90%;
          height: 40px;
          margin: 0 auto;
          -webkit-app-region: no-drag;
          .submit-button {
            display: inline-block;
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            border-radius: 20px;
            color: #ffffff;
            font-size: 14px;
            cursor: pointer;
            background-color: #17d28d;
            &:active {
              filter: brightness(85%);
            }
          }
          .agree-license {
            margin-top: 20px;
            text-align: center;
            -webkit-app-region: no-drag;
          }
          .scan-qq {
            width: 100%;
            font-size: 12px;
            margin-top: 30px;
            text-align: right;
            .scan {
              cursor: pointer;
              letter-spacing: 3px;
              -webkit-app-region: no-drag;
              &:hover {
                color: #17d28d;
              }
            }
          }
        }
      }
      .qr-code {
        width: 100%;
        margin-top: 50px;
        text-align: center;
        & > img {
          width: 60%;
          height: auto;
          border-radius: 5px;
        }
      }
      .scan-tips {
        width: 100%;
        margin-top: 20px;
        .tips-first,
        .tips-second {
          font-size: 12px;
          margin-top: 15px;
          color: #a29c9c;
          text-align: center;
        }
        .operate {
          width: 100%;
          text-align: right;
          margin-top: 40px;
          .login-password {
            color: #a29c9c;
            font-size: 12px;
            cursor: pointer;
            -webkit-app-region: no-drag;
            &:hover {
              color: #17d28d;
            }
          }
        }
      }
      .operate {
        width: 100%;
      }
    }
  }
}
.active {
  color: #17d28d !important;
}
</style>
