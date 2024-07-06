<template>
  <div>
    <h3>子组件 ComponentB</h3>
    <p>hello{{ onEvent("q9q") }}</p>
  </div>
</template>

<script>
export default {
  props: {
    onEvent: {
      type: Function,
    },
  },
};
</script>
