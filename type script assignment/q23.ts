
// q:23


// Tests for equality and inequality with strings
let str1 = "hello";
let str2 = "world";

console.log("Is str1 == 'hello'? I predict True.");
console.log(str1 == 'hello');

console.log("Is str2 != 'hello'? I predict True.");
console.log(str2 != 'hello');

// Tests using the lower case function
let upperCaseStr = "HELLO";
let lowerCaseStr = "hello";

console.log("Is upperCaseStr.toLowerCase() == lowerCaseStr? I predict True.");
console.log(upperCaseStr.toLowerCase() == lowerCaseStr);

// Numerical tests
let num1 = 10;
let num2 = 5;

console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let condition1 = true;
let condition2 = false;

console.log("Is condition1 && condition2? I predict False.");
console.log(condition1 && condition2);

console.log("Is condition1 || condition2? I predict True.");
console.log(condition1 || condition2);

// Test whether an item is in an array
let array = [1, 2, 3, 4, 5];

console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));

// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6));
