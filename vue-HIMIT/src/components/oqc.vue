<template>
  <div class="container">
    <div class="leftBox">
      <div class="leftTop">
        <div class="a1 littleBox colorYellow">
          <echarts :chart-options="boxA1"/>
        </div>
        <div class="a2 littleBox">
          <echarts :chart-options="boxA2"/>
        </div>
      </div>
      <div class="leftMiddle">
        <div class="b1 littleBox">B1</div>
        <div class="b2 littleBox">B2</div>
      </div>
      <div class="leftBottom">
        <div class="c1 littleBox">C1</div>
        <div class="c2 littleBox">C2</div>
      </div>
    </div>
    <div class="rightBox">
      <div class="rightTop">
        <div class="a3 littleBox">A1</div>
        <div class="a4">
          <div class="a4u littleBox"></div>
          <div class="a4d littleBox">
            <echarts :chart-options="boxA2"/>
          </div>
        </div>
      </div>
      <div class="rightMiddle">
        <div class="b3 littleBox">
          <echarts :chart-options="boxA2"/>
        </div>
        <div class="b4 littleBox">
          <echarts :chart-options="boxA2"/>
        </div>
      </div>
      <div class="rightBottom">
        <div class="c3 littleBox">
          <echarts :chart-options="boxA2"/>
        </div>
        <div class="c4 littleBox">C2</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import echarts from './echarts.vue'

const boxA1 = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [{value: 2, name: 'Search Engine'}]
    }
  ]

})
const boxA2 = ref({
  title: {
    text: '柱状图示例'
  },
  tooltip: {
    show: true,
    position: 'top',
  },
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '胜他半子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20],
    label: {
      show: true,
      position: 'top',
      fontSize: 20,
      color: 'purple'
    }
  }]
});

</script>

<style lang="scss" scoped>
.container {
  display: flex; //设置弹性布局
  height: 850px; //设置固定高度
}

//左边大盒子
.leftBox {
  flex: 5.5;
  background-color: rgba(16, 27, 49, .6);
  //background-color: lightblue;
  //width: 90%;
}

//右边大盒子
.rightBox {
  flex: 4.5;
  background-color: rgba(16, 27, 49, .6);
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
  //background: rgba(16, 27, 49, .6);
}
.colorYellow{
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
</style>