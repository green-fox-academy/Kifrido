'use strict';

/*We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.
Create a map with the following key-value pairs.
Product name (key)	Price (value)
Eggs	200
Milk	200
Fish	400
Apples	150
Bread	50
Chicken	550
Create an application which solves the following problems.
How much is the fish?
What is the most expensive product?
What is the average price?
How many products' price is below 300?
Is there anything we can buy for exactly 125?
What is the cheapest product?*/

let productDatabase: any = {
    'eggs' : 200,
    'milk' : 200, 
    'fish' : 400, 
    'apples' : 150,
    'bread' : 50,
    'chicken' : 550
}

let price: any = {
    max(array): number{
        let max: number = 0;
        for(let i: number = 0; i < Object.keys(array).length; i++){
            if(array[Object.keys(array)[i]] > max){
                max = array[Object.keys(array)[i]];
            }
        }
        return max;    
    }
}
let solution: number = price.max(productDatabase);
console.log(Object.keys(productDatabase).find(key => productDatabase[key] === solution));


let sumValues: any = (productDatabase) => Object.keys(productDatabase).reduce((acc, value) => acc + productDatabase[value], 0);

let average: number = sumValues(productDatabase) / Object.keys(productDatabase).length;

console.log(average);




let under300(array): number{
    let counter: number = 0;
    for(let i = 0; i < Object.keys(array).length; i++){
        if(array[Object.keys(array)[i]] < 300){
            counter++;
        }
    }
    return counter; 
},
let exactly125(array){
    let hundredTwentyFive: number = 0;
    for(let i = 0; i < Object.keys(array).length; i++){
        if(array[Object.keys(array)[i]] = hundredTwentyFive){
            hundredTwentyFive++;
        }
    }
    if(hundredTwentyFive > 0){
        console.log("There is something for 125");
    } else {
        console.log("There's nothing for 125");
    }      
},
}

console.log(`The fish is ${productDatabase.Fish}`);
console.log('The most expensive product costs ' + price.max(productDatabase));
console.log('The average product price is ' + price.average(productDatabase));
console.log(`We can buy ${price.under300(productDatabase)} products under 300.`)
price.exactly125(productDatabase);
console.log('The cheapest product\'s price is ' + price.min(product));

