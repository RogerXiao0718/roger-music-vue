<template>
  <div class="sidebar" v-bind:class="{ 'side-active': uiState.sideBarActive }">
    <youtube
      class="youtube-player"
      :video-id="playState.musicIdList[0]"
      :player-vars="playerVars"
      ref="youtube"
    />
  </div>
</template>

<script>
import uiState from "../state/uiState";
import playState from "../state/playState";
import KEY from "../apis/youtubeKey";

export default {
  data: function() {
    return {
      uiState,
      playState,
      playerVars: {
        autoplay: 0,
        controls: 1
      },
      interval: null
    };
  },
  // computed: {
  //   left() {
  //     return uiState.sideBarActive ? "0" : "-80%";
  //   }
  // },
  mounted() {
    this.playState.setPlayer(this.$refs.youtube.player);
    this.$refs.youtube.player.setVolume(this.playState.volume);
    this.$refs.youtube.player.addEventListener("onStateChange", event => {
      switch (event.data) {
        case -1:
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${KEY}&id=${this.playState.currentId}&part=snippet, contentDetails`
          )
            .then(res => res.json())
            .then(data => {
              if (data.items[0]) {
                this.playState.setDuration(
                  data.items[0].contentDetails.duration
                );
              }
            });
          break;
        case 0:
          this.playState.switchToNextMusic();
          break;
        case 1:
          clearInterval(this.interval);
          this.interval = setInterval(() => {
            this.playState.updateCurrTime();
          }, 300);
          break;
        case 2:
          clearInterval(this.interval);
          break;
      }
    });
  }
};
</script>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 66%;
  top: 0;
  bottom: 0;
  left: -80%;
  box-shadow: 4px 0 2px #999;
  margin: 0;
  margin-top: 60px;
  transition: 0.2s;
  z-index: 999;
  background-color: #2f3640;
}

.side-active {
  left: 0;
}

.youtube-player {
  width: 90%;
  height: 28%;
}

/* tablet style */
@media screen and (min-width: 680px) {
  .sidebar {
    left: 0;
    width: 180px;
  }

  .youtube-player {
    width: 180px;
    height: 120px;
  }
}

/* @media (min-width: 700px) {
  .youtube-player {
    width: 75%;
    height: 260px;
  }
}

@media (min-width: 1000px) {
  .youtube-player {
    width: 64%;
    height: 50%;
  }
} */
</style>
