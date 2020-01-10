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
    <div class="rank area_rank">
      <div class="title">地区榜</div>
    </div>
  </div>
</template>

<script>
import RankCard from "@/common/RankCard.vue";
export default {
  name: "rank",
  components: {
    "rank-card": RankCard
  }
};
</script>

<style scoped lang="scss">
.rank-wrapper {
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
}
</style>
