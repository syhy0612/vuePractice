<template>
  <div>

    <el-container>
      <el-header>Three.JS</el-header>
      <el-container class="con-main">
        <el-aside>导航菜单哦</el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.el-header {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: green;
  //padding-top: 20px;
  line-height: 10vh;
  background: lightgray;
  width: 100%;
  height: 10vh;
}

.con-main {
  width: 100%;
  height: 90vh;

  .el-aside {
    width: 10vw;
    font-weight: bold;
    font-size: 20px;
    background: pink;
  }

  .el-main {
    background: lightsalmon;
  }
}


</style>