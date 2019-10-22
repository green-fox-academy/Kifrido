'use strict';

//Write the image's url to the console.
let url = document.getElementsByTagName("img")[0].src;
console.log(url);

//Replace the image with a picture of your favorite animal.
document.getElementsByTagName("img")[0].src = "lion.jpg";

//Make the link point to the Green Fox Academy website.

document.getElementsByTagName("a")[0].href = "https://www.greenfoxacademy.com/";

//Disable the second button.

document.getElementsByClassName("this-one")[0].disabled = true;

//Replace its text with 'Don't click me!'.

document.getElementsByTagName("button")[1].innerText = "Don't click me!";
