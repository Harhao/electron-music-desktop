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
            <span>音乐馆</span>
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
    margin-top: 10px;
    & .menuItem {
      .label {
        width: 100%;
        text-align: center;
        .labelText {
          display: inline-block;
          width: 50%;
          font-size: 12px;
          text-align: left;
          color: #a79e9e;
        }
      }
    }
  }
}
</style>