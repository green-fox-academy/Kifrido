import { fileURLToPath } from "url";

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');

let content: string = '';

content = fs.readFileSync('my-file.txt', 'utf8');

let lines: string[] = content.split('\n');


for(let line of lines) {
    let parts = line.trim().split(',');

    console.log('Name: ' + parts[0]);
    //let age: number = parseInt(parts[1]);
}
