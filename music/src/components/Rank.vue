<template>
  <div class="rank">
    <div class="title">排 行 榜</div>
    <div class="rankbox">
      <rank-item :rankList="hotRank">
        <h2>热歌榜</h2>
      </rank-item>
      <rank-item :rankList="newRank">
        <h2>新歌榜</h2>
      </rank-item>
      <rank-item :rankList="euRank">
        <h2>欧美榜</h2>
      </rank-item>
      <rank-item :rankList="krJpRank">
        <h2>日韩榜</h2>
      </rank-item>
    </div>
  </div>
</template>

<script>
import RankItem from "@/components/rankItem";
export default {
  components: {
    RankItem,
  },
  data() {
    return {
      hotRank: [
        { rankId: 1, title: "自娱自乐", player: "金志文" },
        { rankId: 2, title: "啊一抹", player: "啊吉利" },
        { rankId: 3, title: "晴天", player: "周杰伦" },
      ],
      newRank: [
        { rankId: 1, title: "自娱自乐", player: "金志文" },
        { rankId: 2, title: "啊一抹", player: "啊吉利" },
        { rankId: 3, title: "晴天", player: "周杰伦" },
      ],
      euRank: [
        { rankId: 1, title: "自娱自乐", player: "金志文" },
        { rankId: 2, title: "啊一抹", player: "啊吉利" },
        { rankId: 3, title: "晴天", player: "周杰伦" },
      ],
      krJpRank: [
        { rankId: 1, title: "自娱自乐", player: "金志文" },
        { rankId: 2, title: "啊一抹", player: "啊吉利" },
        { rankId: 3, title: "晴天", player: "周杰伦" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  font-family: "微软雅黑";
  padding: 10px;
  margin: 20px;
  flex: 1;
}
.rank {
  display: flex;
  flex-direction: column;
  //   overflow: hidden;
  background: #f3f3f3;
  width: 100%;
}
.rankbox {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>