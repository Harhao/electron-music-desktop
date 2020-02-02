<template>
  <div class="blank-data">
    <img :src="sound" class="icon" />
    <div class="tips">{{tips}}</div>
    <div class="btn-group">
      <slot name="extend"></slot>
      <button class="redirect" @click="$router.push({name: route.name})">{{route.content}}</button>
    </div>
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
  },
  props: {
    tips: {
      type: String,
      default: "暂无内容"
    },
    route: {
      type: Object,
      default() {
        return {
          name: "/",
          content: "去音乐馆看看"
        };
      }
    }
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
  min-height: 300px;
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
  .btn-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .redirect {
      cursor: pointer;
      color: #fff;
      font-size: 14px;
      outline: none;
      padding: 10px;
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
}
</style>