<template>
  <div>
    <UseComponentVue />
    <!-- <MyComponentVue /> -->
    <component :is="componentTab">
      <!-- <ComponentA /> -->
    </component>
    <button @click="change">切换组件</button>
    <br />
    <b>第{{ count }}次点击</b>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import MyComponentVue from "./components/MyComponent.vue";
import UseComponentVue from "./components/UseComponent.vue";
import ComponentA from "./components/ComponentA.vue";

const ComponentB = defineAsyncComponent(() => import("./components/ComponentB.vue"));

export default {
  data() {
    return {
      componentTab: "ComponentA",
      count: 0,
    };
  },
  components: {
    MyComponentVue,
    UseComponentVue,
    ComponentA,
    ComponentB,
  },
  methods: {
    change() {
      this.count++;
      // console.log(this.componentTab);
      console.log("第" + this.count + "次点击");
      this.componentTab = this.componentTab == "ComponentA" ? "ComponentB" : "ComponentA";
      // if (this.componentTab == "ComponentA") {
      //   console.log("ComponentA:changing");
      //   this.componentTab = "ComponentB";
      //   console.log("现在是" + this.componentTab);
      // }
      // if (this.componentTab == "ComponentB") {
      //   console.log("ComponentB:changing");
      //   this.componentTab = "ComponentA";
      //   console.log("现在是" + this.componentTab);
      // }
    },
  },
};
</script>
