'use strict'

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs'); 

function copyFile(fileIn: string, fileOut: string): boolean{
    try{
        fs.copyFileSync(fileIn, fileOut); 
        return true;
    } catch(error){
        return false;
    }
}

let result: boolean = copyFile('test1.txt', 'test2.txt');
console.log(result);
