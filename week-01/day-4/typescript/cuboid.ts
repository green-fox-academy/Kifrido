'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

const a: number = 10;
const b: number = 10;
const c: number = 10;
console.log('Surface Area: ' + (2 * (a * b + b * c + c * a)));
console.log('Volume: ' + a * b * c);
