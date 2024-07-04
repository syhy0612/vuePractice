<template>
  <div>
    <h3>事件传参</h3>
    <p @dblclick="getName(item, $event)" v-for="(item, index) in names" :key="index">
      {{ item }}-{{ index + 1 }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["金", "木", "水", "火", "土"],
    };
  },
  methods: {
    getName(name, e) {
      console.log(name);
      console.log(e);
    },
  },
};
</script>
