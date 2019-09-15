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

let row1 = "";
for(let k=0; k<lineCount; k++) {
        row1+="%";
} 

let row2 = "";
for(let j=0; j<lineCount-2;j++) {    
        row2 += " ";
}     
row2 = "%" + row2 + "%";

console.log(row1);
for(let n=0; n<lineCount-2; n++) {
        console.log(row2);
}          
console.log(row1);  

