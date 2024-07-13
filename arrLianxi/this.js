console.log('hello world')

/*

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

*/

//5.将下列对象数组以id去重  => 例如id为1的两项重复了 只保留其中一项
// let Array6 = [{ id: 1, count: 10 }, { id: 3, count: 20 }, { id: 1, count: 10 }, { id: 2, count: 10 }]

// console.log("第五题：todo");//todo

//自写
// let arrayTemp = [];
// let array6Temp = [];
// Array6.forEach(obj => {
//     let judge = true;
//     arrayTemp.forEach(i => {
//         if (obj.id == i)
//             judge = false;
//         if (judge)
//             arrayTemp.push(obj.id)
//     })
//     if (judge)
//         array6Temp.push(obj)
// })

// console.log(array6Temp);


// 使用 filter 方法根据 seenIds 进行过滤
// let Array6Result = Array6.filter((obj, index) => {
//     return seenIds.indexOf(obj.id) === index;
//   });


// let Array6Result = Array6.filter((obj,index)=>{
//     console.log(index);
//     let judge =false;
//     if(seenIds.includes(obj.id))
//         judge =true;
//     return judge;
// })
//5.将下列对象数组以id去重  => 例如id为1的两项重复了 只保留其中一项
/*
let Array6 = [{ id: 1, count: 10 },
{ id: 3, count: 20 },
{ id: 1, count: 10 },
{ id: 2, count: 10 }]

let arr = Array6.map(obj => obj.id);
let seenIds = Array.from(new Set(arr))
console.log("完整的数组", Array6);
console.log("存储的id", seenIds);

Array6Result = Array6.filter(obj => {
    // let judge = obj.id == 1//判断条件需更改
    // 新思路1：既然循环的是每一个Array6里的对象
    // 那就每个对象用一次  就查里面有没有  如果有就去掉然后返回真
    // 如果没有那就代表已经用过了 返回假
    if (!seenIds.includes(obj.id))
        return false;
    seenIds.splice(0, 1);
    console.log("isOk:", obj.id)
    return true;
    // 新思路2：直接以存储的id为新数组的匹配项去选择性复制原数组信息
});

console.log("result", Array6Result);

*/




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



/*

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
*/
//7.将筛选选出 Array9 与 Array10中id相同的项  并且合并筛选出的对象  =>新对象 要包含两对象中所有的属性
let Array9 = [{ id: 1, num: 10 }, { id: 2, num: 12, age: 10 }, { id: 3, num: 0 }, { id: 4, num: 7 }]
let Array10 = [{ id: 10, name: '测试' }, { id: 9, name: '测试2' }, { id: 2, name: '测试3' }, { id: 1, name: '测试4' }]


console.log("第七题:todo");//todo

let sumArrTemp = [...Array9, ...Array10];
console.log(sumArrTemp);//拿到新数组

// let allArray =[...Array9,...Array10]


let allArray =new Map([...Array9,...Array10])
console.log()


// let sumArr =sumArrTemp.map(obj=>{
//     forEach(id =>{
//         //遍历每个id

//     })
// })


/*
// 筛选出 id 相同的项并合并成新对象@gpt
let result = sumArrTemp.filter((item, index, self) => {
    return self.findIndex(t => t.id === item.id) === index; // 去重
}).map(item => {
    let obj1 = Array9.find(obj => obj.id === item.id);
    let obj2 = Array10.find(obj => obj.id === item.id);
    return { ...obj1, ...obj2 }; // 合并对象
});

console.log("合并后的对象数组：", result);

*/
/*

//8.将筛选选出 Array11 与 Array12中id相同的项  并且将Array11中的属性以 键名为child的对象(不包含id)的形式放入Array12中  => 例[{id:4,child:{num:7,age2}}]
let Array11 = [{ id: 1, num: 10, age: 12 }, { id: 2, num: 12, age: 10 }, { id: 3, num: 0 }, { id: 4, num: 7, age: 2 }]
let Array12 = [{ id: 4, name: '测试' }, { id: 3, name: '测试2' }, { id: 2, name: '测试3' }, { id: 1, name: '测试4' }]


console.log("第八题：todo");//todo




console.log("题解：")

//将下列对象数组以id去重  => 例如id为1的两项重复了 只保留其中一项
let Array6 = [{ id: 1, count: 10 }, { id: 3, count: 20 }, { id: 1, count: 10 }, { id: 2, count: 10 }]
//1.先定义一个空的map对象
let ArrayID = new Map();
//2.进行过滤
Array6 = Array6.filter((v, i) => {
    //3.filter return后面写过滤条件

    //4.条件就是ArrayID中键值 不包含这一项的id
    //4注.has(key): 判断Map对象中是否有Key(键值)所对应的值，有返回true,否则返回false

    //5.这里用到的 && 语法 只有满足前面一个条件 后面的条件才会执行

    //6.下面的条件翻译过来就是 如果ArrayID的key 不包含 v.id 则像ArrayID中添加一个新的元素 {v.id:0}
    //6注.set(key, val): 向Map中添加新元素

    //7.同时 下面两项都满足了 得到的布尔值是 true 这一项会被过滤出来 我们下面可以打印一下
    console.log(`执行第${i}次`, !ArrayID.has(v.id))
    return !ArrayID.has(v.id) && ArrayID.set(v.id, 0)
})
console.log('Array6', Array6, ArrayID)


//引申一下 按xx去重 可以封装一个函数
//形参 需要去重的数组 以什么字段去重
function qcfunction(arr, keyName) {
    let newMap = new Map();
    return arr.filter((v, i) => { return !newMap.has(v[keyName]) && newMap.set(v[keyName], 0) })

}
//测试能不能使用
let Arraypika = [{ name: '小红', age: 1 }, { name: '小红', age: 1 }, { name: '小明', age: 2 }]
//调用函数
Arraypika = qcfunction(Arraypika, 'name')
console.log('Arraypika', Arraypika)

*/





// let pika = [1, 2, 3, 4]
// pika.forEach((v, i) => {
//     v = '测试'
//     return 'asv'
// })
// console.log('pika', pika)

// let pika = [1, 2, 3, 4]
// pika = pika.map((v, i) => {
//     // v = '测试'
//     v = '测试'
//     return v
// })
// console.log('pika', pika)


/*
console.log("题解：")

//将下列对象数组以id去重  => 例如id为1的两项重复了 只保留其中一项
let Array6 = [{ id: 1, count: 10 }, { id: 3, count: 20 }, { id: 1, count: 10 }, { id: 2, count: 10 }]
let ArrayID = new Map();


Array6 = Array6.filter((v, i) => {
    console.log(`执行第${i}次`, !ArrayID.has(v.id))
    return !ArrayID.has(v.id) && ArrayID.set(v.id, 0)
})

Array6 = Array6.filter((v, i) => {
    console.log(`执行第${i}次`, !ArrayID.has(v.id));
    if (!ArrayID.has(v.id)) {
        ArrayID.set(v.id, 0);
        return true;
    } else {
        return false;
    }
});


console.log('Array6', Array6, ArrayID)



Array6 = [{ id: 1, count: 10 }, { id: 3, count: 20 }, { id: 1, count: 10 }, { id: 2, count: 10 }];
ArrayID = [];

Array6 = Array6.filter((v, i) => {
    console.log(`执行第${i}次`, !ArrayID.includes(v.id));
    if (!ArrayID.includes(v.id)) {
        ArrayID.push(v.id);
        return true;
    }
    return false;
});

console.log('Array6', Array6, ArrayID);
*/

/*
console.log("复刻题解：")

//将下列对象数组以id去重  => 例如id为1的两项重复了 只保留其中一项
let nums = [{ id: 1, count: 10 }, { id: 3, count: 20 }, { id: 1, count: 10 }, { id: 2, count: 10 }]

//定义集合对象Map
let seenIds = new Map();
nums = nums.filter((v, i) => {
    console.log(`这是第${i + 1}次循环,下标是${i},count是${v.count},结果是${seenIds.has(v.id) ? "未重复" : "已重复"}!`)
    if (seenIds.has(v.id))
        return false
    seenIds.set(v.id)
    return true
})

console.log(nums)
//使用展开运算符尝试拿到对象
console.log(...nums)
*/
/*
console.log("复刻题解：")

// /*
//将下列对象数组以id去重  => 例如id为1的两项重复了 只保留其中一项
let nums = [{ id: 1, count: 10 }, { id: 3, count: 20 }, { id: 1, count: 10 }, { id: 2, count: 10 }]

//定义集合对象Map
let seenIds = new Map();
nums = nums.filter((v, i) => {
    console.log(`这是第${i + 1}次循环,id是${v.id},count是${v.count},结果是${seenIds.has(v.id) ? "未重复" : "已重复"}!`)
    
    return seenIds.has(v.id)?false:seenIds.set(v.id)
    // return !seenIds.has(v.id) && seenIds.set(v.id, 0)

})

console.log(nums)
//使用展开运算符尝试拿到对象
console.log(...nums)

// */

/*
//测试数据
let names = [{ name: '小红', age: 1 }, { name: '小红', age: 1 }, { name: '小明', age: 2 }]

function quChong(arrayList, id) {
    let seenIds = new Map();
    arrayList = arrayList.filter((v, i) => {
        return !seenIds.has(v[id]) && seenIds.set(v[id],0)
    })
    return arrayList
}


function qcfunction(arr, keyName) {
    let newMap = new Map();
    return arr.filter((v, i) => {
        return !newMap.has(v[keyName]) && newMap.set(v[keyName], 0)
    })

}

console.log("---------")
console.log("调用去重方法前：",names)
console.log(...names)
console.log("调用去重方法前："+names)
console.log(`调用去重方法前：${names}`)
// console.log(quChong(names,'name'))
// console.log(`调用去重方法后：${qcfunction(names,'name')}`)



//将下列对象数组以id去重  => 例如id为1的两项重复了 只保留其中一项
nums = [{ id: 1, count: 10 }, { id: 3, count: 20 }, { id: 1, count: 10 }, { id: 2, count: 10 }]


seenIds = new Map();
nums = nums.filter((v, i) => {
    console.log(`这是第${i + 1}次循环,id是${v.id},count是${v.count},结果是${seenIds.has(v.id) ? "未重复" : "已重复"}!`)

    return seenIds.has(v['id']) ? false : seenIds.set(v['id'])
    return seenIds.has(v.id) ? false : seenIds.set(v.id)
    // return !seenIds.has(v.id) && seenIds.set(v.id, 0)

})

console.log(nums)
*/
