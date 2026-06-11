let arr = [1, 2, 3, 4, 5];
console.log(arr);

let arr2 = [1, "hello", true, null, undefined, { name: "Alice" }, [1, 2, 3]];
console.log(arr2);

console.log(arr[0]); // 1
console.log(arr[4]);

arr[0] = 10;
console.log(arr); // [10, 2, 3, 4, 5]

arr.push(40);
console.log(arr); // [10, 2, 3, 4, 5, 40]

arr.pop();
console.log(arr); // [10, 2, 3, 4, 5]

arr.unshift(0);
console.log(arr); // [0, 10, 2, 3, 4, 5]

arr.shift();
console.log(arr); // [10, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let x of arr) {
  console.log(x);
}

let new_arr = arr.map((i) => i * i);
console.log(new_arr); // [100, 4, 9, 16, 25]

let even_arr = arr.filter((i) => i % 2 === 0);
console.log(even_arr); // [10, 2, 4]

let sum = arr.reduce((acc, i) => acc + i, 0);

arr.find((i) => i > 3); // 10
arr.findIndex((i) => i > 3); // 0

// use map to create a new array with the squares of the original array
let squares = arr.map((i) => i * i);

// spread operator
let arr3 = [...arr, 50, 39];
console.log(arr3); // [10, 2, 3, 4, 5, 50, 39]

// array destructuring
let [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); // 10 2 3 4 5

let [first, ...rest] = arr;
console.log(first);
console.log(rest);

// group students by their grades using reduce
let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
];

let grouped_students = students.reduce((acc, student) => {
  if (!acc[student.grade]) {
    acc[student.grade] = [];
  }
  acc[student.grade].push(student.name);
  return acc;
}, {});

console.log(grouped_students); // { A: ["Alice", "Charlie"], B: ["Bob"], C: ["David"] }

// sum of all even numbers in an array using reduce

let sum_even = arr.reduce((acc, i) => {
  if (i % 2 === 0) {
    return acc + i;
  }
  return acc;
}, 0);

console.log(sum_even); // 10

// find frequency of characters in a string
let str = "hello world";

let char_freq = str.split("").reduce((acc, char) => {
  if (!acc[char]) {
    acc[char] = 1;
  } else {
    acc[char]++;
  }
  return acc;
}, {});

console.log(char_freq); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
