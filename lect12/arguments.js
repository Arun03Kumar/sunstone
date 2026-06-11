// function f() {
//   console.log(arguments);
// }

// f(1, 2, 3, 4, 5);
// f("hello", "world");
// f(true, false, true);
// f({ name: "Alice" }, { name: "Bob" });
// f(23, 4);

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20, 30));
