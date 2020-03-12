<template>
  <div class="controls-container">
    <PlayProgressBar />
    <div class="controls">
      <button
        class="previous-mus-btn"
        @click="playState.switchToPreviousMusic()"
      >
        <i class="fas fa-backward"></i>
      </button>
      <button class="play-state-btn" v-on:click="togglePlayState">
        <i
          class="fas"
          v-bind:class="{
            'fa-pause': playState.isPlaying,
            'fa-play': !playState.isPlaying
          }"
        ></i>
      </button>
      <button class="next-mus-btn" @click="playState.switchToNextMusic()">
        <i class="fas fa-forward"></i>
      </button>
    </div>
  </div>
</template>

<script>
import playState from "../state/playState";
import PlayProgressBar from "./PlayProgressBar";
export default {
  data: function() {
    return {
      playState
    };
  },
  components: {
    PlayProgressBar
  },
  methods: {
    togglePlayState() {
      if (!this.playState.isPlaying) {
        this.playState.player.playVideo();
      } else {
        this.playState.player.pauseVideo();
      }
      this.playState.toggleIsPlaying();
    }
  }
};
</script>

<style>
.controls-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: fixed;
  bottom: 0;
  left: 0px;
  right: 0;
  height: 60px;
  background-color: #535c68;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.controls button {
  border: none;
  background: none;
  outline: none;
  font-size: 18px;
  padding: 6px 10px;
  cursor: pointer;
  margin: 0 10px;
}

/* tablet style */
@media screen and (min-width: 680px) {
  .controls-container {
    left: 180px;
  }
}
</style>
