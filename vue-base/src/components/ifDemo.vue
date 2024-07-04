<template>
  <div>
    <h3>条件渲染</h3>
    <div v-if="flag">你好</div>
    <div v-else>大家好</div>
    <!-- <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>not A/B/C</div> -->
    <div v-show="flag">是否可见</div>
    <div v-bind="test">呃呃呃</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      type: "D",
      test: {
        style: "color:red;",
      },
    };
  },
};
</script>

<style></style>
