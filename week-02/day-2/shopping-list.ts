'use strict';

/*We are going to represent a shopping list in a list containing strings.

Create a list with the following items.
Eggs, milk, fish, apples, bread and chicken
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list?*/

let shoppingList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];


let includes = (shoppingList.includes('milk') ? console.log('yes') : console.log('no'));
let includes2 = (shoppingList.includes('bananas') ? console.log('yes') : console.log('no'));