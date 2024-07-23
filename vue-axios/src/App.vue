<template>
  <div>
    <div class="title">天气预报</div>
    <div class="inputBox">
      <span>纬度：</span>
      <el-input
          type="text"
          v-model="latitude"
          class="inputInfo"
          placeholder="请输入纬度"
          :prefix-icon="Search"
          clearable
      />
      <span>{{ latitude }}</span>
      <div></div>
      <span>经度：</span>
      <el-input
          type="text"
          v-model="longitude"
          class="inputInfo"
          placeholder="请输入经度"
          :prefix-icon="Search"
          clearable
      />
      <span>{{ longitude }}</span>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import {Search} from '@element-plus/icons-vue'

const latitude = ref('29.28')
const longitude = ref('113.1212')

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
  letter-spacing:10px;
  color: #13ce66;
  margin-top: 20px;
}

.inputInfo {
  width: 150px;
  margin-top: 5px;
  height: 30px;
}

.inputBox {
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
}
.inputBox span {
  display: inline-block;
  margin-top: 5px;
  height: 30px;
  line-height: 30px;
}
</style>
