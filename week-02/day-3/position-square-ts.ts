'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(xStart: number, yStart: number){
    ctx.fillRect(xStart, yStart, 50, 50);
}


let step: number = 50;

for (let i: number = 1; i < 4; i ++){
    drawSquare(step, 20); 
    step = step +60;
}