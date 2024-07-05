<template>
  <div>
    <h3>Style绑定</h3>
    <!-- 直接绑定样式 -->
    <p :style="{ color: 'red', fontSize: '20px' }">直接绑定样式</p>
    <!-- 动态绑定样式 -->
    <p :style="{ color: colorGreen, fontSize: fontSize + 'px' }">动态绑定样式</p>
    <!-- 多个对象绑定样式 -->
    <p :style="styleObject">多个对象绑定样式</p>
    <!-- 数组绑定样式 -->
    <p :style="[styleObject, styleRight]">数组绑定样式</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorGreen: "green",
      fontSize: "30",
      styleObject: {
        color: "orange",
        fontSize: "16px",
      },
      styleRight: {
        float: "right",
      },
    };
  },
};
</script>
