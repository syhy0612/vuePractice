<template>
  <div>
    <!-- 插槽1 -->
    <SlotsBase>
      <div>
        <h3>插槽标题-父组件</h3>
        <p>插槽内容-父组件</p>
      </div>
    </SlotsBase>
    <!-- 插槽2 -->
    <SlotsTwo>
      <h3>{{ msg }}</h3>
      <template #main>
        <button>开始</button>
      </template>
      <template>
        <h3>你好</h3>
      </template>
    </SlotsTwo>
    <!-- 插槽3 -->
    <SlotsThree>
      <template v-slot:aaa="slotProps">
        <p>第三: {{ slotProps.msg }}-1</p>
      </template>

      <template v-slot:three="slotProps">
        <button>hhh{{ slotProps.msg }}-3</button>
        <p>第三-副本: {{ slotProps.msg }}-4</p>
        <button>显示-5</button>
      </template>
    </SlotsThree>
  </div>
</template>
<script>
import SlotsBase from "./components/SlotsBase.vue";
import SlotsTwo from "./components/SlotsTwo.vue";
import SlotsThree from "./components/SlotsThree.vue";

export default {
  data() {
    return {
      msg: "我是续集",
    };
  },
  components: {
    SlotsBase,
    SlotsTwo,
    SlotsThree,
  },
};
</script>
