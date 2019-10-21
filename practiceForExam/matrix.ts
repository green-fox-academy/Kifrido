'use strict'

//create a matrix and mirror it

let matrix: number[][] = [[1, 2, 3, 3, 5], [4, 5, 6, 6, 5], [7, 8, 9, 9, 5], [10, 11, 12, 13, 5], [6, 5, 4, 3, 2]]
console.table(matrix);

function mirrorMatrix(matrix: number[][]){
   let newMatrix: number[][] = [];
   let row: number[] = [];
   for(let i: number = 0; i < matrix.length; i++){
       for(let j: number = 0; j < matrix.length; j++){
           row.push(matrix[i][matrix.length-j-1]);
       }
       newMatrix.push(row);
       row = [];
   }
   return newMatrix;
}

console.table(mirrorMatrix(matrix));