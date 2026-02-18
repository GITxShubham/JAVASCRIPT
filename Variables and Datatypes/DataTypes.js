// Primitive Data types

// 1. Number
let a = 10;
let b = 20.5;
console.log(a,b);
console.log(typeof a);     // this will show the data type of a

// 2. String
let c = "My name is Shubham";
let d = 'Shubham';
console.log(c,d);
console.log(typeof c);     // this will show the data type of c

// 3. Boolean
let e = true;
console.log(e);

// 4. Undefined  (if no variable is defined than program will by default give undefined)
let f;
console.log(f);

// 5. bigint
let g = 23452663225553256663n;
console.log(g);

// 6. null (if we dont want to put any values in our variable)
let h = null;
console.log(h);

// 7. symbol
const i = Symbol("id");
console.log(i);
const j = Symbol("id");
console.log(j);
console.log(i==j);




//  Non Primitive data type

// 1. array
let arr = [10,20,"Rohit",true];
console.log(arr);
console.log(typeof arr);     // this will show the data type of arr (Output : object) 
                             // because array is a type of object in javascript

// 2. Object
let obj = {
    name : "Rohit",
    account : 123123,
    age : 18,
    Category : "General"
}
console.log(obj);
console.log(typeof obj);     

// 3. Functions
function add(){
    console.log("Hello");
}
add();

// You can also store function as a variable . For example:
let k = function fun(){
    console.log("Uuuuuu");
}
console.log(k);
k();
console.log(typeof k);     // this will show the data type of k (Output : function)




// Primitive Data types are immutable (cannot be changed) 
let l = "Shubham";
l[0] = "R";      // this will not change the value of l because
                 // it is immutable(Output : Shubham)
console.log(l);

// but if we write :
l = "Rohit";     // this will change the value of l because
                 //  we are not changing the value of l but we are assigning
                 //  a new value to l(A seperate space in memory will be created for this new value)
console.log(l);




// Non Primitive data types are mutable (can be changed)

let m = [10,20,30];
console.log(m);
m.push(40);     // this will change the value of m because it is mutable
console.log(m);
m[0] = 100;    // this will also change the value of m because it is mutable
console.log(m);


let n = {
    name : "Shubham",
    age : 20
}
console.log(n);
n.name = "Rohit";     // this will change the value of n because it is mutable
console.log(n);


// Passing by value (Primitive data types)
let o = 10;
let p = o;    // here we are copying the value of o to p (not the reference)
console.log(o,p);   // if we change the value of o then it will not change the value of p 
                    // because they are stored in different memory locations 
p = 20;
console.log(o,p);   // Output : 10 20 (value of o is not changed)


// Passing by reference (Non Primitive data types)
let q = [10,20,30]; 
let r = q;    // here we are copying the reference of q to r (not the value)
console.log(q,r);   
q.push(40);         // if we change the value of q then it will change the value of r
console.log(q,r);   // Output : [10,20,30,40] [10,20,30,40]
                    //  (value of r is also changed because they are stored in the same memory location)