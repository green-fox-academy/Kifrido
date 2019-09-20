'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
//Divide the canvas into 4/16/64 equal parts and repeat the line play pattern in each quarter

function linePlay(moveX: number, moveY: number, lineX: number, lineY: number, color: string){
    ctx.strokeStyle =color;
    ctx.beginPath();
    ctx.moveTo(moveX, moveY);
    ctx.lineTo(lineX, lineY);
    ctx.stroke();
}

/*let moveX: number = 0;
let moveY: number = 0;
let lineX: number = 0;
let lineY: number = canvas.height;
let move: number = canvas.width / 20;

for (let i: number = 1; i <= canvas.height; i++){ 
    linePlay(moveX + move, moveY, lineX, lineY);
    moveX += move;
    lineY -= move;*/



let moveX: number = 0;
let moveY: number = 0;
let lineX: number = 0;
let lineY: number = canvas.height;
let move: number = canvas.width / 20;
let lineCount: number = canvas.height / move;

for (let i: number = 1; i <= lineCount; i++){ 
    linePlay(moveX, moveY, lineX, lineY, '#87E18D');
    moveY += move;
    lineX += move;
}


let moveX2: number = canvas.width;
let moveY2: number = 0;
let lineX2: number = canvas.width;

for (let i: number = 1; i <= lineCount; i++){ 
    linePlay(moveX2, moveY2, lineX2, lineY, '#BF69F5');
    lineY -= move;
    moveX2 -= move; 
}
