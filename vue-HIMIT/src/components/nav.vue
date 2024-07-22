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
          <span class="t3">当前用户:{{ username }}</span>
          <!--          <span class="t4" >2024/07/20 10:58:49</span>-->
          <span class="t4">{{ localTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";

const username = ref('操作员')
const localTime = ref('')

const updateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  localTime.value = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000);
})

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
  position: relative; /* 修改为 relative */
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
  position: absolute;
  right: 20px;
  margin-top: -5px;
}

.t3 {
  margin-right: 20px;
  font-family: wdcht, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: white;
}

.t4 {
  font-family: wdcht, Helvetica, Arial, sans-serif;
  font-size: 23px;
  color: white;
}
</style>
