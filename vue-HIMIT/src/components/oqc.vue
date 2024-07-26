<template>
  <div class="container">
    <div class="leftBox">
      <div class="leftTop">
        <div class="a1 littleBox colorYellow">
          <div class="before_title"></div>
          <div class="title">待检时长</div>
          <echarts :chart-options="boxA1"/>
        </div>
        <div class="a2 littleBox">
          <div class="before_title"></div>
          <div class="title">每日数据汇总</div>
          <!--todo:日期选项需要底色透明效果  查当前月份 禁用月份 点击效果-->
          <el-date-picker
              class="monthlyFilter"
              :clearable="false"
              v-model="checkTime"
              :disabled-date="disabledDate"
              type="month"
              placeholder="选择月份"
              @change="changeTime"
          />
          <echarts :chart-options="boxA2"/>
        </div>
      </div>
      <div class="leftMiddle">
        <div class="b1 littleBox colorYellow">
          <div class="before_title"></div>
          <div class="title">工损</div>
          <!--          workLoss hrs-->
          <!--          #fef000-->
          <div class="workLoss">
            <div class="workLossTop">
              <div class="dayWeekMonth">日</div>
              <div class="dayWeekMonthValue">0</div>
            </div>
            <div class="unit">hrs</div>
            <hr/>
            <div class="workLossMiddle">
              <div class="dayWeekMonth">周</div>
              <div class="dayWeekMonthValue">0</div>
            </div>
            <div class="unit">hrs</div>
            <hr/>
            <div class="workLossBottom">
              <div class="dayWeekMonth">月</div>
              <div class="dayWeekMonthValue">10.1</div>
            </div>
            <div class="unit">hrs</div>
          </div>
        </div>
        <div class="b2 littleBox">
          <div class="before_title"></div>
          <div class="title">NG批次处理</div>
          <div class="block">
            <el-date-picker
                v-model="ngDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                :size="'small'"
            />
            <div class="main_left">
              <el-table :show-summary="true" :summary-method="getSummaries"
                        @cell-click="passCellClick" :data="IQCDayPassAsync"
                        style="width: 100%; background: transparent !important" :row-style="rowState"
                        size="small" stripe :header-rowStyle="headerRowStyle"
                        :header-cellStyle="headerCellStyle" height="97%" :cell-style="cellStyle3"
                        ref="reportTable">
                <el-table-column class-name="hoverClass" prop="工单号" show-overflow-tooltip
                                 label="工单号" min-width="60"/>
                <el-table-column prop="成品编码" label="机型" min-width="60" show-overflow-tooltip/>
                <el-table-column prop="报检人" label="报检人" width="60"/>
                <el-table-column prop="日期" label="日期" min-width="50"/>
                <el-table-column prop="现象" label="现象" min-width="50"/>
                <el-table-column prop="问题类型" label="问题类型" min-width="50"/>
                <el-table-column prop="结论" label="结论" min-width="50"/>
                <el-table-column prop="工损" label="工损" min-width="50"/>
                <el-table-column prop="状态" label="状态" :formatter="fmtNumber" min-width="60"/>
                <el-table-column prop="检次" label="检次" :formatter="fmtInNumber" min-width="60"/>
              </el-table>
            </div>
          </div>

        </div>
      </div>
      <div class="leftBottom">
        <div class="c1 littleBox">
          <div class="before_title"></div>
          <div class="title">PASS待入库（共8项）</div>
          <el-date-picker
              v-model="passTime"
              :clearable="true"
              :disabled-date="disabledDate" type="date"
              placeholder="检验时间"
              @change="changeDayTime"
          />
          <div class="main_left">
            <el-table :show-summary="true" :summary-method="getSummaries"
                      @cell-click="passCellClick" :data="IQCDayPassAsync"
                      style="width: 100%; background: transparent !important" :row-style="rowState"
                      size="small" stripe :header-rowStyle="headerRowStyle"
                      :header-cellStyle="headerCellStyle" height="97%" :cell-style="cellStyle3"
                      ref="reportTable">
              <el-table-column class-name="hoverClass" prop="工单号" show-overflow-tooltip
                               label="工单号" min-width="110"/>
              <el-table-column prop="成品编码" label="机型" min-width="125" show-overflow-tooltip/>
              <el-table-column prop="日期" label="日期" min-width="50"/>
              <!-- <el-table-column prop="抽检数" label="抽检数" width="60" /> -->
              <el-table-column prop="送检数量" label="数量" :formatter="fmtNumber" min-width="70"/>
              <el-table-column prop="入库数量" label="入库数量" :formatter="fmtInNumber" min-width="70"/>
            </el-table>
          </div>
        </div>
        <div class="c2 littleBox">
          <div class="before_title"></div>
          <div class="title">待检工单 (共8项）</div>
          <div class="main_left">
            <el-table :show-summary="true" :summary-method="getSummaries"
                      @cell-click="passCellClick" :data="IQCDayPassAsync"
                      style="width: 100%; background: transparent !important" :row-style="rowState"
                      size="small" stripe :header-rowStyle="headerRowStyle"
                      :header-cellStyle="headerCellStyle" height="97%" :cell-style="cellStyle3"
                      ref="reportTable">
              <el-table-column class-name="hoverClass" prop="工单号" show-overflow-tooltip
                               label="工单号" min-width="110"/>
              <el-table-column prop="成品编码" label="机型" min-width="125" show-overflow-tooltip/>
              <el-table-column prop="日期" label="日期" min-width="50"/>
              <!-- <el-table-column prop="抽检数" label="抽检数" width="60" /> -->
              <el-table-column prop="送检数量" label="数量" :formatter="fmtNumber" min-width="70"/>
              <el-table-column prop="入库数量" label="入库数量" :formatter="fmtInNumber" min-width="70"/>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="rightBox">
      <div class="rightTop">
        <div class="a3 littleBox colorYellow">
          <div class="before_title"></div>
          <div class="title">数量</div>
        </div>
        <div class="a4">
          <div class="a4u littleBox">
            <div class="before_title"></div>
            <div class="title">报检人统计</div>
            <div class="main_left">
              <el-table :show-summary="true" :summary-method="getSummaries"
                        @cell-click="passCellClick" :data="IQCDayPassAsync"
                        style="width: 100%; background: transparent !important" :row-style="rowState"
                        size="small" stripe :header-rowStyle="headerRowStyle"
                        :header-cellStyle="headerCellStyle" height="97%" :cell-style="cellStyle3"
                        ref="reportTable">
                <el-table-column class-name="hoverClass" prop="工单号" show-overflow-tooltip
                                 label="工单号" min-width="110"/>
                <el-table-column prop="成品编码" label="机型" min-width="125" show-overflow-tooltip/>
                <el-table-column prop="日期" label="日期" min-width="50"/>
                <!-- <el-table-column prop="抽检数" label="抽检数" width="60" /> -->
                <el-table-column prop="送检数量" label="数量" :formatter="fmtNumber" min-width="70"/>
                <el-table-column prop="入库数量" label="入库数量" :formatter="fmtInNumber" min-width="70"/>
              </el-table>
            </div>
          </div>
          <div class="a4d littleBox">
            <div class="before_title"></div>
            <div class="title">NG批次周汇总</div>
            <echarts :chart-options="boxA2"/>
          </div>
        </div>
      </div>
      <div class="rightMiddle">
        <div class="b3 littleBox">
          <div class="before_title"></div>
          <div class="title">报检人不良占比</div>
          <echarts :chart-options="boxA2"/>
        </div>
        <div class="b4 littleBox">
          <div class="before_title"></div>
          <div class="title">产品不良占比</div>
          <echarts :chart-options="boxA2"/>
        </div>
      </div>
      <div class="rightBottom">
        <div class="c3 littleBox">
          <div class="before_title"></div>
          <div class="title">NG批次汇总</div>
          <echarts :chart-options="boxA2"/>
        </div>
        <div class="c4 littleBox">
          <div class="before_title"></div>
          <div class="title">人员名单</div>
          <div class="main_left">
            <el-table :show-summary="true" :summary-method="getSummaries"
                      @cell-click="passCellClick" :data="IQCDayPassAsync"
                      style="width: 100%; background: transparent !important" :row-style="rowState"
                      size="small" stripe :header-rowStyle="headerRowStyle"
                      :header-cellStyle="headerCellStyle" height="97%" :cell-style="cellStyle3"
                      ref="reportTable">
              <el-table-column class-name="hoverClass" prop="工单号" show-overflow-tooltip
                               label="工单号" min-width="110"/>
              <el-table-column prop="成品编码" label="机型" min-width="125" show-overflow-tooltip/>
              <el-table-column prop="日期" label="日期" min-width="50"/>
              <!-- <el-table-column prop="抽检数" label="抽检数" width="60" /> -->
              <el-table-column prop="送检数量" label="数量" :formatter="fmtNumber" min-width="70"/>
              <el-table-column prop="入库数量" label="入库数量" :formatter="fmtInNumber" min-width="70"/>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import echarts from './echarts.vue'
// import dailyDataImport from '../assets/data/dailyData.json'

const ngDate = ref('')
const checkTime = ref('')
const passTime = ref('')

const boxA1 = ref( {
  title: {
    text:
        '2',
    left: "center",
    top: "44%",
    textStyle: {
      color: "#fff",
      fontSize: 26,
      align: "center",
      textShadowBlur: 10,
      textShadowColor: "#FFA07A",
    },
  },
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      // roseType: "radius",
      startAngle: 60,
      name: "待检时长",
      type: "pie",
      radius: ["30%", "45%"],
      center: ["50%", "50%"],
      color: [" #7f2a2a", "#fbfe27"],
      data: [
        {value: '1'.num, name: "三天以上"},
        {value: '2', name: "两天内"},
        {value: '3'.num, name: "一天内"},
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      itemStyle: {
        //饼状图阴影，值越大阴影亮度越高
        shadowBlur: 20,
        shadowColor: "#FFA07A",
      },
      label: {
        formatter: "{value|{c}}\n{name|{b}}",
        rich: {
          name: {
            fontSize: 14,
            color: "#fff",
          },
          value: {
            fontSize: 18,
            fontWeight: 600,
            color: "#FEF000",
            shadowBlur: 20,
            shadowColor: "#FFA07A",
          },
        },
      },
      labelLine: {
        show: true, //数据标签引导线
        // length: 6,
        lineStyle: {
          width: 1,
          type: "solid",
        },
      },
    },
  ],
})
const daysData = [
  { date: '2024-07-01', ngCount: 2, passCount: 18, workers: 25, workHours: 200 },
  { date: '2024-07-02', ngCount: 1, passCount: 20, workers: 24, workHours: 192 },
  { date: '2024-07-03', ngCount: 3, passCount: 17, workers: 26, workHours: 208 },
  { date: '2024-07-04', ngCount: 0, passCount: 22, workers: 25, workHours: 200 },
  { date: '2024-07-05', ngCount: 2, passCount: 19, workers: 23, workHours: 184 },
  { date: '2024-07-06', ngCount: 1, passCount: 21, workers: 24, workHours: 192 },
  { date: '2024-07-07', ngCount: 2, passCount: 18, workers: 25, workHours: 200 },
  { date: '2024-07-08', ngCount: 1, passCount: 22, workers: 26, workHours: 208 },
  { date: '2024-07-09', ngCount: 3, passCount: 19, workers: 25, workHours: 200 },
  { date: '2024-07-10', ngCount: 0, passCount: 21, workers: 24, workHours: 192 },
  { date: '2024-07-11', ngCount: 2, passCount: 18, workers: 26, workHours: 208 },
  { date: '2024-07-12', ngCount: 1, passCount: 20, workers: 23, workHours: 184 },
  { date: '2024-07-13', ngCount: 2, passCount: 17, workers: 24, workHours: 192 },
  { date: '2024-07-14', ngCount: 0, passCount: 22, workers: 25, workHours: 200 },
  { date: '2024-07-15', ngCount: 1, passCount: 19, workers: 26, workHours: 208 },
  { date: '2024-07-16', ngCount: 3, passCount: 21, workers: 25, workHours: 200 },
  { date: '2024-07-17', ngCount: 0, passCount: 18, workers: 24, workHours: 192 },
  { date: '2024-07-18', ngCount: 2, passCount: 20, workers: 26, workHours: 208 },
  { date: '2024-07-19', ngCount: 1, passCount: 19, workers: 23, workHours: 184 },
  { date: '2024-07-20', ngCount: 2, passCount: 21, workers: 24, workHours: 192 },
  { date: '2024-07-21', ngCount: 0, passCount: 18, workers: 25, workHours: 200 },
  { date: '2024-07-22', ngCount: 1, passCount: 22, workers: 26, workHours: 208 },
  { date: '2024-07-23', ngCount: 3, passCount: 19, workers: 25, workHours: 200 },
  { date: '2024-07-24', ngCount: 0, passCount: 20, workers: 24, workHours: 192 },
  { date: '2024-07-25', ngCount: 2, passCount: 18, workers: 26, workHours: 208 },
  { date: '2024-07-26', ngCount: 1, passCount: 21, workers: 23, workHours: 184 },
  { date: '2024-07-27', ngCount: 2, passCount: 17, workers: 24, workHours: 192 },
  { date: '2024-07-28', ngCount: 0, passCount: 22, workers: 25, workHours: 200 },
  { date: '2024-07-29', ngCount: 1, passCount: 19, workers: 26, workHours: 208 },
  { date: '2024-07-30', ngCount: 3, passCount: 21, workers: 25, workHours: 200 },
  { date: '2024-07-31', ngCount: 0, passCount: 18, workers: 24, workHours: 192 },
];

console.log(daysData);

const boxA2 = {
  dataZoom: [
    {
      type: "slider",
      height: 7,
      backgroundColor: "transparent",
      borderColor: "transparent",
      bottom: 0,
      textStyle: {
        color: "transparent",
      },
      zoomLock: true,
      startValue: 0,
      endValue: 7,
    },
  ],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (params) => {
      let str = "";
      params.forEach((item) => {
        str += `${item.marker} <b>${item.seriesName}: ${item.value} </b><br/>`;
      });
      return params[0].name + "<br/>" + str;
    },
  },
  legend: {
    show: true,
    right: "10px",
    width: "100%",
    data: ["PASS批次数", "NG批次数", "上班人数", "打卡工时"],
    textStyle: {
      color: "#fff",
    },
  },
  grid: {
    top: "35%",
    right: "1%",
    left: "1%",
    bottom: "15%",
  },
  xAxis: [
    {
      triggerEvent: true,
      type: "category",
      axisLabel: {
        color: "#b9bec6",
        interval: 0,
        fontSize: 12,
        formatter: function (value) {
          if (value.length > 9) {
            return `${value.slice(0, 9)}...`;
          }
          return value;
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#0a3e98",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#195384",
          type: "dotted",
        },
      },
      data: daysData.map(v => v.date),
    },
  ],
  yAxis: [
    {
      type: "value",
      min: 0,
      position: "left",
      nameTextStyle: {
        color: "#fff",
        fontSize: 10,
      },
      axisLine: {
        lineStyle: {
          color: "#0a3e98",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255,255,255,.2)",
          type: "dotted",
        },
      },
      axisLabel: {
        formatter: "{value}",
        color: "transparent",
      },
    },
    {
      type: "value",
      min: 0,
      max: function () {
        return Math.max(...daysData.map(v => v.workHours)) * 2.2;
      },
      position: "left",
      nameTextStyle: {
        color: "#fff",
        fontSize: 10,
      },
      axisLine: {
        lineStyle: {
          color: "#0a3e98",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#0a3e98",
          type: "dotted",
        },
      },
      axisLabel: {
        formatter: "{value}",
        color: "transparent",
      },
    },
  ],
  series: [
    {
      yAxisIndex: 0,
      name: "NG批次数",
      type: "bar",
      stack: "bar",
      barMaxWidth: 25,
      barGap: 0.3,
      itemStyle: {
        color: "#ff5858",
      },
      label: {
        show: false,
        position: "top",
        color: "#fff",
      },
      data: daysData.map(v => v.ngCount),
    },
    {
      yAxisIndex: 0,
      name: "PASS批次数",
      type: "bar",
      stack: "bar",
      barMaxWidth: 25,
      barGap: 0.3,
      itemStyle: {
        color: "rgba(73, 188, 247,1)",
      },
      label: {
        show: true,
        position: "top",
        formatter: function (params) {
          const dayData = daysData[params.dataIndex];
          return `${dayData.ngCount <= 0 ? "{d|0}" : `{a|${dayData.ngCount}}`}\n${params.value}\n${dayData.workers}\n${dayData.workHours}`;
        },
        rich: {
          a: {
            color: "#F00",
            fontWeight: 900,
          },
          b: {
            color: "#FFFF00",
            fontSize: 11,
          },
          c: {
            color: "#eee",
            fontSize: 11,
            fontFamily: "wdch",
          },
          d: {
            color: "rgba(255,255,255,0.5)",
            fontSize: 11,
          },
        },
        fontSize: 12,
        color: "rgba(255,255,255,0.5)",
        align: "right",
        padding: [0, -10, 0, 0],
      },
      data: daysData.map(v => v.passCount),
    },
    {
      yAxisIndex: 0,
      data: daysData.map(v => v.workers),
      name: "上班人数",
      type: "line",
      symbolSize: 3,
      smooth: true,
      itemStyle: {
        color: "#00d6e1",
      },
      label: {
        show: false,
        fontSize: 10,
        top: 0,
        color: "#eee",
        distance: 10,
      },
      lineStyle: {
        width: 2,
      },
    },
    {
      yAxisIndex: 1,
      data: daysData.map(v => v.workHours),
      name: "打卡工时",
      type: "line",
      symbolSize: 3,
      smooth: true,
      itemStyle: {
        color: "#99cc00",
      },
      label: {
        show: false,
        fontSize: 10,
        top: 0,
        color: "#eee",
        distance: 10,
      },
      lineStyle: {
        width: 2,
      },
    },
  ],
};

</script>

<style lang="scss" scoped>
.container {
  display: flex; //设置弹性布局
  height: 850px; //设置固定高度
}

//左边大盒子
.leftBox {
  flex: 5.5;
  //background-color: rgba(16, 27, 49, .6);
  //background-color: lightblue;
  //width: 90%;
}

//右边大盒子
.rightBox {
  flex: 4.5;
  //background-color: rgba(16, 27, 49, .6);
  //background-color: lightpink;
}

//左边盒子上中下尺寸控制
.leftTop {
  display: flex;
  height: 40%;
  //border: 1px solid black;
}

.leftMiddle {
  display: flex;
  height: 30%;
  //border: 1px solid black;
}

.leftBottom {
  display: flex;
  height: 30%;
  //border: 1px solid black;
}

//右边盒子上中下尺寸控制
.rightTop {
  display: flex;
  height: 40%;
  //border: 1px solid black;
}

.rightMiddle {
  display: flex;
  height: 30%;
  //border: 1px solid black;
}

.rightBottom {
  display: flex;
  height: 30%;
  //border: 1px solid black;
}

//小盒子
.littleBox {
  margin: 10px;
  //border: 1px solid red;
  //background: rgba(241, 223, 151, .25);
  background: rgba(16, 27, 49, .6);
}

.colorYellow {
  background: rgba(241, 223, 151, .25);
  //background: rgba(16, 27, 49, .6);
}

.a1 {
  flex: 0 1 28%;
}

.a2 {
  flex: 0 1 72%;
}

.b1 {
  flex: 0 1 17%;
}

.b2 {
  flex: 0 1 83%;
}

.c1,
.c2,
.b3,
.b4,
.c3,
.c4 {
  flex: 0 1 50%;
}

/*.c2 {
  flex: 0 1 50%;
}*/
.a3 {
  flex: 0 1 28%;
}

.a4 {
  flex: 0 1 72%;
  display: flex;
  flex-direction: column;
}

//a4盒子内的上下分开
.a4u {
  flex: 0 1 50%;
}

.a4d {
  flex: 0 1 50%;
}

/*.b3 {
  flex: 0 1 50%;
}

.b4 {
  flex: 0 1 50%;
}

.c3 {
  flex: 0 1 50%;
}

.c4 {
  flex: 0 1 50%;
}*/

.before_title {
  float: left;
  width: 4.5px;
  height: 14px;
  background-color: #49bcf7;
  margin-right: 5px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 10px;
}

.title {
  float: left;
  color: white;
  font-family: wdcht, Helvetica, Arial, sans-serif;
  font-size: 14px;
  margin-left: 0px;
  margin-top: 7.5px;
  margin-right: 5px;
}

//日期筛选
.monthlyFilter {
  float: left;
  //font-family: wdcht, Helvetica, Arial, sans-serif;
}

.workLoss {
  display: flex;
  flex-direction: column; // 垂直排列
  //padding-top: 0px;
  clear: both;
}

.workLoss hr {
  text-align: center;
  margin: 5px 10px;
  border: 0; // 移除默认边框
  border-top: 1px solid rgba(white, .35);
}

.workLossTop,
.workLossMiddle,
.workLossBottom {
  display: flex;
  justify-content: space-between; // 左右对齐
  align-items: center; // 垂直居中对齐
  padding: 0 10px; // 添加上下内边距
}

.dayWeekMonth {
  font-family: wdcht, Helvetica, Arial, sans-serif;
  color: rgba(white, .8);
  font-size: 20px;
}

.dayWeekMonthValue {
  font-family: wdcht, Helvetica, Arial, sans-serif;
  color: #fef000;
  font-size: 30px;
}

.unit {
  font-family: wdcht, Helvetica, Arial, sans-serif;
  color: rgba(white, .8);
  //float: right;
  font-size: 16px;
  margin-left: auto; // 推到右边
  padding-right: 10px;
}

</style>