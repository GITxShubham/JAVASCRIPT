// use of Math.pow() method to calculate the power of a number
let base = 2;
let exponent = 3;
let result = Math.pow(base, exponent);
console.log(result); // Output: 8


// use of Math.sqrt() method to calculate the square root of a number
let number = 16;
let squareRoot = Math.sqrt(number);
console.log(squareRoot); // Output: 4

// use of Math.abs() method to calculate the absolute value of a number
let negativeNumber = -5;
let absoluteValue = Math.abs(negativeNumber);
console.log(absoluteValue); // Output: 5


// use of Math.round() method to round a number to the nearest integer
let decimalNumber = 3.7;
let roundedNumber = Math.round(decimalNumber);
console.log(roundedNumber); // Output: 4


// use of Math.floor() method to round a number down to the nearest integer
let decimalNumber2 = 3.7;
let flooredNumber = Math.floor(decimalNumber2);
console.log(flooredNumber); // Output: 3

// use of Math.ceil() method to round a number up to the nearest integer
let decimalNumber3 = 3.2;
let ceiledNumber = Math.ceil(decimalNumber3);
console.log(ceiledNumber); // Output: 4


// use of Math.max() method to find the maximum of two numbers
let num1 = 5;
let num2 = 10;
let maxNumber = Math.max(num1, num2);
console.log(maxNumber); // Output: 10


// use of Math.min() method to find the minimum of two numbers
let num3 = 5;
let num4 = 10;
let minNumber = Math.min(num3, num4);
console.log(minNumber); // Output: 5


// use of toFixed() method to format a number to a specified number of decimal places
let decimalNumber4 = 3.14159;
let formattedNumber = decimalNumber4.toFixed(2);
console.log(formattedNumber); // Output: 3.14


// use of toPrecision() method to format a number to a specified number of significant digits
let decimalNumber5 = 3.14159;
let formattedNumber2 = decimalNumber5.toPrecision(3);
console.log(formattedNumber2); // Output: 3.14

// use of toExponential() method to format a number in exponential notation
let decimalNumber6 = 12345;
let formattedNumber3 = decimalNumber6.toExponential(2);
console.log(formattedNumber3); // Output: 1.23e+4


// use of parseInt() method to convert a string to an integer
let stringNumber = "42";
let integerNumber = parseInt(stringNumber);
console.log(integerNumber); // Output: 42


// use of toString() method to convert a number to a string
let numberToConvert = 42;
let stringConverted = numberToConvert.toString();
console.log(stringConverted); // Output: "42"


// use of isNaN() method to check if a value is NaN (Not-a-Number)
let notANumber = "Hello";
let checkNaN = isNaN(notANumber);
console.log(checkNaN); // Output: true

// use of new Number() constructor to create a Number object
let numberObject = new Number(42);
console.log(numberObject); // Output: [Number: 42]

// Note that using the Number constructor creates a Number object,
//  which is different from a primitive number.
//  It is generally recommended to use primitive numbers instead of Number objects
//  for better performance and simplicity.


// Use of Math.random() method to generate a random number between 0 and 1
let randomNumber = Math.random();
console.log(randomNumber); // Output: A random number between 0 and 1

// note : The Math.random() method generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// Use case : You can use Math.random() to generate random numbers for various purposes,
//  such as creating random IDs, simulating dice rolls, or generating random colors.



// Generating a random value from 0 to 9
let randomDigit = Math.floor(Math.random() * 10);
console.log(randomDigit); // Output: A random integer between 0 and 9


// Generating a random value from 1 to 10
let randomInteger = Math.floor(Math.random() * 10) + 1;
console.log(randomInteger); // Output: A random integer between 1 and 10



// Dice roll simulation (1 to 6)
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll); // Output: A random integer between 1 and 6

// Generating a random value from 15 to 25
let randomRange = Math.floor(Math.random() * 11) + 15;
console.log(randomRange); // Output: A random integer between 15 and 25


//  IMPORTANT FORMULA FOR GENERATING A RANDOM NUMBER IN A SPECIFIC RANGE (MIN TO MAX):
// let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;


// Example: Generating a 4 digit OTP from above formula
let minOTP = 1000; // Minimum 4-digit number
let maxOTP = 9999; // Maximum 4-digit number
let otp = Math.floor(Math.random() * (maxOTP - minOTP + 1)) + minOTP;
console.log(otp); // Output: A random 4-digit OTP between 1000 and 9999



// Note : math.random() is not secure for cryptographic purposes.
//  For secure random numbers, consider using the crypto module in Node.js or 
// the Web Crypto API in browsers.

