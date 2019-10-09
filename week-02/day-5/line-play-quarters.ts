'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
//Divide the canvas into 4/16/64 equal parts and repeat the line play pattern in each quarter

let minimalize: number = 2;

    function linePlay(moveX: number, moveY: number, lineX: number, lineY: number, color: string){
        ctx.strokeStyle =color;
        ctx.beginPath();
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineX, lineY);
        ctx.stroke();
    }

    let moveX: number = 0 / minimalize;
    let moveY: number = 0 / minimalize;
    let lineX: number = 0 / minimalize;
    let lineY: number = canvas.height / minimalize;
    let move: number = canvas.width / 20;
    let lineCount: number = canvas.height / move;

    for (let i: number = 1; i <= lineCount; i++){ 
        linePlay(moveX, moveY, lineX, lineY, '#87E18D');
        moveY += move / minimalize;
        lineX += move / minimalize;
    }


    let moveX2: number = canvas.width / minimalize;
    let moveY2: number = 0 / minimalize;
    let lineX2: number = canvas.width / minimalize;

    for (let i: number = 1; i <= lineCount; i++){ 
        linePlay(moveX2, moveY2, lineX2, lineY, '#BF69F5');
        lineY -= move / minimalize;
        moveX2 -= move / minimalize; 
    }

    for (let i: number = 1; i <= 4; i++){
        linePlay(moveX2, moveY2, lineX2, lineY, '#BF69F5');
        moveX += move;
        
    }


/*function line(x, y, a, b, color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
}

let start: number [] = []
let lineNumber: number = 32;
let multiplier: number = 2;
let quarterHeight = canvas.height / multiplier;
let quarterWidth = canvas.width / multiplier;

for(let j = 0; j < multiplier; j++){
    for(let k = 0; k < multiplier; k++){
        for(let i = 0; i < lineNumber; i++){
            line(i*quarterWidth/lineNumber+j*quarterWidth, 0+k*quarterHeight, quarterWidth+j*quarterWidth, i*quarterHeight/lineNumber+k*quarterHeight, "blue")
            line(0+j*quarterWidth, i*quarterHeight/lineNumber+k*quarterHeight, i*quarterWidth/lineNumber+j*quarterWidth, quarterHeight+k*quarterHeight, "magenta")
        }
    }
}*/
