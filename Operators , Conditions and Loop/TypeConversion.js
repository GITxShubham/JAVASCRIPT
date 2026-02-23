let a = Number("20");
console.log(a); // 20
console.log(typeof a); // number

let b = String(20);
console.log(b); // "20"
console.log(typeof b); // string

let c = Boolean(1);
console.log(c); // true
console.log(typeof c); // boolean
let d = Boolean(0);
console.log(d); // false
console.log(typeof d); // boolean

let e = Number("abc");
console.log(e); // NaN (Not a Number)
console.log(typeof e); // number (NaN is of type number)

let f = String(true);
console.log(f); // "true"
console.log(typeof f); // string

let g = Boolean("");
console.log(g); // false (empty string is falsy)
console.log(typeof g); // boolean
let h = Boolean("Hello");
console.log(h); // true (non-empty string is truthy)
console.log(typeof h); // boolean


let i = Number(true);
console.log(i); // 1 (true is converted to 1)
let j = Number(false);
console.log(j); // 0 (false is converted to 0)
let k = String(null);
console.log(k); // "null" (null is converted to the string "null")
let l = Boolean(null);
console.log(l); // false (null is falsy)
let m = Number(undefined);
console.log(m); // NaN (undefined is converted to NaN)
let n = String(undefined);
console.log(n); // "undefined" (undefined is converted to the string "undefined")
let o = Boolean(undefined);
console.log(o); // false (undefined is falsy)


let p = "5" + 3;
console.log(p); // "53" (string concatenation)
let q = "5" - 3;
console.log(q); // 2 (string "5" is converted to number 5, then subtraction is performed)