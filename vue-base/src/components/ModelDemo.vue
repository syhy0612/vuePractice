<template>
  <div>
    <h3>表单输入绑定</h3>
    <form>
      <!-- .number使用时，如果第一个字符非数字，则该修饰符无效 -->
      <input type="text" v-model.number.trim.lazy="msg" />
      <span>{{ msg }}</span>
      <br />
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      checked: false,
    };
  },
};
</script>
