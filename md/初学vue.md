2024-7-3

今天学习了如何创建一个vue框架的项目

> **创建vue项目**

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

今天学习了以下内容

> **条件渲染**

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



> **列表渲染**

v-for

遍历对象有三个值(value,key,index)

遍历数组有两个值(value,index)



> **通过key管理状态**

```md
当 Vue 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一的 `key` attribute：
```

也就是需要一个唯一id来管理元素列表状态

不要使用index作为key，因为index作为列表的下标，如果非列表末添加元素，则会更改其他元素下标。



> **事件处理**

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

> **获取event对象**

方法入参若为空，则可直接调用event

方法入参如果有值，则需要在template里加上入参$event方可调用

> **传递参数**

```vue
<p @click="clickFive(item)" v-for="(item, index) in names" :key="index">
      {{ item }}
</p>
```



> **事件修饰符**



```vue
<a @click.prevent="demo" href="https://www.sogou.com/">搜狗</a>
```

```vue
<a @click.prevent="stop" href="https://www.sogou.com/">搜狗</a>
```

prevent可阻止阻止事件的默认行为（页面单击跳转），stop可阻止事件冒泡（阻止事件继续向父元素传播）。

```md
说明：
修饰符'.prevent'用于阻止事件的默认行为。例如，阻止表单提交或者超链接的跳转。
修饰符'.stop'用于阻止事件的进一步传播，即阻止事件冒泡到父元素。
修饰符'.once'用于只触发一次事件监听器。即使在事件发生后，它也会自动删除监听器。
修饰符'.enter'通常用于处理键盘事件，特别是keydown或keyup事件，它指定了按下回车键时触发的行为。
```



> **数组变化侦测**

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

```js
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
  }
```

官方文档：[点击跳转](https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes)

> **计算属性**

相较于methods的函数或方法，不用加括号，不会多次调用，节省性能。

（官方：不同之处在于**计算属性值会基于其响应式依赖被缓存**。一个计算属性仅会在其响应式依赖更新时才重新计算。）

```vue
<p>{{ personHobby }}</p>
<span>{{ obj }}</span>
```

```js
methods: {
    addObject() {
      this.objects = this.objects.concat("any");
    },
    subtract() {
      this.objects = [];
    },
  }
```

> **class绑定**

官方解释：

数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式。因为 `class` 和 `style` 都是 attribute，我们可以和其他 attribute 一样使用 `v-bind` 将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 `class` 和 `style` 的 `v-bind` 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。

官方文档：[绑定 HTML class](https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-inline-styles)

代码详见：

```vue
<template>
  <div>
    <!-- 绑定对象 -->
    <p :class="{ active: isActive, danger: hasError }">Class样式绑定1-绑定对象</p>
    <!-- 多个对象绑定 -->
    <p :class="classObject">Class样式绑定2-多个对象绑定</p>
    <!-- 绑定数组 -->
    <p :class="[arrActive, arrDanger]">Class样式绑定3-绑定数组</p>
    <!-- 绑定数组-三元运算符 -->
    <p :class="[isPink ? 'pink' : 'orange']">Class样式绑定4-绑定数组-三元运算符</p>
    <!-- 绑定数组和对象 -->
    <p :class="[arrActive, isPink ? 'orange' : 'pink']">Class样式绑定5-绑定数组和对象</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
      isPink: true,
      classObject: {
        active: true,
        danger: true,
      },
      arrActive: "active",
      arrDanger: "danger",
    };
  },
};
</script>

<style>
.active {
  font-size: 40px;
}
.danger {
  color: red;
}
.pink {
  color: pink;
}
.orange {
  color: orange;
}
</style>
```

绑定数组和对象时，只能数组包含对象。

> style绑定

与class绑定很类似

官方文档：[绑定内联样式](https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-inline-styles)

代码详见：

```vue
<template>
  <div>
    <h3>Style绑定</h3>
    <!-- 直接绑定样式 -->
    <p :style="{ color: 'red', fontSize: '20px' }">直接绑定样式</p>
    <!-- 动态绑定样式 -->
    <p :style="{ color: colorGreen, fontSize: fontSize + 'px' }">动态绑定样式</p>
    <!-- 多个对象绑定样式 -->
    <p :style="styleObject">多个对象绑定样式</p>
    <!-- 数组绑定样式 -->
    <p :style="[styleObject, styleRight]">数组绑定样式</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorGreen: "green",
      fontSize: "30",
      styleObject: {
        color: "orange",
        fontSize: "16px",
      },
      styleRight: {
        float: "right",
      },
    };
  },
};
</script>
```

