'use strict';

//We are going to play with maps. Feel free to use the built-in methods where possible.

//Create an empty map where the keys are integers and the values are characters

let map = {
    
};

//Print out whether the map is empty or not

console.log(Object.keys(map).length <= 0);

//Add the following key-value pairs to the map

//Key	Value
//97	a
//98	b
//99	c
//65	A
//66	B
//67	C

map[97] = "a";
map[98] = "b";
map[99] = "c";
map[65] = "A";
map[66] = "B";
map[67] = "C";

//Print all the keys

console.log(Object.keys(map));

//Print all the values

let values: string[] = Object.keys(map).map(key => map[key]);

console.log(values);

//Add value D with the key 68

map[68] = "D";

//Print how many key-value pairs are in the map

console.log(Object.keys(map).length);

//Print the value that is associated with key 99

let valueOf99: string[] = Object.values(map[99]);
console.log(valueOf99);

//Remove the key-value pair where with key 97

delete map[97];

//Print whether there is an associated value with key 100 or not

console.log(map.hasOwnProperty('100'));

//Remove all the key-value pairs

map = {

};