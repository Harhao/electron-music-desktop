<template>
  <div id="app" :data-theme="theme">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'electron-music-desktop',
    computed: {
      theme() {
        return this.$store.state.color.primaryColor
      }
    }
  }
</script>

<style lang="scss">
@import url('~@/assets/styles/reset.scss');
#app {
  width: 100%;
  height: 100vh;
}
</style>
