'use strict';

//Create an event listener which logs the current timestamp to the console once the button is clicked.
//      When the button is clicked for the second or any other times no event listener should be called.
//      Try to solve this two different ways.
//      hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

let button = document.querySelector("button");


//first solution - disable button
button.addEventListener("click", function(element){
    console.log(element.timeStamp);
    button.setAttribute("disabled", "true");
})

//second solution: button disappears

/*button.addEventListener("click", function(element){
    console.log(element.timeStamp);
    let parent = document.querySelector("body");
    parent.remove("button");
})*/