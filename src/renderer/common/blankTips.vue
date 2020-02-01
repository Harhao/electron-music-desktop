<template>
  <div class="blank-data">
    <img :src="sound" class="icon" />
    <div class="tips">没有试听记录</div>
    <button class="redirect" @click="$router.push({name:'music'})">去音乐馆看看</button>
  </div>
</template>

<script>
import sound from "@/assets/images/sound.png";
export default {
  name: "blankTips",
  data() {
    return {
      sound
    };
  }
};
</script>

<style scoped lang="scss">
.blank-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: auto;
  font-family: "source-beauty-light";
  .icon {
    display: inline-block;
    width: 128px;
    height: 128px;
  }
  .tips {
    font-size: 16px;
    color: #ffffff;
  }
  .redirect {
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    outline: none;
    padding: 10px 30px;
    margin-top: 8px;
    background-color: rgb(30, 30, 32);
    font-family: "source-beauty-light";
    border: 1px solid #464646;
    &:hover {
      background-color: #353434;
    }
    &:active {
      filter: brightness(0.5);
    }
  }
}
</style>