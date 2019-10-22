'use strict';

//Add an item that says 'The Green Fox' to the asteroid list.

let newElement = document.createElement("li");
newElement.innerText = "The Green Fox";
document.getElementsByTagName("ul")[0].appendChild(newElement);

//Add an item that says 'The Lamplighter' to the asteroid list.

let newElement2 = document.createElement("li");
newElement2.innerText = "The Lamplighter";
document.getElementsByTagName("ul")[0].appendChild(newElement2);

//Add a heading saying 'I can add elements to the DOM!' to the .container.

let newElement3 = document.createElement("h1");
newElement3.innerText = "I can add elements to the DOM!";
document.getElementsByClassName("container")[0].appendChild(newElement3);

//Add an image, any image, to the container.

let newElement4 = document.createElement("img");
newElement4.src = "lion.jpg";
document.getElementsByClassName("container")[0].appendChild(newElement4);
