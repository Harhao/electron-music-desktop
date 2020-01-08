<template>
  <el-dropdown class="dropDown" placement="top">
    <span class="icon skin"></span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <el-radio v-model="primaryColor" label="grey">棕熊灰</el-radio>
      </el-dropdown-item>
      <el-dropdown-item>
        <el-radio v-model="primaryColor" label="black">玄潭黑</el-radio>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      primaryColor: null
    };
  },
  watch: {
    primaryColor(val) {
      this.$store.dispatch("color/setColor", val);
    }
  },
  methods: {
    initColor() {
      this.primaryColor = this.$store.state.color.primaryColor;
    }
  },
  created() {
    this.initColor();
  }
};
</script>

<style scoped lang="scss">
.dropDown {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25px;
  height: 25px;
  .icon {
    display: inline-block;
    cursor: pointer;
    outline: none;
    -webkit-app-region: no-drag;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-position: center;
  }
}
.skin {
  background-image: url("~@/assets/images/skin.png");
}
</style>
