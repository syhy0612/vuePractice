console.log('hello world')

let sum = 0;

//1.把下面的数组按从小到大排列
let Array1 = [8, 20, 1, 7, 25]
let Array2 = [8, 20, 1, 7, 25]

console.log("第一题：ok");//todo ok

Array1.sort((a, b) => (a - b));
Array2.sort((a, b) => b - a);
console.log(Array1);
console.log(Array2)


//2.把下面的对象数组按id从小到大排序
let Array3 = [{ id: 2, name: '测试名称2' }, { id: 1, name: '测试名称1' }, { id: 5, name: '测试名称5' }]

console.log("第二题：ok");//todo ok

Array3.sort((a, b) => a.id - b.id)
console.log(Array3);

//3.计算下列对象数组中的 count 之和
let Array4 = [{ id: 2, count: 10 }, { id: 1, count: 20 }, { id: 5, count: 30 }]

console.log("第三题：ok");//已解

sum = 0;
Array4.forEach(i => {
    sum += i.count;
})
console.log(sum);

//4.计算下列对象数组中的颜色为红色的count之和
let Array5 = [{ color: "红", count: 10 }, { color: "绿", count: 20 }, { color: "红", count: 30 }]

console.log("第四题：ok");//已解

sum = 0;
Array5.forEach(i => {
    if (i.color === "红")
        sum += i.count;
})
console.log(sum);

//5.将下列对象数组以id去重  => 例如id为1的两项重复了 只保留其中一项
let Array6 = [{ id: 1, count: 10 }, { id: 3, count: 20 }, { id: 1, count: 10 }, { id: 2, count: 10 }]

console.log("第五题：todo");//todo

//自写
let arrayTemp = [];
let array6Temp = [];
Array6.forEach(obj => {
    let judge = true;
    arrayTemp.forEach(i => {
        if (obj.id == i)
            judge = false;
        if (judge)
            arrayTemp.push(obj.id)
    })
    if (judge)
        array6Temp.push(obj)
})

console.log(array6Temp);


//---------------------


// let seenIds = []; // 用于存放已经出现过的 id
// let uniqueArray6 = [];

// Array6.forEach(obj => {
//     // 如果 seenIds 数组中不存在当前对象的 id，则将其添加到 seenIds 数组中，并将对象添加到 uniqueArray6 数组中
//     if (!seenIds.includes(obj.id)) {
//         seenIds.push(obj.id);
//         uniqueArray6.push(obj);
//     }
// });

// console.log(uniqueArray6); // 输出去重后的数组





//6.将Array7中num小于10的id存入Array8中
let Array7 = [{ id: 1, num: 10 }, { id: 2, num: 12 }, { id: 3, num: 0 }, { id: 4, num: 7 }]
let Array8 = []

console.log("第六题：ok");//error ok

// 使用filter
// Array8=Array7.filter(obj=>{
//     return obj.num < 10;
// })


// 使用push
Array7.forEach(obj => {
    if (obj.num < 10) {
        Array8.push(obj.id)
    }
})

console.log(Array8);

//7.将筛选选出 Array9 与 Array10中id相同的项  并且合并筛选出的对象  =>新对象 要包含两对象中所有的属性
let Array9 = [{ id: 1, num: 10 }, { id: 2, num: 12, age: 10 }, { id: 3, num: 0 }, { id: 4, num: 7 }]
let Array10 = [{ id: 10, name: '测试' }, { id: 9, name: '测试2' }, { id: 2, name: '测试3' }, { id: 1, name: '测试4' }]


console.log("第七题：todo");//todo

//8.将筛选选出 Array11 与 Array12中id相同的项  并且将Array11中的属性以 键名为child的对象(不包含id)的形式放入Array12中  => 例[{id:4,child:{num:7,age2}}]
let Array11 = [{ id: 1, num: 10, age: 12 }, { id: 2, num: 12, age: 10 }, { id: 3, num: 0 }, { id: 4, num: 7, age: 2 }]
let Array12 = [{ id: 4, name: '测试' }, { id: 3, name: '测试2' }, { id: 2, name: '测试3' }, { id: 1, name: '测试4' }]


console.log("第八题：todo");//todo