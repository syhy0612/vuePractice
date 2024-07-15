<template>
  <div class="container">
    <h2 class="sy">这是首页</h2>
    <TuBiao class="tubiao" />
  </div>
</template>
<script setup>
import TuBiao from "../components/TuBiao.vue"
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* height: 100vh; */
}

.tubiao {
  margin-top: 40px;
}
</style>