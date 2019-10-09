'use strict';

let lineCount: number = 4;


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is


for(let i: number = 0; i < lineCount; i++) {
    let row="";
    for(let j: number = 0; j < lineCount - i; j++) {
        row+=" ";
    } 
    for(let k: number = 0; k < 2*i + 1; k++) {    
        row += "*";
    } 
         console.log(row);  
}