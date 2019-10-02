'use strict';


// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function countLetters(word : string) : string {
    let dictionary: any = {};

        word.toLowerCase().replace(/\s/g,'').split('').sort().forEach(function(element) {
           if(!dictionary[element]) { dictionary[element]=0; }
            dictionary[element]++;
        });
    return dictionary;
}