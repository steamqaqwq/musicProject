<template>
  <div class="musicList">
    <el-table
      :data="musicList"
      style="width: 100%"
      max-height="300"
      @row-dblclick="play"
    >
      <el-table-column label="" width="80" align="center">
        <template #default="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="歌曲标题" width="200">
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
    return {};
  },
  methods: {
    play(row, column, event) {
      this.player.src = row.src;
      this.player.play();
    },
  },
  props: ["musicList", "player"],
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
}
</style>