<template>
  <div>
    <p :class="{ active: isActive, danger: hasError }">Look at me!</p>
    <p>Look at me!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
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
</style>
