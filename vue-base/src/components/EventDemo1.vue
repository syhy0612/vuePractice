<template>
  <div>
    <h3>内联事件处理器</h3>
    <button v-on:click="count++">功德加一</button>
    |
    <button v-on:click="count--">功德减一</button>
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
};
</script>
