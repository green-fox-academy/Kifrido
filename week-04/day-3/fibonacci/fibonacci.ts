'use strict';

//Write a function that computes a member of the fibonacci sequence by a given index
//Create tests for multiple test cases.

export function Fibonacci(num) {
    if (num <= 1) return 1;
  
    return Fibonacci(num - 1) + Fibonacci(num - 2);
  }