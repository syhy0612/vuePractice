

```js
//ref 或者直接用reactive声明一个对象
const chartSumObj = reactive({
 num:0, //数量
 sum:0, //总数
 point:0, //百分百
})
```



```js
1.我们先把要处理数据打印出观察一下结构
2.声明三个参数用来存放数据 ref
2.或者用rective也可以
3.声明好之后 每次进来都把这些参数置空 因为函数是会多次调用的
防止多次调用 多次累加
shift + alt + 方向键下键可以直接复制这一行
ctlr + / 注释

照道理说 这里已经变成0了 调用了两次应该也不会是2倍的
真是奇奇又怪怪 其实写在这个http外面应该也是可以的 这里可能有啥bug
这个ref的我删掉了 你后面可以试试

声明好了 打印一下看看是否正常
console.log('当月周产出数据',chartSumObj,chartSumObjNum.value)
```







```js
chartSumObj.point=0
//这个还是得写在http里面 因为这样的话 就是异步的 会等接口加载完了再执行它
```



```js
//我给你讲一下这段代码的意思
//首先 这里是一个字符串的拼接 字符串的拼接有两种方式
//1. 变量 + "字符串"比如
let str  = chartSumObj.num +'测试测试'
//2. 模版字符串 `${变量}字符串` 这个就不需要很多加号来连接了
let str2 = `${chartSumObj.num}测试测试`


//然后这段话 的意思
//`${总数}/${生产总数}(${百分比})`
//总数 => useThousands(chartSumObj.num)
//生产总数 => useThousands(chartSumObj.sum)
//百分比 chartSumObj.sum == 0 ? 0 : (chartSumObj.num / chartSumObj.sum * 100).toFixed(2)



//所以里不单单是一个百分比 要是你不清楚地话 就用控制台打印一下了看看 不要直接赋值  %是什么意思 一个字符 百分号
//你在控制台打印一下
chartSumObj.point = `${useThousands(chartSumObj.num)}/${useThousands(chartSumObj.sum)}
	(${chartSumObj.sum == 0 ? 0 : (chartSumObj.num / chartSumObj.sum * 100).toFixed(2)}%)`;

```



```
这里地方其实是可以不用map的 只是这里有赋值 我刚好就直接利用了 这样就不用再单独写一个循环出来
p这个方法 也是处理数组用的
这里我们用不到map 所以这里的操作是不需要的
```





option：[官方文档](https://echarts.apache.org/zh/option.html#title) 

```js
//想知道配置 可以去官方文档里面查参数 https://echarts.apache.org/zh/option.html#title
//useThousands这个是封装的js 用来格式化数据的 包括自动加上千分号 小数点自动保留一位 也是按需引入就行
//toFixed这个是js内部的方法 保留小数点 后面是位数
//  xxx?:  这个是一种判断方法 意思是 满足xxx  就执行问号后面的 否则执行冒号后面的
//这里是判断 除数的分母不能为0 为0的话 这个比值就直接为0 
//你把周的做一下吧 在网络里面看周的接口是哪个 然后改 我看你做一下
```





> 在 Vue.js 或 JavaScript 中，`map`、`forEach`、`sort` 和 `filter` 是常用的数组方法。下面是它们的用法示例：

### 1. `map()`

`map` 用于创建一个新数组，数组中的元素是通过调用提供的函数处理原数组中的每个元素。

**示例：**

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### 2. `forEach()`

`forEach` 用于遍历数组中的每个元素，执行给定的函数，不返回新数组。

**示例：**

```js
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// 输出：
// 0: apple
// 1: banana
// 2: cherry
```

### 3. `sort()`

`sort` 用于对数组进行排序，默认是按照字符串的 Unicode 编码排序。可以传入一个比较函数来实现自定义排序。

**示例：**

```js
const numbers = [4, 2, 3, 1];
const sorted = numbers.sort((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4]
```

### 4. `filter()`

`filter` 用于创建一个新数组，包含通过提供的测试函数的所有元素。

**示例：**

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### 综合示例

以下是一个综合示例，结合使用这四个方法：

```js
const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 },
];

// 1. 使用 filter 过滤年龄大于 20 的人
const filtered = data.filter(person => person.age > 20);

// 2. 使用 map 创建一个新数组，包含姓名
const names = filtered.map(person => person.name);

// 3. 使用 sort 对姓名进行排序
const sortedNames = names.sort();

console.log(sortedNames); // ['Alice', 'Charlie']
```

### 总结

- `map`：用于转换数组元素。
- `forEach`：用于遍历数组，不返回新数组。
- `sort`：用于排序数组。
- `filter`：用于过滤数组，返回满足条件的新数组。

可以根据需要灵活组合使用这些方法来处理数组数据。









# JavaScript `for` 循环中的 `let` 和 `const`

在JavaScript中，`let`和`const`都有块级作用域，但它们的使用方式有所不同。

- `let` 声明的变量可以在其块级作用域内被重新赋值。
- `const` 声明的变量一旦被赋值，就不能再被重新赋值。

## 示例代码

```javascript
const arr = [7, 4, 0, 20];

// 使用 let 声明循环变量 i
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//打印7,4,0,20

// 使用 const 声明循环变量 i
for (const i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//仅打印7,并且报错

```





```js
return seenIds.has(v['id']) ? false : seenIds.set(v['id'])

return seenIds.has(v.id) ? false : seenIds.set(v.id)
```



上下等价

