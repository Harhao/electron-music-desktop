<template>
  <div class="tab-wrapper">
    <h3 class="title">{{ data.title }}</h3>
    <div class="tab-list">
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="item in data.list"
          :key="item.name"
          :label="item.label"
          :name="item.name"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
    <main class="tab-view">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "tab",
  props: {
    data: {
      type: Object,
      default() {
        return {
          title: "",
          list: []
        };
      }
    }
  },
  data() {
    return {
      activeName: null
    };
  },
  watch: {
    activeName(val) {
      this.$router.push({ name: val });
    }
  },
  created() {
    this.activeName = this.data.list.length && this.data.list[0]["name"];
  }
};
</script>

<style scoped lang="scss">
.tab-wrapper {
  width: 100%;
  height: auto;
  & .title {
    color: #ffffff;
    font-size: 30px;
    font-family: "source-beauty";
  }
  .tab-list {
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
}
</style>
