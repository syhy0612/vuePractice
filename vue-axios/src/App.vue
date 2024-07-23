<template>
  <div>
    <!--标题-->
    <div class="title">天气预报</div>
    <!-- 输入框-->
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
      <div></div>
      <span>天数：</span>
      <el-input-number
          type="text"
          v-model="day"
          class="inputInfo"
          :prefix-icon="Search"
          :min="1" :max="14"
      />
      <div></div>
      <el-button type="primary" style="margin-top: 5px;" @click="getTianQi">查询</el-button>
    </div>
    <!--图表-->
    <echarts :chart-options="weatherChart" class="echarts"/>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import {Search} from '@element-plus/icons-vue'
import echarts from './components/echarts.vue'

// 默认经纬度
const latitude = ref(29.28)
const longitude = ref(113.1212)
// 默认天数
const day = ref(7)
// 请求参数
const params = {
  latitude: latitude.value,
  longitude: longitude.value,
  daily: 'weather_code,precipitation_sum',
  timezone: 'auto',
  forecast_days: day.value
};
// 天气代码
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
// 只能请求0-16天
const url = 'https://api.open-meteo.com/v1/forecast'
// 测试图表
const boxA1 = {
  title: {
    text: 'Stacked Line'
  },
  // tooltip: {
  //   trigger: 'axis'
  // },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
// 天气图表
const weatherChart = {
  title: {
    text: '天气预报'
  },
  // tooltip: {
  //   trigger: 'axis'
  // },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
// 天气-信息列表
const weatherList =ref([])

async function getTianQi() {
  try {
    const res = await axios({
      url: url,
      method: 'get',
      params: params
    })
    getTianQiInfo(res.data)
  } catch (error) {
    // 处理错误
    console.error('获取天气信息失败:', error);
  }
}

function getTianQiInfo(data) {
  //todo 解析数据
  // console.log(data)
  console.log(data.daily)

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
