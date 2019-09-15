'use strict';

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

// Will work with lineCount >=4

let lineCount: number = 6;

let row1: string = "";
for(let i=0; i<lineCount; i++){
    row1 += "%";
}
console.log(row1);

let sp: string = "";
for (let j=0; j<lineCount - 3; j++) {
    sp += " ";
}
let row2 = "%%" + sp + "%";
console.log(row2);



let row3: string = "";
let sp1: string = "";
let sp2: string = "";
for(let k=0; k<lineCount - 4; k++){
    sp1 = "";
    for(let n=0; n<k+1; n++){
        sp1 += " ";
    }
    sp2 = "";
    for(let m=0; m<lineCount - 4 - k; m++){
        sp2 += " ";
    }
    row3 = "%" + sp1 + "%" + sp2 + "%";
    console.log(row3);
}

let row4 = "%" + sp + "%%";
console.log(row4 + '\n' + row1);
