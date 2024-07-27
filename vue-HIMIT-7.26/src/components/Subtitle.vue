<template>
  <div class="tips_title" :style="'color:' + color">
    <span class="before_title"> </span>
    {{ title }}
    <span v-if="!isNaN(total)" class="subTitleTotal">(共{{ total || 0 }}项)</span>
    <slot/>
  </div>
</template>


<script setup>
const props = defineProps({
  title: {
    default: ""
  },
  total: {
    default: "无"
  },
  color: {
    default: "#fff"
  }
});
</script>

<style lang="less" scoped>
.tips_title {
  font-family: wdcht, serif;

  .before_title {
    float: left;
    width: 4.5px;
    height: 16px;
    background-color: #49bcf7;
    margin-right: 5px;
    border-radius: 10px;
    margin-top: -1px;
  }

  .subTitleTotal {
    font-size: 15px;
    height: 16px;
    line-height: 14px;
    margin-left: 5px;
  }

  display: flex;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 16px; //手动修改
  height: 16px !important;
  line-height: 14px;
  width: 100%;
  margin-bottom: 3px;
}
</style>
