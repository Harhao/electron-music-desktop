<template>
  <div class="category-wrapper">
    <div class="category-list">
      <div class="category-item" v-for="(item, index) in categoryList" :key="index">{{ item.label }}</div>
    </div>
    <group title="精选歌单">
      <template slot="icon">
        <span class="tab" :class="{active: activeName === 'new'}">最新</span>
        <span class="tab" :class="{active: activeName === 'hot'}">最热</span>
      </template>
      <div class="card-wrapper">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
      <div class="card-wrapper">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
      <div class="card-wrapper">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
    </group>
  </div>
</template>

<script>
import group from "@/common/group";
import card from "@/common/card";
export default {
  name: "category",
  components: {
    group,
    card
  },
  data() {
    return {
      categoryList: [
        {
          label: "门店音乐",
          value: 1
        },
        {
          label: "节奏控",
          value: 2
        },
        {
          label: "运动",
          value: 3
        },
        {
          label: "官方歌单",
          value: 4
        },
        {
          label: "网络歌曲",
          value: 5
        },
        {
          label: "短视频热歌",
          value: 6
        },
        {
          label: "KTV金曲",
          value: 7
        },
        {
          label: "DJ神曲",
          value: 8
        },
        {
          label: "经典老歌",
          value: 9
        },
        {
          label: "睡前",
          value: 10
        },
        {
          label: "轻音乐",
          value: 11
        },
        {
          label: "全部",
          value: 12
        }
      ],
      activeName: "new"
    };
  }
};
</script>

<style scoped lang="scss">
.category-wrapper {
  width: 100%;
  height: auto;
  font-family: "source-beauty-light";
  .category-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
    .category-item {
      flex: 0 0 16%;
      text-align: center;
      color: #fff;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      background-color: #353434;
      border-radius: 5px;
      margin-top: 10px;
      cursor: pointer;
      &:hover {
        color: #17d28d;
        filter: brightness(0.8);
      }
    }
  }
  .tab {
    margin-left: 20px;
  }
  .card-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.active {
  color: #17d28d;
}
</style>
