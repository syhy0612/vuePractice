<template>
  <div class="mainInfo">
    <!--    左边盒子-->
    <div class="left-box">
      <!--      左上盒子-->
      <div class=" left-box-T">
        <div class="inner-box">a1</div>
        <div class="inner-box">
          <Subtitle title="每日数据汇总">
            <div class="titleSolt" v-if=false>
              <div class="demo-date-picker">
                <el-date-picker
                    :clearable="false"
                    v-model="DookaDate"
                    :disabled-date="disabledDate"
                    type="month"
                    placeholder="更改数据采集时间"
                    @change="changeTime"/>
              </div>
            </div>
          </Subtitle>
          <chart-a1/>
        </div>
      </div>
      <!--      左中盒子-->
      <div class=" left-box-M">
        <div class="inner-box ">c1</div>
        <div class="inner-box">d1</div>
      </div>
      <!--      左下盒子-->
      <div class=" left-box-B">
        <div class="inner-box">e1</div>
        <div class="inner-box ">f1</div>
      </div>
    </div>
    <!--    右边盒子-->
    <div class="right-box">
      <!--      右上盒子-->
      <div class=" right-box-T">
        <div class="inner-box">a2</div>
        <div class="inner-box">b2</div>
      </div>
      <!--      右中盒子-->
      <div class=" right-box-M">
        <div class="inner-box">c2</div>
        <div class="inner-box ">d2</div>
      </div>
      <!--      右下盒子-->
      <div class=" right-box-B">
        <div class="inner-box">e2</div>
        <div class="inner-box">f2</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChartA1 from '../components/echarts/chartA1.vue'
import Subtitle from "@/components/Subtitle.vue";
import {useTitleStore} from "@/stores/titleStore.js";

useTitleStore().setTitle('品质信息(OQC)')
useTitleStore().setDescription('OQC Management')
</script>

<style lang="scss" scoped>
@import "./Oqc.scss";
@import "./dateTable.scss";
</style>
