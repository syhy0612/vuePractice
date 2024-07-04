<template>
  <div>
    <h3>基础语法</h3>
    <p>{{ msg }}</p>
    <h2>{{ hello }}</h2>

    <img src="@/assets/logo.svg" alt="hhh" class="small-svg" />
    <p>{{ hello }}</p>
    <p><span v-html="rawHtml"></span></p>
    <p>{{ number * number }}</p>
    <p>{{ text.split("").reverse().join("") }}</p>
    <p>{{ ok ? text : msg }}</p>
    <p v-if="flag">孙悟空</p>
    <p v-else>唐三藏</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "神奇的魔法",
      hello: "Hello World",
      rawHtml: "<a href='https://www.bilibili.com'>哔哩哔哩</a>",
      number: 3,
      text: "日落西山",
      ok: true,
      flag: false,
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
.small-svg {
  width: 50px;
}
</style>
