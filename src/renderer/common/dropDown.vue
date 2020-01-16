<template>
  <div class="drop-down">
    <div class="drop-select">
      <span class="label"></span>
      <span class="el-icon-arrow-down"></span>
    </div>
    <ul class="drop-list">
      <li class="drop-item" v-for="item in data" :key="item.value">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "drop-down",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variable.scss";
.drop-down {
  position: relative;
  width: 70px;
  height: 30px;
  color: #ffffff;
  cursor: pointer;
  & .drop-select {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .label {
      flex: 1;
    }
  }
  & .drop-list {
    &::before {
      position: absolute;
      top: -12px;
      left: 38%;
      content: "";
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-bottom: 7px solid #ffffff;
    }
    display: block;
    width: 100%;
    height: 150px;
    overflow-y: scroll;
    position: absolute;
    border-radius: 8px;
    background-color: #ffffff;
    top: 30px;
    .drop-item {
      display: block;
      list-style: none;
      width: 100%;
      height: 25px;
      line-height: 25px;
      text-align: center;
      color: #333;
      font-size: 14px;
      font-family: "source-beauty-light";
    }
  }
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  @include right_side_color;
}
::-webkit-scrollbar-thumb {
  background-color: #333;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #777;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
</style>