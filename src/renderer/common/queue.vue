<template>
  <div class="queue-wrapper" @click="clickOutSide">
    <transition name="slide">
      <div class="right-side" v-if="isShowRight"></div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "queue",
  methods: {
    clickOutSide(e) {
      e.stopPropagation();
      e.preventDefault();
      if(!Array.from(e.target.classList).includes('right-side')) {
          this.$store.dispatch('song/set_right_show',false);
      }
    }
  },
  computed: {
    isShowRight() {
      return this.$store.state.song.is_show_right;
    }
  }
};
</script>

<style scoped lang="scss">
.queue-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  & .right-side {
    width: 30%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 1);
  }
}

</style>