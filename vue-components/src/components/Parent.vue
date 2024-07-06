<template>
  <div>
    <h3>Parent</h3>
    <!-- <Chird title="你好" :demo="demo" /> -->
    <Chird :sths="sths" />
  </div>
</template>

<script>
import Chird from "./Chird.vue";

export default {
  components: { Chird },
  data() {
    return {
      demo: "apple",
      sths: {
        age: 30,
        name: "Leaves",
        names: ["a", "b", "c", "d"],
      },
    };
  },
};
</script>
