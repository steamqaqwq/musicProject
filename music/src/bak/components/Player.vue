<template>
  <div class="player-bar lock">
    <div class="control">
      <div class="music_cover">
        <img src="../assets/music/music_1.png" alt="" />
      </div>
      <div class="music_progress">
        <div class="song_msg">
          <span class="song_title"><a href=""> Analogy</a></span>
          <span class="song_singer"><a href="">彩音 (あやね)</a></span>
        </div>
        <div class="song_range">
          <Range @getPlayer="getPlayer"></Range>
        </div>
      </div>
      <svg-icon icon-class="icon-previous"></svg-icon>
      <svg-icon @click.native="pause" :icon-class="playIcon"></svg-icon>
      <svg-icon icon-class="icon-next"></svg-icon>

      <div class="song_list">
        <music-list
          v-show="listAbout.isShow"
          :musicList="musicList"
          :player="player"
        ></music-list>
        <svg-icon
          @click.native="listAbout.isShow = !listAbout.isShow"
          icon-class="icon-24gf-playlistMusic4"
        ></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import Range from "@/components/Range";
import MusicList from "./musicList.vue";

export default {
  name: "Player",
  components: { Range, MusicList },
  data() {
    return {
      player: undefined,
      playIcon: "icon-Player",
      isplay: false,
      listAbout: {
        isShow: false,
      },
      volume: 0,
      src: "",
      coverImg: "",
      musicTitle: "",
      duration: 0, //总长
      currentTime: 0, //当前长
      musicList: [
        {
          id: 1,
          title: "Analogy",
          url: require("../assets/music/Analogy.mp3"),
          coverSrc: require("../assets/music/music_1.png"),
          singer: "彩音 (あやね)",
          time: "04:39",
        },
        {
          id: 2,
          title: "I believe what you said",
          url: require("../assets/music/I believe what you said.mp3"),
          coverSrc: require("../assets/music/I believe what you said.jpg"),
          singer: "あやね",
          time: "04:26",
        },
        {
          id: 3,
          title: "不規則性エントロピー",
          url: require("../assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("../assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
        {
          id: 4,
          title: "不規則性エントロピー",
          url: require("../assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("../assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
        {
          id: 5,
          title: "不規則性エントロピー",
          url: require("../assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("../assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
        {
          id: 6,
          title: "不規則性エントロピー",
          url: require("../assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("../assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
        {
          id: 7,
          title: "不規則性エントロピー",
          url: require("../assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("../assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
      ],
    };
  },
  methods: {
    pause() {
      if (this.isplay) {
        this.isplay = !this.isplay;
        this.player.pause();
        this.playIcon = "icon-Player";
      } else {
        this.isplay = !this.isplay;
        this.player.play();
        this.playIcon = "icon-Pause";
      }
    },
    next() {},
    getPlayer(Obj) {
      this.player = Obj.player;
      this.volume = Obj.volume;
    },
  },
  mount() {},
};
</script>

<style lang="less" scoped>
.player-bar {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: rgba(255, 192, 203, 0.627);
  box-shadow: 1px 0px 3px 1px;
}

.control {
  display: flex;
  align-items: center;
  //   justify-content: center;
  margin: 0 auto;
  width: 920px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.483);
}
.lock {
  visibility: visible;
}
.unlock {
  visibility: hidden;
}
.svg-icon {
  font-size: 24px;
  color: #000;
  margin: 0 10px;
  cursor: pointer;
}
.svg-icon:nth-of-type(2) {
  font-size: 30px;
}
.svg-icon:hover {
  color: #fff;
}

.music_cover {
  //   width: 50px;
  height: 100%;
  img {
    // width: 100%;
    height: 100%;
  }
}
.music_progress {
  width: 50%;
  height: 100%;
  padding: 5px;
  .song_msg {
    text-align: left;
    padding: 3px;
    margin-left: 10px;
  }
  .song_title a {
    color: #000;
  }
  .song_singer {
    margin-left: 5px;
    a {
      color: rgba(128, 128, 128, 0.786);
      font-size: 13px;
      line-height: 30px;
    }
  }
}
.song_range {
  position: relative;
  /* display: flex; */
  /* justify-content: center; */
  margin-left: 10px;
  top: -13px;
}
.song_list {
  position: relative;
}
</style>