<template>
  <div>
    <ComponentB :onEvent="dataFn" />
    <h3>父组件 {{ msg }}</h3>
  </div>
</template>

<script>
import ComponentB from "./ComponentB.vue";
export default {
  components: { ComponentB },
  methods: {
    dataFn(data) {
      this.msg = data;
    },
  },
  data() {
    return {
      msg: "",
    };
  },
};
</script>
