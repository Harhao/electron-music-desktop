<template>
  <el-dropdown class="dropDown" placement="top">
    <span class="icon fold"></span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        
      </el-dropdown-item>
      <el-dropdown-item>
        
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "drop-menu",
  data() {
    return {};
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
.fold {
  background-image: url("~@/assets/images/fold.png");
}
</style>
