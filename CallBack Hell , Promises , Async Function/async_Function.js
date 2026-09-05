// An async function in JavaScript is a special type of function designed to handle
// asynchronous operations (like fetching data from an API, reading files, 
// or waiting for a timer) in a cleaner, more readable way.


// Introduced in ES8 (ES2017), it allows you to write promise-based asynchronous code
// that looks and behaves like traditional synchronous (line-by-line) code, saving you 
// from complex .then() and .catch() chains.


// Note : 1. It Always Returns a Promise
//        2. It Unlocks the await Keyword



// Example:


async function greet() {
    throw "404 page not found";
    return "Hello!";
}

greet()
    .then((result)=>{
        console.log("Promise was resolvd.");
        console.log("Result was :",result);
    })
    .catch((error)=>{
        console.log("promise was rejected with error : ",error);
    });


let demo = async ()=>{
    return 5;
}

console.log(demo());
