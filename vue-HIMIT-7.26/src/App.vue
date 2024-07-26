<template>
  <div class="common-layout">
    <!--这是Navbar-->
    <Nav/>
    <!--z这是页面-->
    <router-view/>
  </div>
</template>

<script setup>
import Nav from '@/components/nav.vue'
</script>

<style scoped lang="scss">
.common-layout {
  height: 100%;
  width: 100%;
  background-color: #6a6a6a;
}
</style>