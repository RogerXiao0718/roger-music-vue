<template>
  <ul class="music-list">
    <li class="music-item" v-for="(musicId, index) in playState.musicIdList" v-bind:key="index">
      <MusicItem v-bind:vid="musicId" v-bind:index="index + 1" />
    </li>
  </ul>
</template>

<script>
import playState from "../state/playState";
import MusicItem from "./MusicItem";

export default {
  components: { MusicItem },
  data: function() {
    return {
      playState
    };
  }
};
</script>

<style>
.music-list {
  position: fixed;
  top: 60px;
  bottom: 60px;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* tablet style */
@media screen and (min-width: 680px) {
  .music-list {
    left: 180px;
  }
}
</style>
