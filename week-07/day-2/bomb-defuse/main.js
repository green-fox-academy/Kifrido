'use strict';

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

let button = document.querySelector('button');

let event = button.addEventListener("click", function () {
    this.innerText = "Bomb defused";
    clearTimeout(bomb);
    clearInterval(countDown);
})

let bomb = setTimeout(function () {
    button.innerText = "Bomb exploded";
    button.disabled = true;
}, 10000);


let display = document.querySelector('.display');
let i = 1;
let countDown = setInterval(function(){ 
    if(display.innerText == 1){
        clearInterval(countDown);
    }
    display.innerText = display.innerText - i;
}, 1000)
