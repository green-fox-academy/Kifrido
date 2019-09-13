'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables


let dayInSeconds: number = 60 * 60 * 24;
let currentTime: number = 14 * 60 * 60 + 34 * 60 + 42; 

let remainingSeconds: number = dayInSeconds - currentTime;
console.log(remainingSeconds);