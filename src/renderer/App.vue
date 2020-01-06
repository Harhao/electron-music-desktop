<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-music-desktop'
  }
</script>

<style lang="scss">
@import url('~@/assets/styles/reset.scss');
#app {
  width: 100%;
  height: 100vh;
}
</style>
