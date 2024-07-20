<template>
  <div class="box">
    <div class="container">
      <img src="../assets/logo1.png" alt="加载失败" title="我是Logo" class="logo">
      <div class="text">
        品质信息(OQC)
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.box{
  height: 200px;
}
.container {
  background: url("../assets/head_bg.png") no-repeat;
  background-position: top center; /* 将背景图像位置设置为顶部居中 */
  background-size: cover; /* 使背景图像尽可能覆盖容器 */
  width: 100%; /* 宽度与网页同宽 */
  height: auto; /* 高度自适应，根据宽度等比例调整 */
}
.logo{
  margin-top: 5px;
  width: 13%;
  padding-bottom: 20px;
}
</style>
