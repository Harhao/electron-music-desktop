<template>
  <div class="rank-list">
    <div class="rank-item" v-for="(item,index) in data" :key="item.id">
      <div class="badage" :class="{active: index < 3 }">{{index + 1}}</div>
      <div class="song-info">
        <img :src="demo" class="song-picture" />
        <div class="detail">
          <div class="name">{{item.name}}</div>
          <div class="author">{{item.author}}</div>
          <div class="public-time">发布时间：{{item.time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import demo from "@/assets/images/demo.jpg";
export default {
  name: "rank-list",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      demo
    };
  }
};
</script>

<style lang="scss" scoped>
.rank-list {
  .rank-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    .badage {
      width: 20px;
      height: 20px;
      line-height: 20px;
      margin: 0 50px 0 15px;
      text-align: center;
      font-size: 12px;
      color: #ffffff;
    }
    .song-info {
      display: flex;
      flex-direction: row;
      .song-picture {
        display: inline-block;
        width: 160px;
        height: 100px;
        border-radius: 8px;
      }
      .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #ffffff;
        font-size: 14px;
        padding: 0 20px;
        font-family: "source-beauty-light";
        .public-time {
          color: #a0a0a0;
          font-size: 12px;
        }
      }
    }
  }
}
.active {
  background-color: #17d28d;
}
</style>
