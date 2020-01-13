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
    <transition name="slide">
      <music-detail v-if="isShowDetail"></music-detail>
    </transition>
    <transition name="slideIn">
      <queue v-if="isShowRight"></queue>
    </transition>
  </div>
</template>

<script>
import LeftSide from "@/layout/LeftSide.vue";
import RightSide from "@/layout/RightSide.vue";
import MusicDetail from "@/common/musicDetail.vue";
import Queue from "@/common/queue.vue";
export default {
  name: "index",
  components: {
    LeftSide,
    RightSide,
    MusicDetail,
    Queue
  },
  methods: {
    data() {
      return {};
    }
  },
  computed: {
    isShowDetail() {
      return this.$store.state.song.is_show_detail;
    },
    isShowRight() {
      return this.$store.state.song.is_show_right;
    }
  },
  created() {
    this.$router.push({ path: "/music" }).catch(err => {err});;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variable.scss";
#wrapper {
  position: relative;
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
.slide-enter-active,
.slide-leave-active {
  transform: translateY(0);
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
.slideIn-enter-active,
.slideIn-leave-active {
  transform: translateX(0%);
  transition: transform 0.5s ease-in-out;
}
.slideIn-enter,
.slideIn-leave-to {
  transform: translateX(30%);
}
</style>
