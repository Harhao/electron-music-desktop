<template>
  <div class="group-wrapper">
    <div class="header">
      <span class="title">{{ title }}</span>
      <div class="slot-content">
        <slot name="custom-content"></slot>
      </div>
      <span class="icon">
        <slot name="icon" @click="handleClick"></slot>
      </span>
    </div>
    <div class="group-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "group",
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped lang="scss">
.group-wrapper {
  width: 100%;
  box-sizing: border-box;
  // height: 300px;
  height: auto;
  font-family: 'source-beauty';
  .header {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .title {
      font-size: 22px;
      font-family: "source-beauty";
      font-weight: bold;
      color: #ffffff;
    }
    .slot-content {
      flex: 1;
      margin: 0 20px;
    }
    .icon {
      font-size: 14px;
      color: #dedede;
      cursor: pointer;
      -webkit-app-region: no-drag;
    }
  }
  .group-container {
    width: 100%;
    height: auto;
  }
}
</style>
