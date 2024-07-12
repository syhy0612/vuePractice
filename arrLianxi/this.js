console.log('hello world')


//把下面的数组按从小到大排列
let Array1 = [8, 20, 1, 7, 25]
let Array2 = [8, 20, 1, 7, 25]


Array1.sort()

console.log(Array1);




//把下面的对象数组按id从小到大排序
let Array3 = [{ id: 2, name: '测试名称2' }, { id: 1, name: '测试名称1' }, { id: 5, name: '测试名称5' }]

//计算下列对象数组中的 count 之和
let Array4 = [{ id: 2, count: 10 }, { id: 1, count: 20 }, { id: 5, count: 30 }]

//计算下列对象数组中的颜色为红色的count之和
let Array5 = [{ color: "红", count: 10 }, { color: "绿", count: 20 }, { color: "红", count: 30 }]

//将下列对象数组以id去重  => 例如id为1的两项重复了 只保留其中一项
let Array6 = [{ id: 1, count: 10 }, { id: 3, count: 20 }, { id: 1, count: 10 }, { id: 2, count: 10 }]

//将Array7中num小于10的id存入Array8中
let Array7 = [{ id: 1, num: 10 }, { id: 2, num: 12 }, { id: 3, num: 0 }, { id: 4, num: 7 }]
let Array8 = []

//将筛选选出 Array9 与 Array10中id相同的项  并且合并筛选出的对象  =>新对象 要包含两对象中所有的属性
let Array9 = [{ id: 1, num: 10 }, { id: 2, num: 12, age: 10 }, { id: 3, num: 0 }, { id: 4, num: 7 }]
let Array10 = [{ id: 10, name: '测试' }, { id: 9, name: '测试2' }, { id: 2, name: '测试3' }, { id: 1, name: '测试4' }]

//将筛选选出 Array11 与 Array12中id相同的项  并且将Array11中的属性以 键名为child的对象(不包含id)的形式放入Array12中  => 例[{id:4,child:{num:7,age2}}]
let Array11 = [{ id: 1, num: 10, age: 12 }, { id: 2, num: 12, age: 10 }, { id: 3, num: 0 }, { id: 4, num: 7, age: 2 }]
let Array12 = [{ id: 4, name: '测试' }, { id: 3, name: '测试2' }, { id: 2, name: '测试3' }, { id: 1, name: '测试4' }]