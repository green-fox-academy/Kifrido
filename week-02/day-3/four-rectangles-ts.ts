'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


let x: number = 40;
let y: number = 40;
let m: number = 10;
let n: number = 10;
let colors: string[] = ['Red', 'Orange', 'Yellow', 'Green'];


for (let j = 0; j < colors.length; j += 1) {
       ctx.fillStyle = colors[j];
       ctx.fillRect(x, y, m + j * 20, n  + j * 20);
    ctx.translate(60, 60);
    }

