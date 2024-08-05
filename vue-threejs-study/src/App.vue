<template>
  <div>

    <el-container>
      <el-header>Three.JS</el-header>
      <el-container>
        <el-aside>导航菜单哦</el-aside>
      </el-container>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.el-header {
  text-align: center;
  font-size: 20px;
  color: green;
  padding-top: 20px;
}

.el-aside {
  width: 10vw;
  width: 300px;
}
</style>