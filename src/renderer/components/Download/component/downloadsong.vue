<template>
  <div class="listen-wrapper">
    <blank :tips="tips" :route="route"></blank>
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
      tips: "没有已下载的歌曲",
      route: {
        name: "/",
        content: "去音乐馆逛逛"
      }
    };
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