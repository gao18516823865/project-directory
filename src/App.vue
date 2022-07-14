<script setup lang="ts">
console.log(import.meta.env.VITE_BASIC_URL)
</script>
<template>
  <router-view>
  </router-view>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body,
#app {
  height: 100%;
}
</style>
