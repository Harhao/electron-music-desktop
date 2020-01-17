<template>
  <div class="album-wrapper">
    <slider></slider>
    <group title="最新上架">
      <div class="card-wrapper">
        <div class="card-item">
          <card :showIcon="true"></card>
          <span class="button">立刻购买</span>
        </div>
        <div class="card-item">
          <card :showIcon="true"></card>
          <span class="button">立刻购买</span>
        </div>
        <div class="card-item">
          <card :showIcon="true"></card>
          <span class="button">立刻购买</span>
        </div>
        <div class="card-item">
          <card :showIcon="true"></card>
          <span class="button">立刻购买</span>
        </div>
      </div>
    </group>
    <group title="本周最热">
      <template slot="icon">
        <span>更多<i class="el-icon-arrow-right"></i></span>
      </template>
      <div class="card-wrapper">
        <div class="card-item">
          <card :showIcon="true"></card>
          <span class="button">立刻购买</span>
        </div>
        <div class="card-item">
          <card :showIcon="true"></card>
          <span class="button">立刻购买</span>
        </div>
        <div class="card-item">
          <card :showIcon="true"></card>
          <span class="button">立刻购买</span>
        </div>
        <div class="card-item">
          <card :showIcon="true"></card>
          <span class="button">立刻购买</span>
        </div>
      </div>
    </group>
  </div>
</template>

<script>
import slider from "@/common/slider.vue";
import group from "@/common/group.vue";
import card from "@/common/card.vue";
export default {
  name: "album",
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
.album-wrapper {
  .sub-title {
    font-size: 14px;
    color: #dedede;
    -webkit-user-select: none;
  }
  .card-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    .card-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: auto;
      .button {
        font-size: 14px;
        padding: 0 15px;
        color: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 8px;
        margin-top: 15px;
        cursor: pointer;
        font-family: "source-beauty-light";
      }
    }
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
