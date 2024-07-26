<template>
  <div class="container">
    <div class="bgMask">
      <!--这是Navbar-->
      <Nav/>
      <!--这是页面-->
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import Nav from '@/components/nav.vue'
</script>

<style scoped lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  min-height: 100vh;
  width: 100%;
  background: url("./assets/bg.jpg") no-repeat center center fixed;
  background-size: cover;
  background-color: #464646;
  font-family: 'wdch';
  position: relative;
}

.bgMask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.88);
}

nav, router-view {
  position: relative;
  z-index: 2;
}
</style>