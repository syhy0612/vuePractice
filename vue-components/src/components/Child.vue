<!--
 * @Author: cjh
 * @Date: 2024-07-06 09:18:23
 * @LastEditors: cjh
 * @LastEditTime: 2024-07-06 11:05:34
 * @FilePath: \Vue_lianxi\vue-components\src\components\Child.vue
 * @Description: 文件描述
-->
<template>
  <div>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ demo }}</p>
    <p v-if="sths">{{ sths.name }}</p>
    <ul v-if="sths">
      <li v-for="(item, index) of sths.names" :key="index">
        {{ item }}+{{ sths.age + index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 设置 title 必填且类型为字符串
    title: {
      type: String,
      default: "title",
      //   required: false,
    },
    // 设置 demo 类型为字符串，并设置默认值为 'default value'
    demo: {
      type: String,
      default: "pear",
    },
    // 设置 sths 类型为对象，并设置默认值为一个包含 age 和 names 的对象
    sths: {
      type: Object,
      default: function () {
        return {
          age: 18,
          names: [],
        };
      },
      required: true, // 设置 sths 必填
    },
  },
};
</script>
