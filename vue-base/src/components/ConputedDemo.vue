<template>
  <div>
    <p>{{ personHobby }}</p>
    <button @click="addObject">增加</button>
    <button @click="subtract">清空</button>
    <span>{{ obj }}</span>
    <p v-for="(item, index) of objects" :key="index">{{ item }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objects: ["Chinese", "Math", "English"],
      person: {
        name: "Jack",
        likeFruits: ["apples", "bananas", "oranges"],
      },
    };
  },
  computed: {
    personHobby() {
      return this.person.likeFruits.length > 0 ? "存在" : "不存在";
    },
    obj() {
      return this.objects.length > 0 ? "y" : "n";
    },
  },
  methods: {
    addObject() {
      this.objects = this.objects.concat("any");
    },
    subtract() {
      this.objects = [];
    },
  },
};
</script>
