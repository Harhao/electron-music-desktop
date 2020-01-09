<template>
  <div id="music-wrapper">
    <tab :data="tabData"/>
  </div>
</template>

<script>
import tab from "@/common/component/tab.vue";
export default {
  name: "player:music",
  components: {
    tab
  },
  data() {
    return {
      tabData: {
        title: "音乐馆",
        list: [
          {
            label: "精选",
            name: "featured",
            router: "/featured"
          },
          {
            label: "排行",
            name: "rank",
            router: "/rank"
          },
          {
            label: "歌手",
            name: "singer",
            router: "/singer"
          },
          {
            label: "分类歌单",
            name: "category",
            router: "/category"
          },
          {
            label: "数字专辑",
            name: "album",
            router: "/album"
          },
          {
            label: "有声节目",
            name: "sound ",
            router: "/sound "
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
