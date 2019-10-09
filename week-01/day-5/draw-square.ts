'use strict';


// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;

let row1: string = "";
for(let i: number = 0; i < lineCount; i++){
    row1 += "%";
}

let row2: string = "";
for(let k: number = 0; k < lineCount - 2; k++){
    row2+= " ";
}
row2 = "%" + row2 + "%";

console.log(row1);
for(let n: number = 0; n < lineCount - 2; n++){
    console.log(row2);
}
console.log(row1);


