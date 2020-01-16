<template>
  <div class="drop-down" v-clickoutside="handleClick">
    <div class="drop-select" @click="show = !show">
      <span class="label" v-if="data.length">{{
        getLabelById(selectValue)
      }}</span>
      <span
        class="el-icon-arrow-down"
        :class="{ active: show, deactive: !show }"
      ></span>
    </div>
    <transition name="fade">
      <ul class="drop-list" v-if="show">
        <span class="tangle"></span>
        <li
          class="drop-item"
          v-for="item in data"
          :key="item.value"
          @click="clickItem(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </transition>
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
  },
  data() {
    return {
      show: false,
      selectValue: ""
    };
  },
  methods: {
    handleClick() {
      this.show = false;
    },
    clickItem(id) {
      this.selectValue = id;
      this.$emit("click", id);
      this.handleClick();
    },
    getLabelById(id) {
      if (id) {
        return (
          this.data.length &&
          this.data.filter(item => item.value === id)[0]["label"]
        );
      }
      return "";
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
      text-align: center;
      font-family: "source-beauty-light";
    }
  }
  & .drop-list {
    .tangle {
      position: absolute;
      top: -12px;
      left: 38%;
      content: "";
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-bottom: 7px solid #ffffff;
    }
    width: 100%;
    height: 150px;
    overflow-y: scroll;
    position: absolute;
    border-radius: 8px;
    border: 1px solid #312f2f;
    @include new_window_color;
    top: 30px;
    .drop-item {
      list-style: none;
      width: 100%;
      height: 25px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
      font-size: 14px;
      font-family: "source-beauty-light";
    }
  }
}
.active {
  transform: rotate(180deg);
  transition: all 0.3s ease-in-out;
}
.deactive {
  transform: rotate(0deg);
  transition: all 0.3s ease-in-out;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
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
