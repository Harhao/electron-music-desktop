<template>
  <div class="download">
    <tab :data="tabData" ref="tabWrapper"/>
  </div>
</template>

<script>
import tab from "@/common/tab.vue";
export default {
  name: "download",
  components: {
    tab
  },
  data() {
    return {
      tabData: {
        title: "本地和下载",
        list: [
          {
            label: "本地歌曲",
            name: "localsong"
          },
          {
            label: "下载歌曲",
            name: "downloadsong"
          },
          {
            label: "下载视频",
            name: "downloadvideo"
          },
          {
            label: "正在下载",
            name: "pending"
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
</style>
