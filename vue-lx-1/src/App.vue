<template>
  <div>
    <TopNav :userStore="userStore" />
    <router-view />
  </div>
</template>

<script setup>
import TopNav from "./components/TopNav.vue";
import router from "./router";
import useUserStore from "./store/user.js";
const userStore = useUserStore();
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