<template>
  <div>
    <div class="title">天气预报</div>
    <input type="text" v-model="latitude">
    <div>{{ latitude }}</div>

  </div>
</template>

<script setup>
// import {ref} from "vue";
import axios from "axios";

const latitude = ref('')
const longitude = ref('')

getTianQi()

async function getTianQi() {

  try {
    const res = await axios({
      url: 'https://api.open-meteo.com/v1/forecast?latitude=29.28&longitude=113.1212&daily=weather_code&timezone=auto&forecast_days=14',
      method: 'get',
    })
    // 处理响应数据
    console.log(res.data);
  } catch (error) {
    // 处理错误
    console.error('获取天气信息失败:', error);
  }
}

</script>

<style scoped>
.title {
  text-align: center;
  font-size: 30px;
}
</style>