'use strict';

//Create a simple HTML document with one button.
//If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
//5 seconds elapsed and clicked 3 times
//If the user starts clicking before the first 5 seconds, nothing should be printed

let button = document.querySelector("button");
let body = document.querySelector("body");

window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(clicking, 5000);
});

function clicking() {
    button.addEventListener("click", function (event) {
        if (event.detail === 3) {
        let timer = document.createElement("p");
        timer.innerText = '5 seconds elapsed and clicked 3 times';
        body.appendChild(timer);
        }
    })
}