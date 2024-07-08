<template>
  <div>
    <h3>then-2</h3>
    <slot name="three" :msg="msg">
      <i>none</i>
    </slot>
    <br id="5.5" />
    <i>abcde-6</i>
    <slot name="aaa" :msg="msg"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello",
    };
  },
};
</script>
