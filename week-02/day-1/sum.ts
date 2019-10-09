'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


let n: number = 10;

function sum(n: number): number{
    let total: number = 0;
    for(let i: number = 0; i < n; i++){
        total += i;
    }
    return total;
}
console.log(sum(n));


