'use strict';

let number: number = 10;
let sum: number = 0; 

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

for (let i: number = 1; i <= number; i++) {
  sum = sum + i
  }
   
  console.log('Input: ' + number + '\n' + 'Output: Sum: ' + sum + ', Average: ' + sum / number);

