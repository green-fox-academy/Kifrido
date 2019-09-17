'use strict';

let listOfNames: string[] = [];
    console.log(listOfNames.length);

    listOfNames.push ("William");

console.log(listOfNames.length > 0);


listOfNames.push ("John", "Amanda");

console.log(listOfNames.length);

console.log(listOfNames[2]);

console.log("------------------");

listOfNames.forEach(element => {
    console.log(element);
   
 });

 console.log("------------------");

 listOfNames.forEach(function(e, i) {
     console.log(i  + 1 + '.' + e);
    });

    console.log("------------------");

    let removeItem = listOfNames.splice (1, 1);

    console.log(listOfNames);
 
    console.log("------------------");

    for (let i = listOfNames.length - 1; i >=0 ; i--) {
        console.log(listOfNames[i]);
    }

    console.log("------------------");

    listOfNames = [];
