<template>
  <div>
    <h3>Key属性添加到v-for中</h3>
    <p v-for="(item, index) in names" :key="index">{{ item }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["马嘉祺", "丁晨曦", "宋亚轩", "刘耀文", "张真源", "袁浩翔", "贺峻霖"],
    };
  },
};
</script>
