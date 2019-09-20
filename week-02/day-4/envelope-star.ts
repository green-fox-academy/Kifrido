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

ctx.strokeStyle ='#83E088';
ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height);
ctx.lineTo(canvas.width / 2, 0);
ctx.stroke();

let moveX1: number = canvas.width / 2;
let moveY1: number =  canvas.height;
let lineX1: number = canvas.width / 2;
let lineY1: number = canvas.height / 2;
let move: number = canvas.width / 20;
let lineCount: number = (canvas.width / 2) / move;

for (let i: number = 1; i <= lineCount; i++){ 
    linePlay(moveX1, moveY1, lineX1 + move, lineY1, '#83E088');
    moveY1 -= move;
    lineX1 += move;
} 

let moveX3: number = canvas.width / 2;
let moveY3: number =  canvas.height / 2;
let lineX3: number = canvas.width / 2;
let lineY3: number = 0;


for (let i: number = 1; i <= lineCount; i++){ 
    linePlay(moveX3 + move, moveY3, lineX3, lineY3, '#83E088');
    moveX3 += move;
    lineY3 += move;
}



let moveX2: number = canvas.width / 2;
let moveY2: number =  canvas.height / 2;
let lineX2: number = canvas.width / 2;
let lineY2: number = 0;


for (let i: number = 1; i <= lineCount; i++){ 
    linePlay(moveX2 - move, moveY2, lineX2, lineY2, '#83E088');
    moveX2 -= move;
    lineY2 += move;
} 


let moveX4: number = canvas.width / 2;
let moveY4: number =  canvas.height;
let lineX4: number = canvas.width / 2;
let lineY4: number = canvas.height / 2;


for (let i: number = 1; i <= lineCount; i++){ 
    linePlay(moveX4, moveY4, lineX4 - move, lineY4, '#83E088');
    moveY4 -= move;
    lineX4 -= move;
} 