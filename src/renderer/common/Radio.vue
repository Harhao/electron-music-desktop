<template>
  <div class="radio">
    <el-button
      v-for="(item, index) in data"
      :key="item.id"
      :type="index === activeIndex ? 'primary' : 'info'"
      size="small"
      @click="clickHandle(item, index)"
      >{{ item.label }}</el-button
    >
  </div>
</template>

<script>
export default {
  name: "radio",
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
      activeIndex: 0
    };
  },
  methods: {
    clickHandle(...args) {
      const [data, index] = args;
      this.activeIndex = index;
      this.$emit('change',data.id);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variable.scss";
.radio {
  /deep/ .el-button {
    width: 80px;
    font-size: 14px;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 6px 20px;
    font-family: "source-beauty";
    margin-top: 10px;
    border: 1px solid #3c3c3c;
  }
  /deep/ .el-button--info {
    @include new_window_color;
  }
}
</style>
