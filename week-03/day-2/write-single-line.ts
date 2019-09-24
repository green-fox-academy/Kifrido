'use strict';

import { fileURLToPath } from "url";

const fs = require('fs');
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function writeSingleLine(fileName: string): void {
    let fileContent: string = "Krisztina Nagy";
    let targetFile: string = 'my-file.txt';
    try {
    if(targetFile != fileName){
        throw 'error';
        } else {
        fs.writeFileSync(targetFile, fileContent, 'utf-8');
        }
    }
    catch(error) {
        console.log('Unable to write file: my-file.txt');
    }

    }

    writeSingleLine('my-file.txt');
    writeSingleLine('my-fille.txt');

