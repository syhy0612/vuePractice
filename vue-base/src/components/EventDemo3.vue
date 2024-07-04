<template>
  <div>
    <h3>获取event对象</h3>
    <button @click="addCount">Add</button>
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
    addCount(e) {
      this.count++;
      e.target.innerHTML = "Add" + this.count;
    },
  },
};
</script>
