'use strict';

//We are going to play with lists. Feel free to use the built-in methods where possible.

//Create an empty list which will contain names (strings)
//Print out the number of elements in the list

let listOfNames: string[] = [];
    console.log(listOfNames.length);

//Add William to the list

listOfNames.push ("William");

//Print out whether the list is empty or not

console.log(listOfNames.length > 0);

//Add John to the list
//Add Amanda to the list

listOfNames.push ("John", "Amanda");

//Print out the number of elements in the list

console.log(listOfNames.length);

//Print out the 3rd element

console.log(listOfNames[2]);

console.log("------------------");

//Iterate through the list and print out each name

listOfNames.forEach(element => {
    console.log(element);
});

 console.log("------------------");

 
//Iterate through the list and print
//1. William
//2. John
//3. Amanda

listOfNames.forEach(function(e, i) {
    console.log(i  + 1 + '.' + e);
});

    console.log("------------------");

//Remove the 2nd element

let removeItem = listOfNames.splice (1, 1);
 
    console.log("------------------");

//Iterate through the list in a reversed order and print out each name
//Amanda
//William

for (let i = listOfNames.length - 1; i >=0 ; i--) {
    console.log(listOfNames[i]);
}

    console.log("------------------");

//Remove all elements

listOfNames = [];
