// create a function that returns a function
// that adds a number to its argument

function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = createAdder(5);
console.log(typeof add5);
console.log(add5(10)); // should print 15

// create a function that takes another function as an argument and calls that
// function with a given argument
function callWith10(func) {
  return func(10);
}
