<template>
  <div>
    <TopNav />
    <router-view />
  </div>
</template>

<script setup>
import TopNav from "./components/TopNav.vue";
import router from "./router";
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>