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
    <div class="singer-list">
      <singer-card
        v-for="(item, index) in singerList"
        :key="index"
        :index="index + 1"
        :data="item"
      ></singer-card>
    </div>
  </div>
</template>

<script>
import Radio from "@/common/Radio.vue";
import singerCard from "@/common/singerCard.vue";
import DropDown from "@/common/dropDown.vue";
export default {
  name: "singer",
  components: {
    Radio,
    DropDown,
    singerCard
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
          label: "流行",
          value: 2
        },
        {
          label: "嘻哈",
          value: 3
        },
        {
          label: "摇滚",
          value: 4
        },
        {
          label: "电子",
          value: 5
        },
        {
          label: "民谣",
          value: 6
        },
        {
          label: "R&B",
          value: 7
        },
        {
          label: "民歌",
          value: 8
        },
        {
          label: "轻音乐",
          value: 9
        },
        {
          label: "爵士",
          value: 10
        },
        {
          label: "古典",
          value: 11
        },
        {
          label: "乡村",
          value: 12
        },
        {
          label: "蓝调",
          value: 13
        }
      ],
      singerList: [
        {
          name: "周杰伦"
        },
        {
          name: "周杰伦"
        },
        {
          name: "周杰伦"
        },
        {
          name: "周杰伦"
        },
        {
          name: "周杰伦"
        },
        {
          name: "周杰伦"
        },
        {
          name: "周杰伦"
        },
        {
          name: "周杰伦"
        }
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
  .singer-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
  }
}
</style>
