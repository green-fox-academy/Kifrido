'use strict';

//Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
//Create a test for that.



export function makeAnagrams(word1: string, word2: string): boolean{
    let string1 : string = word1.toLowerCase().split('').sort().join('');
    let string2 : string = word2.toLowerCase().split('').sort().join('');
//global search in all letters - takes them apart - sorts them alphabeticly and puts them together 
  
    return string1 === string2;
}

