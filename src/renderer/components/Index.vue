<template>
  <div id="wrapper">
    <main class="main-container">
      <div class="left-side">
        <left-side></left-side>
      </div>
      <div class="right-side">
        <right-side></right-side>
      </div>
    </main>
  </div>
</template>

<script>
import LeftSide from "@/common/component/LeftSide.vue";
import RightSide from "@/common/component/RightSide.vue";
export default {
  name: "index",
  components: {
    LeftSide,
    RightSide
  },
  methods: {
    data() {
      return {};
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variable.scss';
#wrapper {
  width: 100%;
  height: 100%;
  .main-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    .left-side {
      @include left_side_color;
      flex: 1;
    }
    .right-side {
      @include right_side_color;
      flex: 4;
    }
  }
}
</style>
