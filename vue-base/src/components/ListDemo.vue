<template>
  <div>
    <h3>列表渲染</h3>
    <p v-for="(item, index) in names" :key="item">{{ item }}{{ index }}</p>
    <br />
    <h4>头像</h4>
    <div v-for="item in result" :key="item.id">
      <p>{{ item.id }}</p>
      <p>{{ item.title }}</p>
      <img :src="item.scr" :style="test" alt="" />
    </div>
    <div v-for="(item, key, index) of userInfo" :key="item">
      {{ item }}-{{ key }}-{{ index }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["A", "B", "C", "D"],
      result: [
        {
          id: 1,
          title: "微信",
          scr: "https://b0.bdstatic.com/b711a0157ae37df6b73519879b7ac651.jpg@h_1280",
        },
        {
          id: 2,
          title: "气球",
          scr:
            "https://img2.baidu.com/it/u=103442308,4145958850&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
        },
        {
          id: 3,
          title: "天空",
          scr: "https://pit1.topit.pro/forum/202101/01/230544fotczkvvhv44odlc.jpg",
        },
      ],
      test: {
        height: "100px",
        borderRadius: "8px",
      },
      userInfo: {
        name: "lsw",
        age: "22",
        sex: "男",
      },
    };
  },
};
</script>

<style></style>
