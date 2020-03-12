<template>
  <div class="main-content"></div>
</template>

<script>
export default {};
</script>

<style>
.main-content {
  position: fixed;
  top: 60px;
  bottom: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

/* tablet style */
@media screen and (min-width: 680px) {
  .main-content {
    left: 180px;
  }
}
</style>