'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
 
/*let arr: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(arr){
    let arrNew: number[] = [];
    for(let i: number = 0; i < arr.length; i++){
        if(arrNew[i] == 0){
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}*/

let output:number[] = [];
let arr: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(arr) {
    let sorted: number[] = arr.sort(); //sorts the numbers in the array to growing numbers
    console.log(sorted);
    for (let i = 0; i < arr.length; i++){
        if (sorted[i] != sorted[i+1]){ // if the elements next to each other are not the same then there is only one of that number
            output.push(sorted[i]); // in that case it pushes the number in the output.
        };
    };
    return output;
}
console.log(unique(arr))


