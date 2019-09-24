'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

let content: string = '';

try {
content = fs.readFileSync('tesst.txt', 'utf8');
}
catch(error) {
    console.log('0');
    process.exit();
}
let numberOfLines = (content.split("\n")).length;


function fileNameAsString(numberOfLines: number){
 console.log(numberOfLines);
}

fileNameAsString(numberOfLines);