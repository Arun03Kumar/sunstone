const btn = document.getElementById("my-button");
console.log(btn);

function fn() {
  console.log("Button clicked");
}

// btn.addEventListener("click", fn);
// btn.addEventListener("click", function () {
//   console.log("Button clicked");
// });

// btn.onclick = fn;

// btn.addEventListener("mouseover", function () {
//   console.log("Mouse over button");
// });

// btn.addEventListener("mouseout", function () {
//   console.log("Mouse out of button");
// });

// document.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);
// });

// document.addEventListener("keyup", function (event) {
//   console.log(`Key released: ${event.key}`);
// });

// const input = document.getElementById("my-input");

// input.addEventListener("input", function (event) {
//   console.log(`Input value: ${event.target.value}`);
// });

// input.addEventListener("focus", function (event) {
//   console.log("Input focused", event.type);
// });

// document.addEventListener("mousemove", function (e) {
//   console.log("Mouse moved", e.clientX, e.clientY);
// });

// bubbling
// event delegation

// window.alert("Hello, World!");

// alert("Hello, World!");

// console.log(location.reload());

// console.log(history);

// console.log(screen);

const x = setTimeout(function () {
  console.log("This message is displayed after 2 seconds");
}, 2000);

const y = setInterval(function () {
  console.log("This message is displayed every 3 seconds");
}, 3000);

console.log(x);
console.log(y);

clearTimeout(x);
clearInterval(y);
