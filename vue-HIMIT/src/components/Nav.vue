<template>
  <div class="box">
    <div class="container">
      <img src="../assets/logo1.png" alt="加载失败" title="我是Logo" class="logo imgTop">
      <div class="text">
        <div class="textL">
          <div class="t1">品质信息(OQC)</div>
          <div class="t2">OQC Management</div>
        </div>
        <div class="textR">
          <span class="t3">当前用户:操作员</span>
          <span class="t4">2024/07/20 10:58:49</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.box {
  height: 100px;
}

.container {
  background: url("../assets/head_bg.png") no-repeat;
  background-position: top center;
  background-size: cover;
  width: 100%;
  height: auto;
  position: absolute;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
}

.logo {
  margin-top: 6px;
  width: 13%;
  padding-bottom: 30px;
}

.textL {
  float: left;
}

.t1,
.t2 {
  margin-left: 10px;
  margin-top: -10px;
  font-family: wdcht, Helvetica, Arial, sans-serif;
  font-size: 28px;
  color: white;
  letter-spacing: 2px;
}

.t2 {
  margin-top: -2px;
  font-size: 16px;
  color: #8c8c8c;
}

.textR {
  display: flex;
  align-items: center;
  //margin-left: 1350px;
  letter-spacing: 0px;
  //float: right;
}

.t3 {
  margin-right: 20px;
  font-family: wdcht, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: white;
  //float: right;
}

.t4 {
  font-family: wdcht, Helvetica, Arial, sans-serif;
  font-size: 24px;
  color: white;
  //float: right;
}
</style>
