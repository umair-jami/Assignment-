// q21:Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

const indexOutOfRange = numbers[10]; 

console.log(indexOutOfRange)
if (indexOutOfRange !== undefined) {
    console.log("Element at index 10:", indexOutOfRange);
} else {
    console.log("Index is out of range. Cannot access element at index 10.");
}
