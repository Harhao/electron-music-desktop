<template>
  <div class="singer-wrapper">
    <radio :data="areaList" @change="areaChange" />
    <div class="search-group">
      <radio :data="groupList" @change="groupChange" />
      <div class="song-type">
        <el-dropdown>
          <span class="el-dropdown-link">
            全部<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>流行</el-dropdown-item>
            <el-dropdown-item>嘻哈</el-dropdown-item>
            <el-dropdown-item>摇滚</el-dropdown-item>
            <el-dropdown-item>电子</el-dropdown-item>
            <el-dropdown-item>民谣</el-dropdown-item>
            <el-dropdown-item>R&B</el-dropdown-item>
            <el-dropdown-item>轻音乐</el-dropdown-item>
            <el-dropdown-item>古典</el-dropdown-item>
            <el-dropdown-item>爵士</el-dropdown-item>
            <el-dropdown-item>乡村</el-dropdown-item>
            <el-dropdown-item>蓝调</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
            全部<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from "@/common/Radio.vue";
export default {
  name: "singer",
  components: {
    Radio
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
    }
  }
}
</style>
