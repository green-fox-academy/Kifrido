'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substring(word: string, word2: string): number{
  return word.indexOf(word2);
}

console.log(substring("honeymoon", "moon"));

