<template>
  <div class="play-pgbar-container">
    <input
      type="range"
      min="0"
      :max="currentDuration"
      :value="playState.currTime.toString()"
      class="play-pgbar"
    />
    <section class="dur-displayer">
      <span class="curr-time">{{ formattedCurrentTime }}</span>
      <span class="vid-dur">{{ formattedDuration }}</span>
    </section>
  </div>
</template>

<script>
import { parse, toSeconds } from "iso8601-duration";
import TimeFormat from "hh-mm-ss";

import playState from "../state/playState";

export default {
  data: function() {
    return {
      playState
    };
  },
  computed: {
    currentDuration() {
      if (this.playState.duration)
        return toSeconds(parse(this.playState.duration));
      else return 0;
    },
    formattedCurrentTime() {
      return TimeFormat.fromS(this.playState.currTime, "mm:ss");
    },
    formattedDuration() {
      return TimeFormat.fromS(
        this.playState.duration ? toSeconds(parse(this.playState.duration)) : 0,
        "mm:ss"
      );
    }
  }
};
</script>

<style>
.play-pgbar-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.play-pgbar-container .play-pgbar {
  -webkit-appearance: none;
  position: absolute;
  top: -1px;
  width: 100%;
  height: 2px;
  outline: none;
  background: #95a5a6;
}

.play-pgbar-container .play-pgbar::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  background-color: #34495e;
  border-radius: 50%;
}

.play-pgbar-container .dur-displayer {
  color: white;
  padding: 4px 20px;
  font-weight: bold;
  font-size: 16px;
}

.play-pgbar-container .curr-time {
  float: left;
}

.play-pgbar-container .vid-dur {
  float: right;
}
</style>
