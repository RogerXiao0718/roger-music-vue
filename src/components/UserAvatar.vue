<template>
  <div class="user-avatar">
    <a href="/">
      <img :src="path" alt="avatar" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  }
};
</script>

<style>
.user-avatar i {
  color: white;
  font-size: 20px;
}

.user-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
