'use strict';

//We are going to represent our expenses in a list containing integers.

//Create a list with the following items.
//500, 1000, 1250, 175, 800 and 120
//Create an application which solves the following problems.
//How much did we spend?
//Which was our greatest expense?
//Which was our cheapest spending?
//What was the average amount of our spendings?

let myExpenses: number [] = [500, 1000, 1250, 175, 800, 120];
//let sum: number = 0;
//let i: number = 0;


    /*for (let i: number = 0; i < myExpenses.length; i++){
        sum += myExpenses[i];
    }
    
    console.log(sum);
    console.log(Math.max(myExpenses[i]));*/

    
/*function getSum(total, num) {
    return total + num;
  }
console.log(myExpenses.reduce(getSum, 0));*/

function getSum(array){
    let sum = 0;
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i: number = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
        if (array[i] < min){
            min = array[i];
        }
        sum += myExpenses[i];
    } 
    let average = sum / array.length;
    let values: number[] = [sum, max, min, average];
    return values;
}

//let sumAll = getSum(myExpenses);

//console.log('We spent ' + sumAll);

//let arr = getSum(myExpenses);
/*console.log('The sum of the elements is ' + arr[0]);
console.log('Max ' + arr[1]);
console.log('Min ' + arr[2]);
console.log('Average ' + arr[3]);*/

/*let text = ['Sum ', 'Max ', 'Min ', 'Average '];

for (let j = 0; j < 4; j++){
    console.log(text[j], arr[j]);
}*/


console.log(Math.max(...myExpenses));
console.log(Math.min(...myExpenses));