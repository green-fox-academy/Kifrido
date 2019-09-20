'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function linePlay(moveX: number, moveY: number, lineX: number, lineY: number, color: string){
    ctx.strokeStyle =color;
    ctx.beginPath();
    ctx.moveTo(moveX, moveY);
    ctx.lineTo(lineX, lineY);
    ctx.stroke();
}

let moveX3: number = canvas.width / 2;
let moveY3: number =  canvas.height;
let lineX3: number = canvas.width / 2;
let lineY3: number = canvas.height / 2;
let move: number = canvas.width / 20;
let lineCount: number = (canvas.width / 2) / move;

for (let i: number = 1; i <= lineCount; i++){ 
    linePlay(moveX3, moveY3, lineX3 + move, lineY3, 'green');
    moveY3 -= move;
    lineX3 += move;
}


