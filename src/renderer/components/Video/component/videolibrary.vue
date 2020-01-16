<template>
  <div class="videolibrary">
    <radio :data="areaList" @change="areaChange" />
    <radio :data="typeList" @change="areaChange" />
    <group title="全部MV" style="margin-top:30px;">
      <template slot="icon">
        <span>
          更多
          <i class="el-icon-arrow-right"></i>
        </span>
      </template>
      <div class="card-wrapper">
        <card :showIcon="true" width="240"></card>
        <card :showIcon="true" width="240"></card>
        <card :showIcon="true" width="240"></card>
      </div>
      <div class="card-wrapper">
        <card :showIcon="true" width="240"></card>
        <card :showIcon="true" width="240"></card>
        <card :showIcon="true" width="240"></card>
      </div>
      <div class="card-wrapper">
        <card :showIcon="true" width="240"></card>
        <card :showIcon="true" width="240"></card>
        <card :showIcon="true" width="240"></card>
      </div>
    </group>
  </div>
</template>

<script>
import Radio from "@/common/Radio.vue";
import card from "@/common/card.vue";
import group from "@/common/group.vue";
export default {
  name: "videolibrary",
  components: {
    Radio,
    group,
    card
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
        }
      ],
      typeList: [
        {
          id: 1,
          label: "全部"
        },
        {
          id: 2,
          label: "MV"
        },
        {
          id: 3,
          label: "现场"
        },
        {
          id: 4,
          label: "翻唱"
        },
        {
          id: 5,
          label: "舞蹈"
        },
        {
          id: 6,
          label: "影视"
        },
        {
          id: 7,
          label: "综艺"
        },
        {
          id: 8,
          label: "儿歌"
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
.videolibrary {
  width: 100%;
  height: auto;
  .card-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
  }
}
</style>