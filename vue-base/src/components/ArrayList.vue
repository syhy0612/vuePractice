<template>
  <div>
    <h3>数组变化侦听</h3>
    <button @click="addListHandle">添加数据</button>
    <p v-for="(item, index) of names" :key="index">{{ item }}</p>
    <button @click.once="addList">合并数组</button>
    <h3>数组1</h3>
    <p v-for="(item, index) of nums1" :key="index">{{ item }}</p>
    <h3>数组2</h3>
    <p v-for="(item, index) of nums2" :key="index">{{ item }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["Jake", "Mike", "John"],
      nums1: [1, 2, 3, 4, 5],
      nums2: [6, 7, 8, 9, 10],
    };
  },
  methods: {
    addListHandle() {
      this.names.push("Marry", "June");
      this.names = this.names.concat(["AAA", "BBB"]);
    },
    addList() {
      //   this.nums1.push(nums2);
      //   this.nums1.push(...this.nums2);
      this.nums1 = this.nums1.concat(this.nums2);
    },
  },
};
</script>
