'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let givenParameter: number = (10);

function sum(givenParameter): number {
    let total = 0;
    for(let i=0; i<givenParameter; i++){
        total += i;
    }
    return total;
}

console.log(sum(givenParameter));

