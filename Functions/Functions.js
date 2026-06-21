// Functions : it is used when code needs to be reused multiple times.
//  It is a block of code that performs a specific task and can be called whenever needed.

// creating a function

function greet(){
    console.log("Hello World");
}

function addnumbers(a, b){
    return a + b;
}
greet(); // calling the greet function
addnumbers(5, 10); // calling the addnumbers function with arguments 5 and 10
addnumbers(7, 3); // calling the addnumbers function with arguments 7 and 3
console.log(greet); // Output: [Function: greet] : it will return the function definition of greet function 

// note: 
// if
addnumbers(5, 10 , 7); // calling the addnumbers function with arguments 5, 10 and 7 : it will return 15 because it will take only first two arguments and ignore the rest 


// concept of default parameters : it is used to set default values for function parameters in case they are not provided when the function is called.
function multiply(a, b = 1) { // setting default value of b to 1
    return a * b;
}
console.log(multiply(5)); // Output: 5 : it will take default value of b as 1

// concept of rest parameters : it is used to represent an indefinite number of arguments as an array.
function add(...num){
    let sum = 0;
    for(let n of num){
        sum += n;
    }
    console.log(sum);
}
add(1, 2, 3, 4, 5); // Output: 15 : it will take all the arguments as an array and add them


// Arrow functions : it is a shorter syntax for writing functions. It does not have its own this, arguments, super, or new.target keywords. It is best suited for non-method functions, and they cannot be used as constructors.

const greetings = ()=> {
    console.log("Hello World");
}
greetings(); // calling the greetings function

const addnum = (num1 , num2) => num1 + num2; // arrow function with parameters and return value
console.log(addnum(5, 10)); // Output: 15

const square = num => num * num; // arrow function with single parameter and return value , we neef not to put brackets ()
console.log(square(5)); // Output: 25

// to handle objects () is used to wrap the object in arrow function , otherwise it will be treated as a block of code and will throw an error.
const greet1 = () => ({ message: "Hello World" , age : 25 }); // arrow function returning an object
console.log(greet1()); // Output: { message: "Hello World", age: 25 }



// immediately invoked function expression (IIFE) : it is a function that is executed immediately after it is defined. It is used to create a new scope and avoid polluting the global scope.
(function() {
    console.log("Hello World");
})(); // Output: Hello World : it will execute the function immediately after it is defined




// callback functions : it is a function that is passed as an argument to another function and is executed after the completion of that function. It is used to handle asynchronous operations.

function greet2(){
    console.log("Hello World");
}
function greet3(callback){
    console.log("Good Morning");
    callback(); // calling the callback function
}
greet3(greet2); // calling greet3 with greet2 as the callback function : Output: Good Morning, Hello World

