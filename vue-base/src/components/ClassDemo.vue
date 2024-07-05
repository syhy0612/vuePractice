<template>
  <div>
    <!-- 绑定对象 -->
    <p :class="{ active: isActive, danger: hasError }">Class样式绑定1-绑定对象</p>
    <!-- 多个对象绑定 -->
    <p :class="classObject">Class样式绑定2-多个对象绑定</p>
    <!-- 绑定数组 -->
    <p :class="[arrActive, arrDanger]">Class样式绑定3-绑定数组</p>
    <!-- 绑定数组-三元运算符 -->
    <p :class="[isPink ? 'pink' : 'orange']">Class样式绑定4-绑定数组-三元运算符</p>
    <!-- 绑定数组和对象 -->
    <p :class="[arrActive, isPink ? 'orange' : 'pink']">Class样式绑定5-绑定数组和对象</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
      isPink: true,
      classObject: {
        active: true,
        danger: true,
      },
      arrActive: "active",
      arrDanger: "danger",
    };
  },
};
</script>

<style>
.active {
  font-size: 40px;
}
.danger {
  color: red;
}
.pink {
  color: pink;
}
.orange {
  color: orange;
}
</style>
