<template>
  <div class="listen-wrapper">
    <blank :tips="tips" :route="route">
      <button class="redirect" slot="extend">
        <i class="el-icon-add"></i>
        <span>添加</span>
      </button>
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
      tips: "没有本地歌曲",
      route: {
        name: "/music",
        content: "本地歌曲恢复助手"
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