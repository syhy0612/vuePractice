<template>
  <div>
    <h1>我是首页</h1>
    <hr>
    <a href="https://github.com/syhy0612/vuePractice" target="_blank"><p>npm install</p></a>
    <p>npm run dev</p>
    <router-link to="oqc"><p>npm run build</p></router-link>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
div {
  height: 90vh;
  width: 100%;
  overflow: hidden;
}

h1, p {
  color: white;
  text-align: center;
}

:deep(a) {
  text-decoration: none;
}
</style>