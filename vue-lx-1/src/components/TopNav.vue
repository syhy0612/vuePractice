<template>
  <div class="nav">
    <span id="time">现在是 {{ nowTime }}, {{ hello }} !</span>
    <router-link to="/home"><b>首页</b></router-link>
    <router-link to="/login"><b>登录</b></router-link>
  </div>
</template>
  
  <script setup>
import { ref, onMounted, computed } from "vue";

const nowTime = ref(""); // 定义一个响应式变量来存储当前时间
const hello = ref(""); // 定义一个响应式变量来存储问候语

// 获取当前时间，并格式化为 HH:mm:ss
const formatTime = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

// 判断时间段并设置问候语
const setGreeting = () => {
  const hours = new Date().getHours();
  if (hours >= 6 && hours < 8) {
    hello.value = "早上好";
  } else if (hours < 11) {
    hello.value = "上午好";
  } else if (hours < 13) {
    hello.value = "中午好";
  } else if (hours < 17) {
    hello.value = "下午好";
  } else if (hours < 22) {
    hello.value = "晚上好";
  } else {
    hello.value = "好好休息";
  }
};

// 定时更新当前时间和问候语
const updateTimeAndGreeting = () => {
  nowTime.value = formatTime(); // 更新当前时间
  setGreeting(); // 设置问候语
};

// 在组件挂载时开始定时更新时间和问候语
onMounted(() => {
  updateTimeAndGreeting(); // 初始化时间和问候语
  setInterval(updateTimeAndGreeting, 1000); // 每秒更新一次时间和问候语
});
</script>
  
<style scoped>
#time {
    color: white;
    margin-left: 20px;
}

.nav {
  width: 100%;
  height: 50px;
  background-color: blue;
  line-height: 50px;
}
.nav b {
  float: right;
  color: white;
  margin-right: 20px;
  font-size: 18px;
}
</style>