const initialPlayList = [
  "4PVdE4lmWxM",
  "xotYGvOt35Y",
  "-f2vcJToADo",
  "Xm5eJum2ESI",
  "m8M4OkfBsA8",
  "uVeSf_vIeAE",
  "s7fTnIE2YTo"
];

export default {
  musicIdList: initialPlayList,
  isPlaying: false,
  currentIndex: 0,
  currentId: initialPlayList[0],
  currTime: 0,
  duration: "",
  volume: 10,
  player: null,
  toggleIsPlaying() {
    this.isPlaying = !this.isPlaying;
  },
  changePlayingState(isPlaying) {
    this.isPlaying = isPlaying;
  },
  changeCurrentId(id) {
    this.currentId = id;
  },
  changeVolume(volume) {
    this.volume = volume;
  },
  setDuration(duration) {
    this.duration = duration;
  },
  updateCurrTime() {
    // const state = this;
    // this.player.getCurrentTime(value => {
    //   state.currTime = value;
    // });
    this.currTime = Math.floor(this.player.getCurrentTime());
  },
  addMusic(id) {
    this.musicIdList = [id, ...this.musicIdList];
  },
  removeMusic(removedIndex) {
    this.musicIdList = this.musicIdList.filter((id, index) => {
      if (index !== removedIndex) return true;
      else return false;
    });
  },
  switchToNextMusic() {
    this.currentIndex = (this.currentIndex + 1) % this.musicIdList.length;
    this.currentId = this.musicIdList[this.currentIndex];
    this.player.loadVideoById(this.currentId);
    this.player.playVideo();
  },
  switchToPreviousMusic() {
    this.currentIndex =
      this.currentIndex - 1 < 0
        ? this.musicIdList.length - 1
        : this.currentIndex - 1;
    this.currentId = this.musicIdList[this.currentIndex];
    this.player.loadVideoById(this.currentId);
    this.player.playVideo();
  },
  switchByIndex(index) {
    this.currentIndex = index;
    this.currentId = this.musicIdList[index];
    this.isPlaying = true;
    this.player.loadVideoById(this.currentId);
    this.player.playVideo();
  },
  setPlayer(player) {
    this.player = player;
  }
};
