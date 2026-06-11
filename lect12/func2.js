// implicit return value of a function is undefined
function add(x, y) {
  console.log(x + y);
}

add(5, 6);

// explicit return value of a function
function add2(x, y) {
  return x + y;
}

console.log(add2(5, 6));

console.log(add(50, 6));
