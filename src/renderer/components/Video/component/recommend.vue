<template>
  <div class="recommend">
    <slider></slider>
    <group title="推荐视频">
      <template slot="icon">
        <span>更多<i class="el-icon-arrow-right"></i></span>
      </template>
      <div class="card-wrapper">
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
      </div>
      <div class="card-wrapper">
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
      </div>
      <div class="card-wrapper">
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
      </div>
      <div class="card-wrapper">
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
        <card :showIcon="true" width="220"></card>
      </div>
    </group>
  </div>
</template>

<script>
import slider from "@/common/slider.vue";
import group from "@/common/group.vue";
import card from "@/common/card.vue";
export default {
  name: "recommend",
  components: {
    slider,
    group,
    card
  },
  data() {
    return {
      activeIndex: 0
    };
  }
};
</script>

<style scoped lang="scss">
.recommend {
  width: 100%;
  height: auto;
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
