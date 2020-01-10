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
  }
};
</script>

<style scoped lang="scss">
.featured {
  margin-bottom: 70px;
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
}
</style>
