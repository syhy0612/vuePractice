<template>
  <div>
    <div class="title">天气预报</div>
    <div class="inputBox">
      <span>纬度：</span>
      <el-input
          v-model="latitude"
          class="inputInfo"
          placeholder="请输入纬度"
          :prefix-icon="Search"
          clearable
      />
      <div></div>
      <span>经度：</span>
      <el-input
          v-model="longitude"
          class="inputInfo"
          placeholder="请输入经度"
          :prefix-icon="Search"
          clearable
      />
      <div></div>
      <span>天数：</span>
      <el-input-number
          v-model="day"
          class="inputInfo"
          :min="1"
          :max="14"
      />
      <div></div>
      <el-button type="primary" style="margin-top: 5px;" @click="getTianQi">查询</el-button>
    </div>
    <echarts :chart-options="weatherChart" class="echarts" v-if="judge"/>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
import { Search } from '@element-plus/icons-vue'
import echarts from './components/echarts.vue'

const judge = ref(false);
const latitude = ref(29.28);
const longitude = ref(113.1212);
const day = ref(7);
const weatherList = ref([]);

const url = 'https://api.open-meteo.com/v1/forecast';

const weatherCodes = {
  0: '晴天',
  1: '晴间多云',
  2: '部分多云',
  3: '阴天',
  45: '雾',
  48: '冰雾',
  51: '小毛毛雨',
  53: '中毛毛雨',
  55: '大毛毛雨',
  56: '小冻毛毛雨',
  57: '大冻毛毛雨',
  61: '小雨',
  63: '中雨',
  65: '大雨',
  66: '小冻雨',
  67: '大冻雨',
  71: '小雪',
  73: '中雪',
  75: '大雪',
  77: '雪粒',
  80: '小阵雨',
  82: '强阵雨',
  85: '小阵雪',
  86: '大阵雪',
  95: '轻度或中度雷暴',
  96: '雷暴伴有小冰雹',
  99: '雷暴伴有大冰雹'
};

const weatherChart = reactive({
  // title: { text: '天气预报' },
  tooltip: { trigger: 'axis' },
  legend: { data: ['最高温度', '最低温度', '降水量'] },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: []
  },
  yAxis: [
    { type: 'value', name: '温度 (°C)' },
    { type: 'value', name: '降水量 (mm)' }
  ],
  series: [
    { name: '最高温度', type: 'line', data: [] },
    { name: '最低温度', type: 'line', data: [] },
    { name: '降水量', type: 'bar', yAxisIndex: 1, data: [] }
  ]
});

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

async function getTianQi() {
  judge.value = false;
  const params = {
    latitude: latitude.value,
    longitude: longitude.value,
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum',
    timezone: 'auto',
    forecast_days: day.value,
  };

  try {
    const res = await axios.get(url, { params });
    console.log("当前请求天数", params.forecast_days);
    console.log(res.data);
    getTianQiInfo(res.data);
    updateWeatherChart();
    judge.value = true;
  } catch (error) {
    console.error('获取天气信息失败:', error);
  }
}

function getTianQiInfo(data) {
  const daily = data.daily;
  weatherList.value = daily.time.map((item, index) => ({
    date: formatDate(item),
    weather: weatherCodes[daily.weather_code[index]] || '未知',
    temperatureMax: daily.temperature_2m_max[index],
    temperatureMin: daily.temperature_2m_min[index],
    precipitation: daily.precipitation_sum[index]
  }));
  console.log("解析结果", weatherList.value);
}

function updateWeatherChart() {
  weatherChart.xAxis.data = weatherList.value.map(item => item.date);
  weatherChart.series[0].data = weatherList.value.map(item => parseFloat(item.temperatureMax));
  weatherChart.series[1].data = weatherList.value.map(item => parseFloat(item.temperatureMin));
  weatherChart.series[2].data = weatherList.value.map(item => parseFloat(item.precipitation));
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 30px;
  letter-spacing: 10px;
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
  /*display: flex;
  align-items: center;*/
  margin-top: 20px;
  font-size: 16px;
}

.inputBox span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  /*padding-top: 5px;
  margin-top: 5px;*/
}

.echarts {
  margin: 0 auto;
  margin-top: 10px;
}
</style>