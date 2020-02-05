<template>
  <div class="history-wrapper">
    <h3 class="title">播放历史</h3>
    <div class="table-data">
      <span class="total">共150首</span>
      <el-table :data="tableData" class="table-list" :cell-style="cellStyle" :header-cell-style="headerStyle">
        <el-table-column label="歌曲" align="center" width="400px">
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
          singer: "王小虎",
          album: "流年似水"
        },
        {
          singer: "王小虎",
          album: "流年似水"
        },
        {
          singer: "王小虎",
          album: "流年似水"
        },
        {
          singer: "王小虎",
          album: "流年似水"
        }
      ]
    };
  },
  methods: {
    headerStyle({row, rowIndex }) {
      const theme = document.getElementById('app').getAttribute('data-theme')
      switch(theme) {
        case 'black': return {background: 'rgb(30, 30, 32)'}
        case 'grey': return {background: 'rgb(82, 82, 82)'}
      }
    },
    cellStyle({row, column, rowIndex, columnIndex}) {
      const theme = document.getElementById('app').getAttribute('data-theme')
      switch(theme) {
        case 'black': return {background: 'rgb(30, 30, 32)'}
        case 'grey': return {background: 'rgb(82, 82, 82)'}
      }
    }
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
    box-sizing: border-box;
    min-height: 500px;
    padding-top: 50px;
    .total {
      display: inline-block;
      color: #ddd;
      margin-bottom: 20px;

    }
    /deep/ .el-table__row>td{
      border: none;
      color: #ffffff;
    }
    /deep/.el-table::before {
      height: 0px;
    }
  }
}
</style>
