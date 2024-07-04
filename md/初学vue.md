2024-7-3

今天学习了如何创建一个vue框架的项目

**创建vue项目**

在控制台或者终端输入

```nginx
cnpm init vue@latest
```

填写名称，一路回车否 即可安装成功。

```bat
正在初始化项目 D:\ProjectFiles\Vue_lianxi\vue-test...

项目初始化完成，可执行以下命令：

  cd vue-test
  npm install
  npm run dev

PS D:\ProjectFiles\Vue_lianxi>
```

使用cd vue-test进入下一级目录

使用cnpm install安装项目依赖

使用npm run dev启动项目

地址显示为http://127.0.0.1:5173/



v-bind绑定js里msg的值

```vue
<div v-bind:class="msg" v-bind:id="msg">测试</div>
```

简写可去掉v-bind，需要有空格隔开 否则报错

```vue
<div :class="msg" :id="msg">测试</div>
```



------

2024-7-4

今天学习了。。。

**条件渲染**

v-if	v-show

```md
两者区别

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中，条件块内的事件监听器和子组件适当地被销毁和重建。
`v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好
```

```
个人理解

v-if  用于条件判断，后面可以接v-else-if或v-else	实际上是js控制元素是否存在
v-show用于频繁切换，实际上是css的  style="display: none;"	控制显示与隐藏
```



**列表渲染**

v-for

遍历对象有三个值(value,key,index)

遍历数组有两个值(value,index)



**通过key管理状态**

```md
当 Vue 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一的 `key` attribute：
```

也就是需要一个唯一id来管理元素列表状态

不要使用index作为key，因为index作为列表的下标，如果非列表末添加元素，则会更改其他元素下标。



**事件处理**

---内联事件处理器

```vue
<template>
  <div>
    <h3>内联事件处理器</h3>
    <button v-on:click="count++">功德加一</button>
    |
    <button v-on:click="count--">功德减一</button>
    <p>功德：{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
```

---方法事件处理器

```vue
<template>
  <div>
    <h3>方法事件处理器</h3>
    <button @click="addCount">功德加一</button>
    <p>功德：{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      this.count++;
      console.log("点击了" + this.count + "次");
    },
  },
};
</script>
```

**获取event对象**

方法入参若为空，则可直接调用event

方法入参如果有值，则需要在template里加上入参$event方可调用

**传递参数**



**传递参数**



**事件修饰符**



```vue
<a @click.prevent="eee" href="https://www.sogou.com/">搜狗</a>
```

```vue
<a @click.prevent="stop" href="https://www.sogou.com/">搜狗</a>
```

prevent可阻止阻止事件的默认行为（页面单击跳转），stop可阻止事件冒泡（阻止事件继续向父元素传播）。





**数组变化侦测**

变更方法

```vue
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

不可变方法

```
filter()
slice()
concat()
```

使用不可变方法时  需注意使用this.demo1=this.demo1.concat(this.demo2);



**计算属性**

