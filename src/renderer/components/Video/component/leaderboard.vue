<template>
  <div class="leaderboard">
    <div class="header">
      <img :src="demo" class="banner"/>
      <div class="desc-wrapper">
        <div class="title">巅峰榜·MV</div>
        <div class="select-wrapper"></div>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-wrapper">
      <el-tab-pane
        v-for="item in titleList"
        :label="item.label"
        :name="item.value"
        :key="item.value"
      >
        <rank-list :data="rankList"></rank-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import demo from "@/assets/images/demo.jpg";
import rankList from "@/common/rankList.vue";
export default {
  name: "leaderboard",
  components: {
    rankList
  },
  data() {
    return {
      demo,
      activeName: "rank",
      titleList: [
        {
          label: "总榜",
          value: "rank"
        },
        {
          label: "内地",
          value: "land"
        },
        {
          label: "港台",
          value: "seaside"
        },
        {
          label: "欧美",
          value: "eurpean"
        },
        {
          label: "韩国",
          value: "korean"
        },
        {
          label: "日本",
          value: "japan"
        }
      ],
      rankList: [
        {
          url: "",
          name: "hello",
          author: "具荷拉",
          time: "2019-09-10"
        },
        {
          url: "",
          name: "hello",
          author: "具荷拉",
          time: "2019-09-10"
        },
        {
          url: "",
          name: "hello",
          author: "具荷拉",
          time: "2019-09-10"
        },
        {
          url: "",
          name: "hello",
          author: "具荷拉",
          time: "2019-09-10"
        },
      ]
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style scoped lang="scss">
.leaderboard {
  margin-top: 20px;
  .header {
    display: flex;
    flex-direction: row;
    .banner {
      width: 160px;
      height: 160px;
      border-radius: 8px;
    }
    .desc-wrapper {
      flex: 1;
      padding: 15px 20px;
      box-sizing: border-box;
      .title {
        font-weight: bold;
        font-size: 24px;
        font-family: 'source-beauty';
        color: #ffffff;
      }
    }
  }
  .tab-wrapper {
    margin-top: 20px;
  }
  /deep/ .el-tabs__item {
    color: #ffffff;
    font-family: "source-beauty";
  }
  /deep/ .el-tabs__nav-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    z-index: 1;
  }
}
</style>