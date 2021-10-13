<template>
  <div class="musicList">
    <div class="table_header">
      <div>播放列表</div>
      <div>
        <span @click="clearList"><i class="el-icon-delete"></i> 清空列表</span>
        <i @click="close" class="el-icon-close"></i>
      </div>
    </div>
    <el-table
      :data="musicList"
      ref="table"
      style="width: 100%"
      max-height="300"
      @row-click="play"
      highlight-current-row
      :show-header="false"
    >
      <el-table-column label="" width="80" align="center">
        <template #default="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="歌曲标题" align="left" width="200">
        <template #default="{ row }">
          <span>{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="歌手" width="150">
        <template #default="{ row }">
          <span>{{ row.singer }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间" align="center">
        <template #default="{ row }">
          <span>{{ row.time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "musicList",
  data() {
    return {
      currentRow: null,
    };
  },
  methods: {
    play(row) {
      // 获取当前index值
      // array.findIndex(function(currentValue, index, arr), thisValue)
      const i = this.musicList.findIndex((v) => {
        return row.id == v.id;
      });
      this.$refs.table.setCurrentRow(this.musicList[i]);
      this.mplay({
        index: i,
      });
    },
    clearList() {
      // this.MusicList = [];
    },
    close() {
      this.listMsg = this.listAbout;
      this.listMsg.isShow = false;
    },
  },
  mounted() {
    this.$refs.table.setCurrentRow(this.musicList[this.curIndex]); // 初始化高亮当前歌曲
  },
  props: ["musicList", "player", "pause", "mplay", "listAbout", "curIndex"],
  watch: {
    curIndex(cur) {
      this.$refs.table.setCurrentRow(this.musicList[cur]);
    },
  },
};
</script>

<style lang="less" scoped>
.musicList {
  position: absolute;
  bottom: 50px;
  right: 5px;
  border-radius: 3px;
  //   box-shadow: 0 0 9px #e9e3e3;
  z-index: 9999;

  .table_header {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    // box-sizing: border-box;
    color: #606266;
    div:nth-of-type(1) {
      text-align: left;
      font-size: 20px;
      font-weight: 700;
      margin-left: 10px;
      color: #000;
      flex: 3;
    }
    div:nth-of-type(2) {
      font-size: 10px;
      flex: 1;
      text-align: center;
      * {
        cursor: pointer;
      }
      display: inline-flex;
      align-items: center;
      span {
        // margin-right: 10px;
        padding: 5px 10px;
      }
      .el-icon-close {
        padding: 5px;
        font-size: 20px;
      }
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c3cad4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #aab1bc;
  }
  /deep/.el-table__row:hover {
    cursor: pointer;
  }
}
</style>