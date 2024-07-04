<template>
  <div>
    <div :class="msg" :id="msg" :title="msg">测试</div>
    <div v-bind="apple">hhhh</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "active",
      apple: {
        id: "asd",
        class: "ooo",
        yes: "true",
      },
    };
  },
};
</script>
