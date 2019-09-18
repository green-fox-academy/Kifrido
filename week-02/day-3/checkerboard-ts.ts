'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


let y_width: number = 10;
let x_height: number = 10;

for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
        if (x % 2 === 0 && y % 2 === 1 || x % 2 === 1 && y % 2 === 0) {
            ctx.fillRect(y * y_width, x * x_height, y_width, x_height);
          }
    }
  }