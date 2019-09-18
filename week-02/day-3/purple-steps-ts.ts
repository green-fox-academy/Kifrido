'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let xStart: number = 10;
let yStart: number = 10;
let xSize: number = 10;
let ySize: number = 10;


for (let j = 1; j < 20; j++) {
    ctx.fillStyle = '#B145F3';
    ctx.fillRect(xStart, yStart, xSize, ySize);
    ctx.strokeRect(xStart, yStart, xSize, ySize);
    ctx.translate(10, 10);
    }