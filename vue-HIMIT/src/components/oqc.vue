<template>
  <div class="container">
    <div class="leftBox">
      <echarts/>
    </div>
    <div class="rightBox">
      <echarts/>
    </div>
  </div>
</template>

<script setup>
import echarts from './echarts.vue'
</script>

<style lang="scss" scoped>
.container {
  display: flex; //设置弹性布局
  height: 790px; //设置固定高度
}

.leftBox {
  flex: 5.5;
  background-color: rgba(16, 27, 49, .6);
  //width: 90%;
}

.rightBox {
  flex: 4.5;
  background-color: rgba(16, 27, 49, .6);
}
</style>