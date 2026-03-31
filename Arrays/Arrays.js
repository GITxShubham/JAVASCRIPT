// Arrays : An array is a data structure that can hold more than one value at a time. 
// It is a collection of items stored at contiguous memory locations.
// In JavaScript, arrays are actually objects that have special properties and methods for working with collections of data.

// Creating an array
let marks = [85, 90, 78, 92, 88];

// printing the array
console.log(marks); // Output: [85, 90, 78, 92, 88]

// getting array length
console.log(marks.length); // Output: 5

// Note : Array is heterogeneous in JavaScript, which means it can hold different types of data. ex : let arr = [1, 'hello', true, null, undefined, {name: 'John'}, [1, 2, 3]];


// accesing array elements
console.log(marks[0]); // Output: 85

console.log(typeof marks); // Output: object

// Modifying array elements(arrays are mutable)

marks[2] = 80; // changing the value at index 2
console.log(marks); // Output: [85, 90, 80, 92, 88]

// Adding new elements to the array
// adding an element at the end of the array

marks.push(95); // adds 95 at the end of the array
console.log(marks); // Output: [85, 90, 80, 92, 88, 95]

// adding an element at the beginning of the array
marks.unshift(80); // adds 80 at the beginning of the array
console.log(marks); // Output: [80, 85, 90, 80, 92, 88, 95]

// Removing elements from the array
// removing the last element of the array

marks.pop(); // removes the last element of the array
console.log(marks); // Output: [80, 85, 90, 80, 92, 88]

// removing the first element of the array
marks.shift(); // removes the first element of the array
console.log(marks); // Output: [85, 90, 80, 92, 88]

// Note : we should avoid using shift() and unshift() methods as they are less efficient than push() and pop() methods
//        because they require re-indexing of all the elements in the array, which can be time-consuming for large arrays.


// Iterating over an array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]); // Output: 85, 90, 80, 92, 88
}
// using for...of loop
for (let mark of marks) {
    console.log(mark); // Output: 85, 90, 80, 92, 88
}


// copying an array(copy by reference)

let arr = [1, 2, 3];
let arr2 = arr; // arr2 is a reference to the same array as arr
arr2.push(4); // modifying arr2 will also modify arr
console.log(arr); // Output: [1, 2, 3, 4]

// note : using const keyword does not make the array immutable, it only prevents reassignment of the variable. The contents of the array can still be modified.


//  Slicing an array

const arr3 = [1, 2, 3, 4, 5];
const arr4 = arr3.slice(1, 4); // creates a new array from index 1 to index 3 (4 is not included)
console.log(arr4); // Output: [2, 3, 4]

// if we want to change in the original array then we can use splice() method
const arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 3); // removes 3 elements starting from index 1
console.log(arr5); // Output: [1, 5]

// some other variations of splice() method
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 0, 6, 7); // adds 6 and 7 at index 2 without removing any element
console.log(arr6); // Output: [1, 2, 6, 7, 3, 4, 5]

// So major difference between slice() and splice() method is that
// slice() method does not modify the original array and returns a new array, 
// while splice() method modifies the original array and can also return the removed elements as a new array.


// Concatenating arrays
const arr10 = [1, 2, 3];
const arr11 = ['Rohit',11,true];
const arr12 = arr10.concat(arr11); // creates a new array by combining arr10 and arr11
console.log(arr12); // Output: [1, 2, 3, 'Rohit', 11, true]

// spread method(...) it breaks elements of an array and spreads them into individual elements.
const arr7 = [1, 2, 3];
const arr8 = ['Rohit',11,true];
const arr9 = [...arr7, ...arr8]; // creates a new array by combining arr7 and arr8
console.log(arr9); // Output: [1, 2, 3, 'Rohit', 11, true]





// Converting an array to a string
const arr13 = [1, 2, 3, 'Rohit', 11, true];
const str = arr13.toString(); // converts the array to a string
console.log(str); // Output: "1,2,3,Rohit,11,true"

// use of join() method to convert an array to a string with a specific separator
const arr14 = [1, 2, 3, 'Rohit', 11, true];
const str2 = arr14.join(' - '); // converts the array to a string with ' - ' as a separator
console.log(str2); // Output: "1 - 2 - 3 - Rohit - 11 - true"
const str3 = arr14.join(''); // converts the array to a string without any separator
console.log(str3); // Output: "123Rohit11true"



// Simple search in an array

// using indexOf() method
const arr15 = [1, 2, 3, 'Rohit', 11, true];
console.log(arr15.indexOf('Rohit')); // Output: 3
console.log(arr15.indexOf('Rahul')); // Output: -1 (not found)

// lastIndexOf() method : it returns the last index at which a given element can be found in the array, or -1 if it is not present.
const arr16 = [1, 2, 3, 'Rohit', 11, true, 'Rohit'];
console.log(arr16.lastIndexOf('Rohit')); // Output: 6
console.log(arr16.lastIndexOf('Rahul')); // Output: -1 (not found)

// includes() method : it determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const arr17 = [1, 2, 3, 'Rohit', 11, true];
console.log(arr17.includes('Rohit')); // Output: true
console.log(arr17.includes('Rahul')); // Output: false (not found)



// sorting an array

const arr18 = [5, 2, 9, 1, 5, 6];
arr18.sort(); // sorts the array in ascending order
console.log(arr18); // Output: [1, 2, 5, 5, 6, 9]

const names = ['Rohit', 'Rahul', 'Amit', 'Suresh'];
names.sort(); // sorts the array in alphabetical order
console.log(names); // Output: ['Amit', 'Rahul', 'Rohit', 'Suresh']
// note : it sorts characters based on ascii values, 
// so uppercase letters will be sorted before lowercase letters.
//  ex : ['Rohit', 'Rahul', 'Amit', 'Suresh', 'rohit'] will be sorted as ['Amit', 'Rahul', 'Rohit', 'Suresh', 'rohit'] 

// sorting an array in descending order
const arr19 = [5, 2, 9, 1, 5, 6];
arr19.sort();
arr19.reverse(); // reverses the array to get it in descending order
console.log(arr19); // Output: [9, 6, 5, 5, 2, 1]

// since javaScript's sort() method sorts elements as strings by default, 
// it may not sort numbers correctly. To sort numbers in ascending order, we can provide a compare function to the sort() method.

const arr20 = [5, 2, 9, 1, 5, 6];
arr20.sort((a, b) => a - b); // sorts the array in ascending order
console.log(arr20); // Output: [1, 2, 5, 5, 6, 9]
// to sort numbers in descending order, we can modify the compare function as follows:
const arr21 = [5, 2, 9, 1, 5, 6];
arr21.sort((a, b) => b - a); // sorts the array in descending order
console.log(arr21); // Output: [9, 6, 5, 5, 2, 1]



// Flattening an array : it is the process of converting a multi-dimensional array into a single-dimensional array.
const arr22 = [1, 2, [3, 4], [5, 6]];
const flattened = arr22.flat(); // flattens the array by one level
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
// if we have a multi-dimensional array with more than one level of nesting, 
// we can use the flat() method with a depth argument to specify how many levels of nesting to flatten.
const arr23 = [1, 2, [3, 4, [5, 6]]];
const flattened2 = arr23.flat(2); // flattens the array by two levels
console.log(flattened2); // Output: [1, 2, 3, 4, 5, 6]



// Que : why javaScript arrays are not true arrays like in other programming languages?
// Ans : JavaScript arrays are not true arrays like in other programming languages because they are implemented as objects.
//       since it is heterogeneous, it can hold different types of data,
//       and it has dynamic resizing capabilities, which means that the size of the array can change dynamically as elements are added or removed.