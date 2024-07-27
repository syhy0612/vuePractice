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
          <span class="t3">当前用户: {{ isLoggedIn ? username : '未登录' }}</span>
          <span class="t4">{{ localTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, computed} from "vue";
import {useUserStore} from '@/stores/userStore.js';
// 初始化 user store
const userStore = useUserStore();
const username = computed(() => userStore.username);
const isLoggedIn = computed(() => userStore.isLoggedIn);
const localTime = ref('')

//获取当前时间并格式化
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
  userStore.initializeStore();
  updateTime()
  setInterval(updateTime, 1000);
})

</script>

<style lang="scss" scoped>
.box {
  height: 10vh;
  width: 100%;
  //显示边框方便调整
  //border: 1px solid pink;
}

.container {
  background-repeat: no-repeat;
  background-image: url("../assets/head_bg.png");
  background-position: center center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  //background-color: #464646;
  overflow: hidden;
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
