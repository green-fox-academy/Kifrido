'use strict';

let map = {
    
};

console.log(Object.keys(map).length <= 0);

map[97] = "a";
map[98] = "b";
map[99] = "c";
map[65] = "A";
map[66] = "B";
map[67] = "C";

console.log(Object.keys(map));

let values = Object.keys(map).map(key => map[key]);

console.log(values);

map[68] = "D";
