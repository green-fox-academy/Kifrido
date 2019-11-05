'use strict';

//Create a simple HTML document with one button. 
//If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

let button = document.querySelector("button");
let body = document.querySelector("body");

button.addEventListener("click", function () {
    setTimeout(timer, 2000);
})

function timer(){
    let timer = document.createElement("p");
    timer.innerText = '2 seconds ellapsed';
    body.appendChild(timer);
}