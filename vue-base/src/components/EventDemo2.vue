<template>
  <div>
    <h3>方法事件处理器</h3>
    <button @click="addCount">功德加一</button>
    <p>功德：{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      this.count++;
      console.log("点击了" + this.count + "次");
    },
  },
};
</script>
