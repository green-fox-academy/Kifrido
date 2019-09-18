'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLine(x: number, y: number){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}

let xStart: number = 0;
let yStart: number = 0;


for (let x: number = 0; x <= canvas.width; x += 20){
    
    drawLine(x, yStart);
}

for (let y: number = 0; y <= canvas.height; y += 20){
    drawLine(xStart, y);
}

let x2: number = canvas.width;
let y2: number = canvas.height;

for (let x: number = 0; x <= canvas.width; x += 20){
    
    drawLine(x, canvas.height);
}

for (let y: number = 0; y <= canvas.height; y += 20){
    drawLine(canvas.width, y);
}