let a = "hello";
let b = "woRld";
let c = a + " " + b;
console.log(c); // "hello world"

// uppercase and lowercase
console.log(a.toUpperCase()); // "HELLO"
console.log(b.toLowerCase()); // "world"

// substring is present or not
console.log(c.includes("world")); // true
console.log(c.includes("World")); // false

let d = "   hello world   ";
console.log(d.trim()); // "hello world"

let e = "hello,world,how,are,you";
console.log(e.split(",")); // ["hello", "world", "how", "are", "you"]

let f = "I love python";
console.log(f.replace("python", "javascript")); // "I love javascript"

let g = "hello world";
console.log(g.indexOf("world"));

// reverse a string
let h = "hello world";
let split_str = h.split("");
console.log(split_str);

split_str.reverse();
console.log(split_str);

let reversed_str = split_str.join("");
console.log(reversed_str); // "dlrow olleh"
