<template>
  <div class="music-item-el" @click="onClick(index - 1)">
    <img class="music-thumbnail" v-bind:src="imageSrc" alt="music thumbnail" />
    <span
      class="music-name"
    >{{musicData.items ? musicData.items[0].snippet.title : 'music not found'}}</span>
    <button class="del-video-btn" @click="onDelete">
      <i class="fas fa-trash"></i>
    </button>
  </div>
</template>

<script>
import KEY from "../apis/youtubeKey";
import playState from "../state/playState";

export default {
  props: ["vid", "index"],
  data: function() {
    return {
      musicData: {},
      playState
    };
  },
  computed: {
    imageSrc: function() {
      return `https://i.ytimg.com/vi/${this.vid}/hqdefault.jpg`;
    }
  },
  methods: {
    onClick: function(index) {
      this.playState.switchByIndex(index);
    },
    onDelete: function(event) {
      event.stopPropagation();
      this.playState.removeMusic(this.index - 1);
    }
  },
  created: function() {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${KEY}&id=${this.vid}&part=snippet, contentDetails`
    )
      .then(res => res.json())
      .then(data => (this.musicData = data));
  }
};
</script>

<style>
.music-item-el {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 5px 10px;
  transition: 0.2s;
}
.music-item-el:hover {
  background-color: #666;
}
.music-thumbnail {
  width: 80px;
  height: 65px;
  border-radius: 8px;
  margin-right: 8px;
}
.music-name {
  font-size: 14px;
  color: #bdc3c7;
  flex: 1;
}
.del-video-btn {
  background: none;
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  padding: 4px;
  cursor: pointer;
  z-index: 5;
  transition: 0.1s;
}

.del-video-btn:hover {
  color: #d35400;
}
@media (min-width: 700px) {
  .del-video-btn {
    margin-right: 1%;
  }
}
</style>

