<template>
  <div class="sound-wrapper">
    <div class="sound-list">
      <div class="sound-item" v-for="(item, index) in soundList" :key="index">
        <i class="el-icon-eleme icon"></i>
        <span>{{item.label}}</span>
      </div>
    </div>
    <group title="推荐电台">
      <div class="card-wrapper">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
      <div class="card-wrapper">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
      <div class="card-wrapper">
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
        <card :showIcon="true"></card>
      </div>
    </group>
    <group title="推荐节目">
      <h4>歌曲</h4>
      <div class="song-list">
        <song></song>
      </div>
    </group>
  </div>
</template>

<script>
import group from "@/common/group";
import card from "@/common/card";
import song from "@/common/song";
export default {
  name: "sound",
  components: {
    group,
    card,
    song
  },
  data() {
    return {
      soundList: [
        {
          label: "门店音乐",
          value: 1
        },
        {
          label: "节奏控",
          value: 2
        },
        {
          label: "运动",
          value: 3
        },
        {
          label: "官方歌单",
          value: 4
        },
        {
          label: "网络歌曲",
          value: 5
        },
        {
          label: "短视频热歌",
          value: 6
        },
        {
          label: "KTV金曲",
          value: 7
        },
        {
          label: "DJ神曲",
          value: 8
        },
        {
          label: "经典老歌",
          value: 9
        },
        {
          label: "睡前",
          value: 10
        },
        {
          label: "轻音乐",
          value: 11
        },
        {
          label: "全部",
          value: 12
        }
      ],
      activeName: "new"
    };
  }
};
</script>

<style scoped lang="scss">
.sound-wrapper {
  width: 100%;
  height: auto;
  font-family: "source-beauty-light";
  .sound-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
    .sound-item {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      flex: 0 0 16%;
      padding: 15px 0;
      height: auto;
      text-align: center;
      color: #fff;
      font-size: 14px;
      background-color: #353434;
      border-radius: 5px;
      margin-top: 10px;
      cursor: pointer;
      .icon {
        font-size: 24px;
      }
      &:hover {
        color: #17d28d;
        filter: brightness(0.8);
      }
    }
  }
  .tab {
    margin-left: 20px;
  }
  .card-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.active {
  color: #17d28d;
}
</style>
