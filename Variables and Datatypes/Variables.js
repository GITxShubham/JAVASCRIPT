// how to declare Variable in javascript

let name = "Shubham";
let age = 20;
console.log(name , age);
age = 30;
console.log(name , age);

const account = 1234;
console.log(account);
// account = 12;             // ya run nhi hoga error dega b/c constant variable ko change nhi kar sakta 







// Older Method of declaring Variables

var a = 10;
console.log(a);
a = 20;
console.log(a);
// we can declare var a many times but not in the case of let

var a = 30;    // No error although it is defined twice;

// but in the case of let

let b = 30;
// let b = 40;      // this will show error


// There was 1 more problem with var
// it was accessible outside the condition loop 
// For example:

if(true){
    var t = 90;
}
console.log(t);        // this was true , t can be accessed outside the loop (but this was not in the case of let)

// These are the reasons we not use var in today time