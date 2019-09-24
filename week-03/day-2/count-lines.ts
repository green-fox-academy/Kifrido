'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.



function fileNameAsString(fileName: string): number{
    const fs = require('fs');

    let content: string = '';
    
    try {
    content = fs.readFileSync(fileName, 'utf8');
    }
    catch(error) {
        console.log('0');
        process.exit();
    }
    let numberOfLines = (content.split("\n")).length;
    return numberOfLines;
    
}

console.log(fileNameAsString('test.txt'));
console.log(fileNameAsString('tesst.txt'));