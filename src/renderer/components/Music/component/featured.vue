<template>
  <div class="featured">
    <slider></slider>
    <group title="官方歌单">
      <template slot="custom-content">
        <span class="sub-title">官方甄选订阅歌单</span>
      </template>
      <template slot="icon">
        <span>更多<i class="el-icon-arrow-right"></i></span>
      </template>
      <div class="card-wrapper">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
    </group>
    <group title="推荐歌单">
      <template slot="icon">
        <span>更多<i class="el-icon-arrow-right"></i></span>
      </template>
      <div class="card-wrapper">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
    </group>
    <group title="推荐视频">
      <template slot="icon">
        <span>更多<i class="el-icon-arrow-right"></i></span>
      </template>
      <div class="card-wrapper">
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
      </div>
    </group>
    <group title="最新发行">
      <template slot="custom-content">
        <div class="tab-list">
          <span v-for="(item,index) in tabList" :key="item.id" :class="{active: index === activeIndex}">{{item.name}}</span>
        </div>
      </template>
      <template slot="icon">
        <span>更多<i class="el-icon-arrow-right"></i></span>
      </template>
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
import slider from "@/common/slider.vue";
import group from "@/common/group.vue";
import card from "@/common/card.vue";
export default {
  components: {
    slider,
    group,
    card
  },
  data() {
    return {
      activeIndex: 0,
      tabList: [
        {
          id: 1,
          name: "最新"
        },
        {
          id: 2,
          name: "内地"
        },
        {
          id: 3,
          name: "港台"
        },
        {
          id: 4,
          name: "欧美"
        },
        {
          id: 5,
          name: "日韩"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.featured {
  .sub-title {
    font-size: 14px;
    color: #dedede;
    -webkit-user-select: none;
  }
  .card-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
  }
  .tab-list {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-around;
    color: #dedede;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
}
.active {
  color: #17d28d !important;
}
</style>
