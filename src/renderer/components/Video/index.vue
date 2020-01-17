<template>
  <div class="video-wrapper">
    <tab :data="tabData" ref="tabWrapper" />
  </div>
</template>

<script>
import tab from "@/common/tab.vue";
export default {
  name: "video",
  components: {
    tab
  },
  data() {
    return {
      tabData: {
        title: "视频",
        list: [
          {
            label: "推荐",
            name: "recommend"
          },
          {
            label: "排行榜",
            name: "leaderboard"
          },
          {
            label: "视频库",
            name: "videolibrary"
          }
        ]
      }
    };
  }
};
</script>