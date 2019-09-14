'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount1: number = lineCount / 2 + 0.5;
let lineCount2: number = lineCount1 - 1;

for(let i=0; i<lineCount1; i++) {
    let row="";
        for(let j=0; j<lineCount1 - i; j++) {
            row+=" ";
        } 
        for(let k=0; k<2*i+1;k++) {    
           row += "*";} 
           
        console.log(row);  
    } 
    
    
    for(let i=0; i<lineCount2; i++) {
        let row="";
            for(let j=0; j<i+2; j++) {
                row+=" ";
            } 
          
            for(let k=0; k<2*lineCount2-1-2*i; k++) {    
               row += "*";} 
               
            console.log(row);  
        } 