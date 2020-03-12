const uiState = {
  sideBarActive: false,
  toggleSideBarActive() {
    this.sideBarActive = !this.sideBarActive;
  },
  changeSideBarActive(isActive) {
    this.sideBarActive = isActive;
  }
};

export default uiState;
