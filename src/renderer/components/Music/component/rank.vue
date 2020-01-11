<template>
  <div class="rank-wrapper">
    <div class="top-rank">
      <div class="card-row">
        <rank-card :showIcon="true"></rank-card>
        <rank-card :showIcon="true"></rank-card>
      </div>
      <div class="card-row">
        <rank-card :showIcon="true"></rank-card>
        <rank-card :showIcon="true"></rank-card>
      </div>
      <div class="card-row">
        <rank-card :showIcon="true"></rank-card>
        <rank-card :showIcon="true"></rank-card>
      </div>
    </div>
    <div class="rank area-rank">
      <span class="title">地区榜</span>
      <div class="area-rank-list">
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
      </div>
      <div class="area-rank-list">
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
      </div>
    </div>
    <div class="rank area-rank">
      <span class="title">特色榜</span>
      <div class="area-rank-list">
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
      </div>
      <div class="area-rank-list">
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
      </div>
      <div class="area-rank-list">
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
      </div>
    </div>
    <div class="rank area-rank">
      <span class="title">全球榜</span>
      <div class="area-rank-list">
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
      </div>
      <div class="area-rank-list">
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
        <div class="rank-item">
          <card :showIcon="true" width="120" height="120"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RankCard from "@/common/RankCard.vue";
import card from "@/common/card.vue";
export default {
  name: "rank",
  components: {
    "rank-card": RankCard,
    card
  }
};
</script>

<style scoped lang="scss">
.rank-wrapper {
  font-family: "source-beauty";
  & .top-rank {
    margin-top: 20px;
    .card-row {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-top: 30px;
    }
  }
  .rank {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    .title {
      font-size: 20px;
      color: #ffffff;
      padding-left: 25px;
    }
    .area-rank-list {
      width: 100%;
      display: flex;
      flex-direction: row;
      .rank-item {
        display: flex;
        justify-content: center;
        width: 20%;
      }
    }
  }
}
</style>
