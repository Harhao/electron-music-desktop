<template>
  <div id="music-wrapper">
    <tab :data="tabData" ref="tabWrapper"/>
  </div>
</template>

<script>
import tab from "@/common/tab.vue";
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
            name: "featured"
          },
          {
            label: "排行",
            name: "rank"
          },
          {
            label: "歌手",
            name: "singer"
          },
          {
            label: "分类歌单",
            name: "category"
          },
          {
            label: "数字专辑",
            name: "album"
          },
          {
            label: "有声节目",
            name: "sound"
          }
        ]
      }
    };
  }
};
</script>
