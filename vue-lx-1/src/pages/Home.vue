<template>
  <div>
    <h2 class="sy">这是首页</h2>
  </div>
</template>
<script setup>


// const numbers = [1, 2, 3];


// //map
// function double(num) {
//     return num * 2;
// }

// const doubled = numbers.map(double);
// // console.log(doubled); // [2, 4, 6]


// //foreach
// function logDouble(num) {
//     console.log(num * 3);
// }

// numbers.forEach(logDouble); // 输出 2, 4, 6

// const nums=[1,2,3,4,5,6,7,8,9,10];

//foreach
// foreach(i of nums){
//   console.log(i);
// }

// const nums=[1,2,3,4,5,6,7,8,9,10];

// for (const i of nums) {
//     console.log(i);
// }

// for (const i in nums) {
//     console.log(i);
// }


//使用 forEach
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(const i in nums){
//   nums[i]=nums[i]*5;
// }


//for循环-in
// for (const i in nums) {
//   console.log("start\t" + i);
//   nums[i] = nums[i] * 6;
//   console.log("then\t" + nums[i]);
// }

//for循环-of-1
// for (const [index, value] of nums.entries()) {
//   console.log("start\t" + value);
//   nums[index] = value * 6;
//   console.log("then\t" + nums[index]);
// }

//for循环-of-2
// let index = 0;
// for (const value of nums) {
//   console.log("start\t" + value);
//   nums[index] = value * 6;
//   console.log("then\t" + nums[index]);
//   index++;
// }




// nums.forEach(function(value, index) {
//     console.log(`索引: ${index}, 值: ${value}`);
// });

// console.log(nums);



const arr = [7, 4, 0, 20];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(val => {
  console.log(val);
})




</script>

<style scoped></style>