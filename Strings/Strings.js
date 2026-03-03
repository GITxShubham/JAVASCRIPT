//                           Strings
// -----------------------------------------------------------------------------

const a = "Rohit Negi";
const b = 'Rohit Negi';
console.log(a);
console.log(b); 

// Most modern method of creating a string is using backticks (``)
//  which allows for string interpolation and multi-line strings.

const c = `Rohit
Negi`;
console.log(c);


const day = 18;
const d = `Today is the ${day}th day of the month.`;
console.log(d);


// To find the length of a string, you can use the `length` property.
const e = "Hello, World!";
console.log(e.length); // Output: 13

// To access individual characters in a string, you can use bracket notation.
const f = "Hello, World!";
console.log(f[0]); // Output: H

// To convert a string to uppercase we can use the `toUpperCase()` method.
const g = "Hello, World!";
console.log(g.toUpperCase()); // Output: HELLO, WORLD!

// To convert a string to lowercase we can use the `toLowerCase()` method.
const h = "Hello, World!";
console.log(h.toLowerCase()); // Output: hello, world!

// Note that strings in JavaScript are immutable, meaning that once a string is created, 
// it cannot be changed. Any operation that appears to modify a string will actually
// create a new string.


// if we want to find index of a particular character or substring in a string, 
// we can use the `indexOf()` method.
const i = "Hello Coder Army";
console.log(i.indexOf("Cod")); // Output: 6

// if not found, it returns -1
console.log(i.indexOf("xyz")); // Output: -1

// if multiple occurrences of the substring are present, it returns the index of the first occurrence.
const j = "Hello Coder Army, welcome to the Coder Army!";
console.log(j.indexOf("Coder")); // Output: 6

// if we want to find the last occurrence of a substring, we can use the `lastIndexOf()` method.
const k = "Hello Coder Army, welcome to the Coder Army!";
console.log(k.lastIndexOf("Coder")); // Output: 31


// if we want to check if a string includes a certain substring, we can use the `includes()` method.
const l = "Hello Coder Army";
console.log(l.includes("Coder")); // Output: true
console.log(l.includes("xyz")); // Output: false





//  Extracting Substrings

// slice() method can be used to extract a portion of a string based on specified
//  start and end indices. 
const m = "Hello Coder Army";
console.log(m.slice(0, 5)); // Output: Hello
// If the end index is omitted, it extracts until the end of the string.
console.log(m.slice(6)); // Output: Coder Army
// If the start index is negative, it counts from the end of the string.
console.log(m.slice(-4)); // Output: Army

// substring() method is similar to slice() but does not accept negative indices.
const n = "Hello Coder Army";
console.log(n.substring(0, 5)); // Output: Hello
// If the end index is omitted, it extracts until the end of the string.
console.log(n.substring(6)); // Output: Coder Army
// If the start index is greater than the end index, it swaps them.
console.log(n.substring(5, 0)); // Output: Hello




//   Concatenation Of Strings
// We can concatenate strings using the `+` operator or the `concat()` method.

const o = "Hello";
const p = "World";
// Using + operator
const q = o + " " + p;
console.log(q); // Output: Hello World
// Using concat() method
const r = o.concat(" ", p);
console.log(r); // Output: Hello World

// Note:
console.log(24+"Hello"); // Output: 24Hello 
console.log(24+30+"Hello"); // Output: 54Hello
// In the first case, the number 24 is converted to a string and concatenated with "Hello".
// In the second case, the numbers 24 and 30 are added together first to get 54,
// and then the result is concatenated with "Hello" to produce "54Hello".



//  Replacing Substrings
// We can replace a substring in a string using the `replace()` method.
const s = "Hello Coder Army";
// Replace the first occurrence of "Coder" with "Developer"
const t = s.replace("Coder", "Developer");
console.log(t); // Output: Hello Developer Army
// To replace all occurrences of a substring, we can use replaceAll() method.
const u = "Hello Coder Army, welcome to the Coder Army!";
const v = u.replaceAll("Coder", "Developer");
console.log(v); // Output: Hello Developer Army, welcome to the Developer Army!


// Trimming Whitespace
// We can remove whitespace from the beginning and end of a string using the `trim()` method.
const w = "  Hello Coder Army   ";
console.log(w.trim()); // Output: Hello Coder Army

// To remove whitespace only from the beginning of a string, we can use the `trimStart()` method.
const x = "  Hello Coder Army   ";
console.log(x.trimStart()); // Output: Hello Coder Army
// To remove whitespace only from the end of a string, we can use the `trimEnd()` method.
const y = "  Hello Coder Army   ";
console.log(y.trimEnd()); // Output:   Hello Coder Army



//  Splitting Strings
// We can split a string into an array of substrings using the `split()` method.
const names = "Rohit, Neha, Rahul, Priya";
const nameArray = names.split(", ");
console.log(nameArray); // Output: [ 'Rohit', 'Neha', 'Rahul', 'Priya' ]


// Joining Strings
// We can join an array of strings into a single string using the `join()` method.
const nameArray2 = ['Rohit', 'Neha', 'Rahul', 'Priya'];
const names2 = nameArray2.join(", ");
console.log(names2); // Output: Rohit, Neha, Rahul, Priya


//  Template Literals
// Template literals are a powerful way to create strings in JavaScript. 
// They allow for string interpolation, which means you can embed expressions inside a string using `${}` syntax.
const name = "Rohit";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: My name is Rohit and I am 25 years old.


// Escape Characters
// In JavaScript, you can use escape characters to include special characters in a string.
const quote = "She said, \"Hello!\"";
console.log(quote); // Output: She said, "Hello!"
const path = "C:\\Users\\Rohit\\Documents";
console.log(path); // Output: C:\Users\Rohit\Documents