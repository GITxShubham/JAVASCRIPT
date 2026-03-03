//                         DATES

// 1. Date objects are created with the new Date() constructor.
const now = new Date();

// Getting the current date and time
console.log(now); // Output: current date and time
// Note: this date and time will be UTC (Coordinated Universal Time) by default.

console.log(now.toString()); // Output: current date and time in a human-readable format
// Note: the output will be in the local time zone of the environment
//  where the code is executed.

console.log(now.toISOString()); // Output: current date and time in ISO 8601 format
console.log(now.toUTCString()); // Output: current date and time in UTC format
console.log(now.toLocaleString()); // Output: current date and time in the local format of the environment



// Some other useful methods to get specific parts of the date and time:

console.log(now.getFullYear()); // Output: current year (e.g., 2024)
console.log(now.getMonth()); // Output: current month (0-11, where 0 is January and 11 is December)
console.log(now.getDate()); // Output: current day of the month (1-31)
console.log(now.getHours()); // Output: current hour (0-23)
console.log(now.getMinutes()); // Output: current minute (0-59)
console.log(now.getSeconds()); // Output: current second (0-59)
console.log(now.getMilliseconds()); // Output: current millisecond (0-999)
console.log(now.getDay()); // Output: current day of the week (0-6, where 0 is Sunday and 6 is Saturday)
console.log(now.getTime()); // Output: number of milliseconds since January 1, 1970, 00:00:00 UTC




/// To create a date object for a specific date and time,
//  you can pass parameters to the Date constructor. The parameters are as follows:
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

const a = new Date(2024, 0, 1 , 8, 30, 35 , 500); // January 1, 2024, 08:30:35.500 
console.log(a); // Output: January 1, 2024, 08:30:35.500 in the local time zone
console.log(a.toString());  // Output: January 1, 2024, 08:30:35.500 in a human-readable format


// Milliseconds since epoch (January 1, 1970, 00:00:00 UTC)
const b = Date.now(); // Output: current time in milliseconds since epoch
console.log(b); // Output: current time in milliseconds since epoch

const c = new Date(1772562249570); // Output: date corresponding to the given milliseconds since epoch
console.log(c.toString()); // Output: date corresponding to the given milliseconds since epoch in a human-readable format

// To parse a date string and create a Date object, you can use the Date.parse() method or pass the date string directly to the Date constructor.
const d = new Date("2024-01-01T08:30:35.500Z"); // January 1, 2024, 08:30:35.500 UTC
console.log(d.toString()); // Output: January 1, 2024, 08:30:35.500 in the local time zone

// Note: when parsing date strings, the format of the string should be recognized by the JavaScript engine.


// To compare two Date objects, you can use the getTime() method to get the time in milliseconds since epoch and compare those values.
const e = new Date("2024-01-01T08:30:35.500Z");
const f = new Date("2024-01-01T08:30:35.500Z");
console.log(e.getTime() === f.getTime()); // Output: true (both dates represent the same point in time)