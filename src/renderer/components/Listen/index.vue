<template>
  <div class="listen-wrapper">
    <blank :tips="tips" :route="route">
    </blank>
  </div>
</template>

<script>
import blank from "@/common/blankTips.vue";
export default {
  name: "listen",
  components: {
    blank
  },
  data() {
    return {
      tips: '没有试听记录',
      route: {
        name: '/music',
        content: '去音乐馆看看'
      }
    }
  }
};
</script>

<style scoped lang="scss">
.listen-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>

