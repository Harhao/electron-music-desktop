<template>
  <div class="tab-wrapper">
    <header id="tab-header" class="fixed">
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
    </header>
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
  methods: {
    setActiveName() {
      this.activeName = this.data.list.length && this.data.list[0]["name"];
    }
  },
  watch: {
    activeName(val) {
      this.$router.push({ name: val });
    }
  },
  created() {
    this.setActiveName();
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/variable.scss";
.tab-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  #tab-header {
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
}
.fixed {
  position:sticky;
  top: 0px;
  z-index: 999;
  @include right_side_color;
}
</style>
