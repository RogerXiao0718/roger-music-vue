<template>
  <div class="rjm-header">
    <button class="header-list-btn" v-on:click="uiState.toggleSideBarActive()">
      <i class="fas fa-bars"></i>
    </button>
    <Logo />
    <UserAvatar :path="require('../assets/VgKn4ZCP_bigger.png')" />
  </div>
</template>
    
<script>
import uiState from "../state/uiState";
import Logo from "./Logo";
import UserAvatar from "./UserAvatar";
export default {
  data: function() {
    return {
      uiState
    };
  },
  components: {
    Logo,
    UserAvatar
  }
};
</script>

<style>
.rjm-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #353b48;
  box-sizing: border-box;
  padding: 0 15px;
}

.rjm-header .header-list-btn {
  padding: 2px;
  border: none;
  background: none;
  outline: none;
  font-size: 24px;
  color: #7f8fa6;
  cursor: pointer;
  transition: 0.2s;
}

.rjm-header .header-list-btn:hover {
  font-size: 26px;
}

.rjm-header .user-avatar {
  border-radius: 50%;
}

.rjm-header .user-avatar i {
  color: white;
  font-size: 20px;
}

.rjm-header .user-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* tablet style */
@media screen and (min-width: 680px) {
  .rjm-header .header-list-btn {
    display: none;
  }
}
</style>