<template>
  <div :class="playerBarClass" @mouseleave="hoverShowBar(0)">
    <div class="lock" @mouseenter="hoverShowBar(1)">
      <svg-icon
        @click.native="lock"
        :icon-class="lockAbout.lockIcon"
      ></svg-icon>
    </div>
    <div class="control">
      <div class="music_cover">
        <img :src="coverImg" alt="" />
      </div>
      <div class="music_progress">
        <div class="song_msg">
          <span class="song_title"
            ><a href=""> {{ musicTitle }}</a></span
          >
          <span class="song_singer"
            ><a href="">{{ singer }}</a></span
          >
        </div>
        <div class="song_range">
          <audio ref="player" :src="curSrc"></audio>
          <Range
            :musicList="musicList"
            :player="player"
            :curIndex.sync="curIndex"
            :musicMode="musicMode"
            :next="next"
            v-if="player"
          ></Range>
        </div>
      </div>
      <svg-icon @click.native="pre" icon-class="icon-previous"></svg-icon>
      <svg-icon @click.native="pause" :icon-class="playIcon"></svg-icon>
      <svg-icon @click.native="next" icon-class="icon-next"></svg-icon>

      <div class="song_list">
        <music-list
          v-show="listAbout.isShow"
          :musicList="musicList"
          :player="player"
          :pause="pause"
          :mplay="mplay"
          :listAbout="listAbout"
          :curIndex="curIndex"
          v-if="player"
        ></music-list>
        <svg-icon
          @click.native="listAbout.isShow = !listAbout.isShow"
          icon-class="icon-24gf-playlistMusic4"
        ></svg-icon>
      </div>
      <svg-icon
        @click.native="changeMusicMode"
        :icon-class="selectMusicMode(musicMode)"
      ></svg-icon>
      <svg-icon
        class="favourite"
        icon-class="icon-xihuan1"
        onchange-avg="icon-xihuan-tianchong"
      ></svg-icon>
    </div>
  </div>
</template>

<script>
import Range from "./Range";
import MusicList from "./musicList.vue";

export default {
  name: "Player",
  components: { Range, MusicList },
  data() {
    return {
      player: undefined,
      playerBarClass: {
        "player-bar": true,
        islock: false,
        unlock: true,
      },
      playIcon: "icon-Player",
      isplay: false,
      lockAbout: {
        isLock: false,
        lockIcon: "icon-unlock",
      },
      favAbout: {},
      listAbout: {
        isShow: false,
      },
      musicMode: 1,
      volume: 0,
      curIndex: 0,
      curSrc: require("@/assets/music/Analogy.mp3"),
      coverImg: require("@/assets/music/music_1.png"),
      musicTitle: "Analogy",
      singer: "彩音 (あやね)",
      duration: 0, //总长
      currentTime: 0, //当前长
      musicList: [
        {
          id: 1,
          title: "Analogy",
          url: require("@/assets/music/Analogy.mp3"),
          coverSrc: require("@/assets/music/music_1.png"),
          singer: "彩音 (あやね)",
          time: "04:39",
        },
        {
          id: 2,
          title: "I believe what you said",
          url: require("@/assets/music/I believe what you said.mp3"),
          coverSrc: require("@/assets/music/I believe what you said.jpg"),
          singer: "あやね",
          time: "04:26",
        },
        {
          id: 3,
          title: "不規則性エントロピー",
          url: require("@/assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("@/assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
        {
          id: 4,
          title: "不規則性エントロピー",
          url: require("@/assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("@/assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
        {
          id: 5,
          title: "不規則性エントロピー",
          url: require("@/assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("@/assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
        {
          id: 6,
          title: "不規則性エントロピー",
          url: require("@/assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("@/assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
        {
          id: 7,
          title: "不規則性エントロピー",
          url: require("@/assets/music/不規則性エントロピー.mp3"),
          coverSrc: require("@/assets/music/music_1.png"),
          singer: "彩",
          time: "04:24",
        },
      ],
    };
  },
  computed: {},
  methods: {
    // 监听图标改变 并触发事件
    // showChild(v) {
    //   if (v == 1) {
    //     console.log("触发事件1");
    //   } else {
    //     console.log("触发事件2");
    //   }
    // },
    lock() {
      this.$set(this.listAbout, "isLock", !this.listAbout.isLock);
      this.lockAbout.lockIcon = this.listAbout.isLock
        ? "icon-lock"
        : "icon-unlock";
      this.$set(this.playerBarClass, "islock", !this.playerBarClass.islock);
      this.$set(this.playerBarClass, "unlock", !this.playerBarClass.unlock);
    },
    hoverShowBar(ishover) {
      if (this.listAbout.isLock) {
        this.$set(this.playerBarClass, "islock", true);
        this.$set(this.playerBarClass, "unlock", false);
        return;
      }
      if (ishover) {
        this.$set(this.playerBarClass, "islock", true);
        this.$set(this.playerBarClass, "unlock", false);
      } else {
        this.$set(this.playerBarClass, "islock", false);
        this.$set(this.playerBarClass, "unlock", true);
      }
    },
    //播放相关函数
    mplay({ ...args }) {
      this.curIndex = args.index;
      this.isplay = true;
      setTimeout(() => {
        this.player.play();
      }, 200);
    },
    pause() {
      this.isplay ? this.player.pause() : this.player.play();
      this.isplay = !this.isplay;
    },
    next() {
      if (this.curIndex != this.musicList.length - 1) {
        this.curIndex++;
      } else {
        this.curIndex = 0;
      }
    },
    pre() {
      this.curIndex
        ? this.curIndex--
        : (this.curIndex = this.musicList.length - 1);
    },
    selectMusicMode(mode) {
      switch (mode) {
        case 1:
          return "icon-bofang-xunhuanbofang";
        case 2:
          return "icon-danquxunhuan";
        case 3:
          return "icon-bofang06-xianxing";
        default:
          return "icon-bofang-xunhuanbofang";
      }
    },
    changeMusicMode() {
      this.musicMode++;
      if (this.musicMode > 3) this.musicMode = 1;
    },
    favourite() {},
  },
  watch: {
    isplay(cur) {
      this.playIcon = !cur ? "icon-Player" : "icon-Pause";
    },
    curIndex(v) {
      this.musicTitle = this.musicList[v].title;
      this.singer = this.musicList[v].singer;
      this.curSrc = this.musicList[v].url;
      this.coverImg = this.musicList[v].coverSrc;
      this.mplay({ index: v });
    },
  },
  mounted() {
    this.player = this.$refs.player;
    this;
  },
};
</script>

<style lang="less" scoped>
.player-bar {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: -60px;
  background-color: #fff;
  box-shadow: 1px 2px 3px 1px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .lock {
    position: absolute;
    width: 40px;
    height: 20px;
    right: 90px;
    top: -24px;
    box-shadow: 0px -2px 5px -3px;
    background-color: #fff;
    border-radius: 40px 40px 0 0;
    padding: 5px;
    text-align: center;
    .svg-icon {
      font-size: 20px;
    }
  }
}

.islock {
  bottom: 0;
  transition: 0.4s ease-out;
}
.unlock {
  bottom: -60px;
  transition: bottom 0.4s ease-out;
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

.svg-icon {
  font-size: 24px;
  color: #000;
  margin: 0 10px;
  cursor: pointer;
}
.svg-icon:nth-of-type(2) {
  font-size: 30px;
}
.control .svg-icon:nth-of-type(-n + 3):hover {
  color: rgb(64 158 255);
}

.music_cover {
  width: 50px;
  // height: 100%;
  img {
    width: 100%;
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