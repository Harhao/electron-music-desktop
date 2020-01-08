<template>
  <div id="login-wrapper">
    <div class="header">
      <div class="login-ways">
        <div class="login-item active">QQ登录</div>
        <div class="login-item">微信登录</div>
      </div>
      <span class="icon close"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variable.scss";
#login-wrapper {
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
        color: #757474;
        cursor: pointer;
        outline: none;
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
}
.active {
  color: #17d28d !important;
}
</style>
