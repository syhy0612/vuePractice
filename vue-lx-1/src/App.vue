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
  font-family: "Microsoft YaHei";
}
.sy {
  margin-top: 20px;
  text-align: center;
}
</style>