'use strict';

// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

function putSaturn(list){
    list = planetList.slice(0, 46) + "Saturn" + planetList.slice(10);
    return list;
}

console.log(putSaturn(planetList));

export = putSaturn;