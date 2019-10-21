'use strict';

//Write a method which can read and parse a file containing not so family friendly text. 
//The method must remove all the given words from the file and return the amount of the removed words.

const fs = require('fs');

let originalContent: string = "";
try{
originalContent = fs.readFileSync('swear-words.txt', 'utf-8');
} catch(Error){
    console.log('Error found');
}
let badWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];
console.log(originalContent);
let words: string[] = originalContent.toLowerCase().split(' ');

function filterBadWords(content: string[]): number{
    let counter: number = 0;
    let newContent = words.filter(function(element){
        if(badWords.includes(element)){
            counter ++;
            return false;
        }else{
            return true;
        }
    });
    fs.writeFileSync('swear-words-clean.txt', newContent, 'utf-8');
    return counter;
}

console.log(filterBadWords(words));
