// Object : Objects are collections of properties, and a property is an association between a name
//  (or key) and a value. A property's value can be a function, 
// in which case the property is known as a method. 
// objects are used to store data in key-value pairs and can be created using object literals, constructors, or classes.


// Creating an object using object literal

const user = {
    name: 'John Doe',
    age: 30,
    email: 'John@gmail.com',
    amount: 3400
}

// printing the object
console.log(user);

console.log(typeof user);

// accessing object elements
console.log(user.name); // Output: John Doe
// or
console.log(user['name']); // Output: John Doe

// Modifying object properties(objects are mutable)
user.aadhar = '1234-5678-9012'; // adding a new property to the object
console.log(user);

// Modifying existing property
user.amount = 4000; // changing the value of the amount property
console.log(user);

// Deleting a property from the object
delete user.email; // deleting the email property from the object
console.log(user);

// objects are copied by reference, 
// which means that when you assign an object to a new variable, 
// you are actually copying the reference to the original object, not creating a new object.

const user1 = user; // copying the reference of the user object to user1
user1.age = 35; // modifying the age property of user1
console.log(user);

// accessing only the keys of the object
console.log(Object.keys(user)); // Output: ['name', 'age', 'amount', 'aadhar']

// accessing only the values of the object
console.log(Object.values(user)); // Output: ['John Doe', 35, 4000, '1234-5678-9012']

// accessing both keys and values of the object
console.log(Object.entries(user)); // Output: [['name', 'John Doe'], ['age', 35], ['amount', 4000], ['aadhar', '1234-5678-9012']]


// iterating over an object using for...in loop

for (let key in user) {
    console.log(key , user[key]); // Output: name : John Doe, age : 35, amount : 4000, aadhar : 1234-5678-9012
}



// Destructuring an object
const { name, age } = user; // destructuring the name and age properties from the user object
console.log(name); // Output: John Doe
console.log(age); // Output: 35

//       OR

const { name: userName, age: userAge } = user; // destructuring the name and age properties from the user object
// and renaming them to userName and userAge respectively
console.log(userName); // Output: John Doe
console.log(userAge); // Output: 35


const arr = [1, 2, 3, 4, 5];
const [first, second] = arr; // destructuring the first and second elements from the array
console.log(first, second); // Output: 1, 2


// using for ...of loop to iterate over an array of objects
const temparr = Object.keys(user); // getting the keys of the user object as an array
for (let key of temparr) {
    console.log(key , user[key]); // Output: name : John Doe, age : 35, amount : 4000, aadhar : 1234-5678-9012
}

for(let values of Object.values(user)){
    console.log(values); // Output: John Doe, 35, 4000, 1234-5678-9012
}


for (let values of Object.entries(user)){
    console.log(values); // Output: ['name', 'John Doe'], ['age', 35], ['amount', 4000], ['aadhar', '1234-5678-9012']
}

for (let [key, value] of Object.entries(user)){
    console.log(key, value); // Output: name : John Doe, age : 35, amount : 4000, aadhar : 1234-5678-9012
}

// creting functions inside an object
const person = {
    name: 'Jane Doe',
    age: 28,
    greet: function() {
        console.log("strike is coming");
        return 20;
    }
}
const x = person.greet(); // calling the greet method of the person object
console.log(x); // Output: strike is coming, 20



//   Use if this keyword : it is used to refer to the current object that is executing the code.
const employee = {
    name: 'Alice',
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
employee.greet(); // Output: Hello, my name is Alice and I am 25 years old.

// below is the bad method of accessing the properties of an object without using this keyword, it will not work as expected
const employee1 = {
    name: 'Bob',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${employee1.name} and I am ${employee1.age} years old.`);
    }
}
employee1.greet(); // Output: Hello, my name is Bob and I am 30 years old. (it works but it is not recommended as it can lead to errors if the object name changes)

