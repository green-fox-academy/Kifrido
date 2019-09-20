'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLine(moveX: number, moveY: number, lineX: number, lineY: number) {
    ctx.beginPath();
    ctx.moveTo(moveX, moveY);
    ctx.lineTo(lineX, lineY);
    ctx.stroke();
}

function drawTriangle(startX: number, startY: number, length: number) {
    let endX: number = startX + length;
    let endY: number = canvas.height;


    drawLine(startX, startY, endX, endY); // first line 

    let startX2: number = endX;
    let startY2: number = endY;
    let endX2: number = (startX + endX) / 2;
    let endY2: number = (startY - (Math.sqrt(3) / 2 * (endX - startX))); 
   
    drawLine(startX2, startY2, endX2, endY2); // second line

    let startX3: number = endX2;
    let startY3: number = endY2;
    let endX3: number = startX;
    let endY3: number = startY;

    drawLine(startX3, startY3, endX3, endY3); // third line
}

let startX: number = 0;
let startY: number = canvas.height;
let length2: number = 20;

for (let i: number = 1; i <= canvas.width / length2; i++){
  drawTriangle(startX, startY, length2);
  startX += length2;
} // added first row

/**/for (let j: number = 1; j <=canvas.width / length2; j--){

}
