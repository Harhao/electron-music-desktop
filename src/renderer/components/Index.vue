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
#wrapper {
  width: 100%;
  height: 100%;
  .main-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    & .left-side {
      flex: 1;
      background-color: #151414;
    }
    & .right-side {
      flex: 4;
      background-color: #1b1a1a;
    }
  }
}
</style>
