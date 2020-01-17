<template>
  <div class="broadcast">
    <div class="card-wrapper">
      <img :src="demo" />
      <div class="desc">
        <span class="label">个性电台</span>
        <div class="operate">立刻体验</div>
        <div class="tips">根据你的口味定制</div>
        <div class="icons">
          <span class="el-icon-star-off icon"></span>
          <span class="el-icon-star-off icon"></span>
          <span class="el-icon-star-off icon"></span>
          <span class="el-icon-star-off icon"></span>
        </div>
      </div>
    </div>
    <group title="热门">
      <div class="card-list">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
    </group>
    <group title="心情">
      <div class="card-list">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
    </group>
    <group title="主题">
      <div class="card-list">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
    </group>
  </div>
</template>

<script>
import demo from "@/assets/images/demo.jpg";
import group from "@/common/group.vue";
import card from "@/common/card.vue";
export default {
  name: "broadcast",
  components: {
    group,
    card
  },
  data() {
    return {
      demo
    };
  }
};
</script>

<style scoped lang="scss">
.broadcast {
  .card-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 150px;
    padding: 0 15px;
    color: #ffffff;
    font-family: "source-beauty-light";
    background: linear-gradient(to right, rgb(0, 15, 25), rgb(0, 21, 34));
    border-radius: 5px;
    & > img {
      width: 138px;
      height: 122px;
      border-radius: 5px;
    }
    .desc {
      flex: 1;
      .operate {
        text-align: center;
      }
      .label,
      .tips {
        display: inline-block;
        width: 100%;
        font-size: 12px;
        text-align: center;
      }
      .icons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
        .icon:hover {
          color: #17d28d;
        }
      }
    }
  }
  .card-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width:100%;
    height: auto;
  }
}
</style>
