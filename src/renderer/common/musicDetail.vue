<template>
  <div class="music-detail">
    <div class="mask"></div>
    <div class="header">
      <div class="left-side">
        <span class="icon el-icon-arrow-down" @click="closeDetail"></span>
      </div>
      <div class="right-side">
        <span
          class="icon el-icon-minus"
          @click="operateWindow('window-cut')"
        ></span>
        <span class="icon el-icon-full-screen"></span>
        <span
          class="icon el-icon-close"
          @click="operateWindow('window-close')"
        ></span>
      </div>
    </div>
    <div class="song-wrapper">
      <div class="song-info">
        <div class="pictures">
          <img :src="demo" />
        </div>
        <div class="lyrics"></div>
      </div>
    </div>
    <div class="music-canvas">
      <canvas id="canvas"></canvas>
      <audio
        id="audio"
        controls
        src="http://183.47.253.143/amobile.music.tc.qq.com/C4000017BpKU1Sb8CL.m4a?guid=3534427900&vkey=86CBF0CEFF3FAF2C2C699715B9BDBF45152DDD1BF5B1757EB07718BFC5374D4F05EE11F6844CE93046F85AB0B9B7D1694A7F33A7EF0349FB&uin=0&fromtag=66"
        crossOrigin="anonymous"
      ></audio>
      <a href="javascript:;" id="play-btn" @click="play">PLAY</a>
    </div>
    <div class="control">
      <player :isShowBackground="false" :isShowPicture="false"></player>
    </div>
  </div>
</template>

<script>
import player from "./player.vue";
import demo from "@/assets/images/demo.jpg";
export default {
  name: "music-detail",
  components: {
    player
  },
  data() {
    return {
      demo,
      audio: null
    };
  },
  methods: {
    operateWindow(operateName) {
      this.$electron.ipcRenderer.send(operateName);
    },
    closeDetail() {
      this.$store.dispatch("song/set_detail_show", false);
    },
    play() {
      const btn = document.getElementById("play-btn");
      const audio = document.getElementById("audio");
      btn.style.display = "none";
      audio.play();
      this.onLoadAudio(audio);
    },
    onLoadAudio(audio) {
      var context = new (window.AudioContext || window.webkitAudioContext)();
      var analyser = context.createAnalyser();
      analyser.fftSize = 1024;
      var source = context.createMediaElementSource(audio);

      source.connect(analyser);
      analyser.connect(context.destination);

      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);

      let canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;
      var barWidth = (WIDTH / bufferLength) * 1.5;
      var barHeight;
      function renderFrame() {
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        for (var i = 0, x = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];
          var r = barHeight + 300 * (i / bufferLength);
          var g = 250 * (i / bufferLength);
          var b = 255;
          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
          x += barWidth + 2;
        }
      }
      renderFrame();
    }
  },
  computed: {
    background() {
      return this.$store.state.song.song_detail_background;
    }
  }
};
</script>

<style scoped lang="scss">
.music-detail {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  background: rgba($color: #000000, $alpha: 1);
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-image: url("~@/assets/images/demo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba($color: #000, $alpha: 0.7);
    filter: blur(10px);
    z-index: -1;
  }
  .header {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    height: 80px;
    padding: 0 30px;
    .left-side,
    .right-side {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;
      .icon {
        display: inline-block;
        text-align: center;
        width: 25px;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        color: #ffffff;
        margin-right: 20px;
        cursor: pointer;
        -webkit-app-region: no-drag;
      }
    }
    .right-side {
      justify-content: flex-end;
    }
  }
  .song-wrapper {
    flex: 1;
    .song-info {
      display: flex;
      flex-direction: row;
      width: 90%;
      height: 100%;
      margin: 0 auto;
      .pictures,
      .lyrics {
        flex: 1;
      }
      .pictures {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .music-canvas {
    position: relative;
    width: 80%;
    // height: 60px;
    height: 120px;
    margin: 0 auto;
    #canvas {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    audio {
      visibility: hidden;
    }
    #play-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #13091b;
      background: #007a99;
      display: block;
      width: 150px;
      height: 45px;
      line-height: 45px;
      font-size: 18px;
      cursor: pointer;
      border-radius: 4px;
      letter-spacing: 0.1em;
      z-index: 1;
      text-align: center;
      text-decoration: none;
    }
  }
  .control {
    position: relative;
    width: 90%;
    height: 80px;
    margin: 0 auto;
    overflow: hidden;
  }
}
</style>
