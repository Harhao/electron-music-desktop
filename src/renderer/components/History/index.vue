<template>
  <div class="history-wrapper">
    <h3 class="title">播放历史</h3>
    <div class="table-data">
      <span class="total">共150首</span>
      <el-table :data="tableData" class="table-list" :row-class-name="rowClass">
        <el-table-column label="歌曲" align="center" width="200px">
          <template slot-scope="scope">
            <song :showImg="false"></song>
          </template>
        </el-table-column>
        <el-table-column prop="singer" label="歌手" align="center"></el-table-column>
        <el-table-column prop="album" label="专辑" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import song from "@/common/song.vue";
export default {
  components: {
    song
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import '~@/assets/styles/variable.scss';
.history-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  .title {
    position: fixed;
    color: #ffffff;
    width: 100%;
    font-size: 30px;
    font-family: "source-beauty";
    z-index: 99;
     @include right_side_color;
  }
  .table-data {
    width: 100%;
    min-height: 500px;
    padding-top: 50px;
    .rowClass{
      @include right_side_color;
    }
  }
}
</style>
