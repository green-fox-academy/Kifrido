'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
// works with even numbers

let lineCount: number = 8;

let row1: string = "";
let row2: string = "";

for(let i: number = 0; i < lineCount / 2; i++){
    row1 += "% ";
    row2 += " %";
}

for(let j: number = 0; j < lineCount / 2; j++){
    console.log(row1);
    console.log(row2);
}

