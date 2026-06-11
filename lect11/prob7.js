// reverse the number without converting it to string
// 12345 -> 54321

let num = 122221;
let num2 = num;

let ans = 0;

while (num > 0) {
  let rem = num % 10;
  ans = ans * 10 + rem;
  num = Math.floor(num / 10);
}

console.log(ans);

// now check if number is palindrome or not
if (num2 === ans) {
  console.log("Number is palindrome");
} else {
  console.log("Number is not palindrome");
}
