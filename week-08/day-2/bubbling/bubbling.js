'use strict';

//Here is an image inspector, but the buttons are not implemented yet, that will
//be your task!
// - the nav buttons (up, down, left, right) move the background by 10px
// - the zoom buttons increase/decrease the image by 20%
// - attach only two event listeners to the nav element
//   - one for navigation
//   - one for zooming

let nav = document.querySelector("nav");
let img = document.querySelector(".img-inspector");
let x = 0;
let y= 0;
let currZoom = 200;

nav.addEventListener("click", function(element){
    if(element.target.getAttribute("data-action") == "move"){
        moveBackground(element.target.getAttribute('data-direction'));
    } else if(element.target.getAttribute("data-action") == "zoom"){
        zoomBackground(element.target.getAttribute('data-direction'));
    }
})

function moveBackground(direction){
    if(direction == "up"){y -= 10;}
    if(direction == "down"){y += 10;}
    if(direction == "left"){x -= 10;}
    if(direction == "right"){x += 10;}
    img.style.backgroundPosition = `${x}px ${y}px`;
}

function zoomBackground(direction){
    if(direction =="in"){currZoom += 20;}
    if(direction =="out"){currZoom -= 20;}
    img.style.backgroundSize = `${currZoom}%`;

}