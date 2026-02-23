//    OPERATORS

// Arithmetic operators
console.log(5+3);
console.log(5-3);
console.log(5*3);
console.log(5/3);
console.log(5%3);
console.log(5**3);

// Assignment operators
let a = 5;
a += 3; // a = a + 3
console.log(a);
a -= 3; // a = a - 3
console.log(a);
// Similarly, we can use *=, /=, %=, **=


// Comparison operators
let b = 10;
let c = 20;;
console.log(b == c); // false
console.log(b != c); // true
console.log(b > c); // false
console.log(b < c); // true
console.log(b >= c); // false
console.log(b <= c); // true


// Logical operators
let d = true;
let e = false;
console.log(d && e); // false
console.log(d || e); // true
console.log(!d); // false


// Bitwise operators
let f = 5; // 0101 in binary
let g = 3; // 0011 in binary
console.log(f & g); // 1 (0001 in binary)
console.log(f | g); // 7 (0111 in binary)
console.log(f ^ g); // 6 (0110 in binary)
console.log(~f); // -6 (inverts the bits of f)
console.log(f << 1); // 10 (0101 shifted left by 1)
console.log(f >> 1); // 2 (0101 shifted right by 1)
console.log(f >>> 1); // 2 (0101 shifted right by 1, zero-filled)


// Ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes


// Typeof operator
console.log(typeof 5); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known quirk in JavaScript)


// Difference between == and ===
console.log(5 == "5"); // true (loose equality, type coercion occurs)
console.log(5 === "5"); // false (strict equality, no type coercion)
