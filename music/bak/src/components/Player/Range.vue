<template>
  <div class="playbar">
    <div class="sliderBox">
      <el-slider
        class="slider1"
        v-model="sliderVal"
        :format-tooltip="formatTooltip"
        :min="sliderMin"
        :max="sliderMax"
        @change="spliderSelect"
      />
      <div class="slider_buffer" :style="{ width: bufferedLength }"></div>
    </div>
    <div class="showTime">{{ currentTime }} / {{ duration }}</div>
    <div class="volume">
      <div class="volume-range" v-show="volumeShow">
        <el-slider
          height="100px"
          v-model="volume"
          vertical
          :min="0"
          :max="1"
          :step="0.01"
          :show-tooltip="false"
        >
        </el-slider>
        <div class="slider_buffer"></div>
        <div style="color: #fff; padding: 3px 0">
          {{ Math.round(volume * 100) }}%
        </div>
        <div class="snip">
          <svg-icon @click.native="mute" :icon-class="iconName"></svg-icon>
        </div>
      </div>
      <svg-icon
        @click.native="volumeShow = !volumeShow"
        :icon-class="iconName"
      ></svg-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "Range",
  props: ["player", "musicList", "musicMode", "curIndex", "next"],
  data() {
    return {
      bufferedLength: 0, //缓冲进度
      volumeShow: false, //显示调音
      iconName: "icon-shengyinkai", //改变图标
      ismute: false, //是否静音
      duration: 0, //总长
      currentTime: undefined, //当前长
      volume: 0.2,
      volumeBak: 0, //保存静音前音量大小
      sliderVal: 0, // 这个对接当前时长。
      sliderMin: 0,
      sliderMax: 0, // 这个对接总时长。
    };
  },
  computed: {},
  watch: {
    volume() {
      this.player.volume = this.volume;
      if (!this.volume && this.ismute) {
        this.iconName = "icon-shengyinjingyin";
      } else if (!this.volume && !this.ismute) {
        this.iconName = "icon-shengyinwu";
      } else {
        this.ismute = false;
        this.iconName = "icon-shengyinkai";
      }
    },
  },
  methods: {
    getCur() {
      // console.log(this.$refs.player.currentTime);
    },
    mute() {
      if (this.volume != 0) {
        this.volumeBak = this.volume;
        this.volume = 0;
        this.ismute = true;
      } else {
        this.ismute = false;
        this.volume = this.volumeBak;
      }
    },
    init() {
      this.player.volume = this.volume;
      // 时长变化;
      this.player.ondurationchange = () => {
        this.updateTime();
      };
      //   是否有数据播放
      this.player.oncanplay = () => {
        // 计算初始缓存
        const timeRanges = this.player.buffered; // 计算百分比 展示进度
        const duration = Math.floor(this.player.duration);
        const endLength = Math.floor(timeRanges.end(timeRanges.length - 1));
        this.bufferedLength = Math.floor((endLength / duration) * 100) + "%";
        // 监听下载数据时的缓存
        this.player.addEventListener("progress", () => {
          let duration = this.player.duration; // 视频总长度
          if (duration > 0) {
            for (var i = 0; i < this.player.buffered.length; i++) {
              // 寻觅当前时间之后最近的点
              if (
                this.player.buffered.start(
                  this.player.buffered.length - 1 - i
                ) < this.player.currentTime
              ) {
                let bufferedLength =
                  (this.player.buffered.end(
                    this.player.buffered.length - 1 - i
                  ) /
                    duration) *
                    100 +
                  "%";
                this.bufferedLength = bufferedLength;
                break;
              }
            }
          }
        });
      };

      // 播放位置发送改变时触发。
      this.player.ontimeupdate = () => {
        this.updateTime();
      };

      // // 音频播放完毕
      this.player.onended = () => {
        // console.log("音频播放完毕", this.musicMode);
        switch (this.musicMode) {
          case 1: //列表循环
            this.next();
            break;
          case 2: // 单曲循环
            this.player.load();
            this.player.play();
            break;
          case 3: {
            // 随机播放
            // console.log("前", this.curIndex);
            let i = this.getRandom();
            this.$emit("update:curIndex", i);
            // setTimeout(() => {
            //   console.log("后", this.curIndex);
            // }, 0);
            // this.player.play();
            break;
          }
        }
      };
      // // 音频播放完毕
      // this.player.onerror = function () {
      //   console.log("加载出错！");
      // };
    },
    getRandom() {
      let length = this.musicList.length;
      let i = Math.floor(Math.random() * length);
      while (this.curIndex == i) {
        i = Math.floor(Math.random() * length);
      }
      console.log("i", i);

      return i;
    },
    formatTooltip(val) {
      // 格式化毫秒数，由于组件提示为纯数字，所以这里需要将数字转化为我们所需要的的格式，string类型的。'03:45',
      const time = this.formatTime(val);
      return `${time.min}:${time.sec}`;
    },
    spliderSelect() {
      // 滑块松动后触发。更新当前时长，
      // 时长发生变动会init里的方法进行更新数据
      this.player.currentTime = this.sliderVal;
    },
    updateTime() {
      // 更新时间
      const total = this.formatTime(this.player.duration);
      const current = this.formatTime(this.player.currentTime);
      this.duration = `${total.min}:${total.sec}`;
      this.currentTime = `${current.min}:${current.sec}`;
      this.sliderVal = Math.floor(this.player.currentTime);
      this.sliderMax = Math.floor(this.player.duration);
    },
    formatTime(time) {
      // 格式化毫秒，返回String型分秒对象
      // 有可能没获取到，为NaN
      if (!time) return { min: "00", sec: "00" };
      return {
        min: Math.floor(time / 60)
          .toString()
          .padStart(2, "0"),
        sec: Math.floor(time % 60)
          .toString()
          .padStart(2, "0"),
      };
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="less" scoped>
.slider1 {
  width: 300px;
  // cursor: pointer;
}
/deep/.el-slider__button-wrapper.hover,
/deep/.el-slider__button-wrapper.dragging,
/deep/.el-slider__button-wrapper:hover,
/deep/.el-slider__button:hover,
/deep/.el-tooltip {
  cursor: pointer;
}
/deep/.el-slider__bar {
  z-index: 10;
}
.svg-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.volume {
  position: relative;
  margin-left: 10px;
  &:hover {
    .svg-icon {
      color: red;
    }
  }
  .volume-range {
    background-color: rgba(0, 0, 0, 0.552);
    width: 40px;
    overflow: hidden;
    padding: 10px;
    bottom: 20px;
    left: -20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    /deep/.el-slider__button {
      width: 0.7em;
      height: 0.7em;
    }
    .snip {
      width: 100%;
      text-align: center;
      padding-top: 10px;
      border-top: 1px solid rgb(200, 192, 192);
    }
  }
}
.playbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  .sliderBox {
    position: relative;
    /deep/.el-slider__button {
      width: 0.7em;
      height: 0.7em;
    }
    .slider_buffer {
      top: 16px;
      height: 6px;
      border-radius: 3px;
      background-color: #ada3a3;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      position: absolute;
      z-index: 2;
      pointer-events: none;
    }
  }
  .showTime {
    padding: 0 5px;
    color: #999;
    font-size: 0.7em;
  }
}
</style>