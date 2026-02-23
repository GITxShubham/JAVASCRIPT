let a = 0.1;
let b = 0.2;
let sum = a + b;
console.log(sum===0.3); // false
console.log(sum); // 0.30000000000000004
// This is due to the way floating-point numbers are represented in JavaScript (and in most programming languages).
// To mitigate this issue, we can use a small epsilon value to compare the numbers:
let epsilon = 0.000001;
console.log(Math.abs(sum - 0.3) < epsilon); // true
