'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let squareSize: number = 300;

let fillColor: string[] = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

function rainbow(squareSize: number, fillColor: string){
    ctx.fillStyle = fillColor;
    ctx.fillRect(canvas.width / 2 - squareSize / 2, canvas.height / 2 - squareSize / 2, squareSize, squareSize);
}


for (let j = 0; j < fillColor.length; j += 1) {
       rainbow(squareSize, fillColor[j]); 
       squareSize = squareSize -40;
    }
