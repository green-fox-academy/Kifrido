'use strict';

let a: number[] = [1, 1, 5, 6];
let b: number[] = [3, 4, 7, 7];
let c: number[] = [2, 2, 6, 8];
let matrix: number[][] = [a, b, c];
console.log(matrix.length);


function transponation(matrix: number[][]): any{
    let newMatrix: number[][] = [];
    for(let k: number = 0; k < matrix[0].length; k++){
        newMatrix.push([]);
    }
    for(let i: number = 0; i < matrix[0].length; i++){
        for(let j: number = 0; j < matrix.length; j++){
            newMatrix[i][j] = matrix[j][i];
        }
    }
    return newMatrix;
}

console.log(matrix);
console.log(transponation(matrix));