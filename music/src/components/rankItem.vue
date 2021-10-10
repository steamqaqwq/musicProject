<template>
  <div class="rankItem">
    <slot></slot>
    <div class="snip"></div>
    <ul class="songList">
      <li v-for="song in rankList" :key="song.rankId" class="songList_song">
        <div class="rankId">{{ song.rankId }}.</div>
        <div class="songMsg">
          <p>
            <a href="">{{ song.title }}</a>
          </p>
          <p>
            <a href="">{{ song.player }}</a>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "rankItem",
  props: ["rankList"],
};
</script>

<style lang="less" scoped>
.rankItem {
  overflow: hidden;
  min-height: 300px;
  margin: 0 10px;
  flex: 1;
}
.songList {
  display: flex;
  flex-direction: column;
}
.songList_song {
  margin: 5px 0;
  display: flex;
  .rankId {
    flex: 1;
  }
  .songMsg {
    flex: 4;
    text-align: left;
    p a {
      font-size: 15px;
      color: #000;
    }
  }
}
.snip {
  padding: 0 10px;
  border-bottom: 2px solid grey;
  margin: 5px 0;
}
</style>