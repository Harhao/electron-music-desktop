<template>
  <div
    class="drop-down"
    v-clickoutside="handleClick"
    :style="{ width: width + 'px' }"
  >
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
    },
    width: {
      type: Number,
      default: 90
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
    },
    init() {
      this.selectValue = this.data.length && this.data[0]["value"];
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variable.scss";
.drop-down {
  position: relative;
  height: 30px;
  color: #ffffff;
  cursor: pointer;
  & .drop-select {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .label {
      flex: 1;
      text-align: center;
      font-size: 12px;
      font-family: "source-beauty";
      color: #a0a0a0;
    }
  }
  & .drop-list { 
    width: 100%;
    height: 150px;
    overflow-y: scroll;
    position: absolute;
    border-radius: 8px;
    box-shadow: 1px 5px 19px #2f2f2f;
    background-color: #101010;
    top: 30px;
    z-index: 10;
    .drop-item {
      list-style: none;
      width: 100%;
      height: 25px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
      font-size: 12px;
      font-family: "source-beauty-light";
      padding: 5px 0;
      &:hover {
        color: #17d28d;
      }
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
