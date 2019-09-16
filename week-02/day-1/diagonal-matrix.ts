'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let lineCount = 10;
let matrix:number[][] = [];

for (let i = 0; i < lineCount; i++){
    let row: number[] = [];
    for (let j = 0; j < lineCount; j++){
        if (i == lineCount - j -1){
            row.push(1);
        } else {
            row.push(0);
        };

        
    };

    matrix.push(row);
};

matrix.forEach(function(element){
    console.log(element);

});

