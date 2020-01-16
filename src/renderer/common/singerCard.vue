<template>
  <div class="singer-card">
    <img :src="demo" class="avatar" v-if="index <= 20" />
    <div class="singer-info">
      <div
        class="rank-index"
        :class="{ active: index <= 3 }"
        v-if="index <= 20"
      >
        {{ index }}
      </div>
      <div class="singer-name">{{ data.name }}</div>
    </div>
  </div>
</template>

<script>
import demo from "@/assets/images/demo.jpg";
export default {
  name: "singer-card",
  props: {
    data: {
      type: Object,
      default() {
        return {
          url: null,
          name: null
        };
      }
    },
    index: {
      type: String | Number,
      default: ""
    }
  },
  data() {
    return {
      demo
    };
  }
};
</script>

<style scoped lang="scss">
.singer-card {
  height: auto;
  color: #ffffff;
  flex: 0 0 25%;
  font-family: "source-beauty-light";
  text-align: center;
  margin-bottom: 20px;
  & .avatar {
    display: inline-block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .singer-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .rank-index {
      width: 15px;
      height: 15px;
      line-height: 15px;
      text-align: center;
      font-size: 12px;
      margin-right: 10px;
    }
  }
}
.active {
  background-color: #17d28d;
}
</style>
