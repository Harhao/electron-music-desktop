<template>
  <div class="singer-wrapper">
    <radio :data="areaList" @change="areaChange" />
    <div class="search-group">
      <radio :data="groupList" @change="groupChange" />
      <div class="song-type">
        <drop-down :data="songType"></drop-down>
        <drop-down :data="songType"></drop-down>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from "@/common/Radio.vue";
import DropDown from "@/common/dropDown.vue";
export default {
  name: "singer",
  components: {
    Radio,
    DropDown
  },
  data() {
    return {
      areaList: [
        {
          id: 1,
          label: "全部"
        },
        {
          id: 2,
          label: "内地"
        },
        {
          id: 3,
          label: "港台"
        },
        {
          id: 4,
          label: "欧美"
        },
        {
          id: 5,
          label: "日本"
        },
        {
          id: 6,
          label: "韩国"
        },
        {
          id: 7,
          label: "其他"
        }
      ],
      groupList: [
        {
          id: 1,
          label: "全部"
        },
        {
          id: 2,
          label: "男"
        },
        {
          id: 3,
          label: "女"
        },
        {
          id: 4,
          label: "组合"
        }
      ],
      songType: [
        {
          label: "全部",
          value: 1
        },
        {
          label: "华哥",
          value: 2
        },
        {
          label: "全部",
          value: 3
        },
        {
          label: "全部",
          value: 4
        },
        {
          label: "全部",
          value: 5
        },
        {
          label: "全部",
          value: 6
        },
        {
          label: "全部",
          value: 7
        },
      ]
    };
  },
  methods: {
    areaChange() {},
    groupChange() {}
  }
};
</script>

<style scoped lang="scss">
.singer-wrapper {
  .search-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    .song-type {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 150px;
      margin-right: 20px;
    }
  }
}
</style>
