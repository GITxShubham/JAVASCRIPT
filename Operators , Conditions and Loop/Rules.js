// null is loosely equal to undefined, but not strictly equal
console.log(null == undefined); // true
console.log(null === undefined); // false

// null is falsy, but not the same as false
console.log(Boolean(null)); // false
console.log(null === false); // false

// null is of type object (this is a known quirk in JavaScript)
console.log(typeof null); // object

// if operator(> , <, >=, <=) is used with null, it is converted to 0
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true


// null is not equal to any other value except undefined
console.log(null == 0); // false
console.log(null == false); // false
console.log(null == ""); // false
console.log(null == null); // true
console.log(null === 0); // false
console.log(null === false); // false
console.log(null === ""); // false
console.log(null === null); // true

// null is often used to represent the absence of a value or a non-existent object
let person = {
    name: "John",
    age: 30,
    address: null // address is not available
};
console.log(person.address); // null

