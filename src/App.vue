<template>
  <div class="rjm-app">
    <Header />
    <SideBar v-touch:swipe.left="sideBarSwipeHandler" />
    <MusicList
      v-touch:swipe.right="musicListSwipeHandler"
      v-touch:swipe.left="sideBarSwipeHandler"
    />
    <Controls />
  </div>
</template>

<script>
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Controls from "./components/Controls";
import MusicList from "./components/MusicList";
import uiState from "./state/uiState";

export default {
  components: {
    Header,
    SideBar,
    Controls,
    MusicList
  },
  data: function() {
    return {
      uiState
    };
  },
  methods: {
    sideBarSwipeHandler() {
      this.uiState.changeSideBarActive(false);
    },
    musicListSwipeHandler() {
      this.uiState.changeSideBarActive(true);
    }
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #2f3640;
}
.rjm-app {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}
</style>
