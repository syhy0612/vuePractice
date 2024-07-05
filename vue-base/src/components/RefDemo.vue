<template>
  <div>
    <h3>获取DOM操作</h3>
    <div class="container" ref="container">{{ content }}</div>
    <input type="text" ref="username" />
    <button @click="getElementHandle">获取元素</button>
  </div>
</template>

<script>
/**
 * 内容改变：{{ 模块指令 }}
 * 属性改变：v-bind: 指令
 * 事件:v-on(@):click
 *
 * 非必要不建议使用DOM
 */
export default {
  data() {
    return {
      content: "内容",
    };
  },
  methods: {
    getElementHandle() {
      this.$refs.container.innerHTML = "<hr/><a href='#'>你好</a>";
      console.log(this.$refs.username.value);
    },
  },
};
</script>
