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
let matrix: number[][] = [];

for (let i: number = 0; i < lineCount; i++){
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


function rotate(matrix) {          // function statement
    const N = matrix.length - 1;   // use a constant
    // use arrow functions and nested map;
    const result = matrix.map((row, i) => 
         row.map((val, j) => matrix[N - j][i])
    );
    matrix.length = 0;       // hold original array reference
    matrix.push(...result);  // Spread operator
    return matrix;
}

console.log(rotate(matrix));


  