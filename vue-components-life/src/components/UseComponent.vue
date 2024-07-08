<template>
  <div>
    <h3>组件生命周期函数应用</h3>
    <p ref="name">喜欢上班</p>
    <ul>
      <li v-for="(item, index) of characters" :key="index">
        <h5>{{ item.name }}</h5>
        <p>{{ item.introduction }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      characters: [],
    };
  },
  created() {
    this.characters = [
      {
        name: "孙悟空",
        introduction: "齐天大圣，身手矫健，神通广大。",
      },
      {
        name: "唐僧",
        introduction: "正直善良，带领取经团队，心地善良。",
      },
      {
        name: "猪八戒",
        introduction: "嘴馋好色，力大无穷，忠心耿耿。",
      },
      {
        name: "沙悟净",
        introduction: "满脸沙子，擅长变化，机智灵活。",
      },
    ];
  },
  beforeMount() {
    console.log(this.$refs.name); //undefined
  },
  mounted() {
    console.log(this.$refs.name); //正常显示
  },
};
</script>
