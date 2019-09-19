'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, canvas.width, canvas.height);


function starryNight(position1: number, position2: number, colors: string){
       ctx.fillStyle = colors;
       ctx.fillRect(position1, position2, 5, 5);
    }

for(let i: number = 0; i < Math.random() * 200; i++){
    let colors: number = Math.floor(Math.random() * 255);
    starryNight(Math.random() * canvas.width, Math.random() * canvas.height, `rgb(${colors},${colors},${colors})`);
}

  



