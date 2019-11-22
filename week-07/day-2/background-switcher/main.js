'use strict';

// 1: Create a function that updates the <body> elements background-image's css property
// 2: The image value should be https://loremflickr.com/g/1280/800/hungary/
// 3: Make sure every time you refresh the image, you add a cachebuster
// WTF is a cachebuster?
// http://www.adopsinsider.com/ad-ops-basics/what-is-a-cache-buster-and-how-does-it-work/
// 4: Create a timer function that refreshes the background every 5 seconds


	
let cachebuster = Math.round(new Date().getTime() / 1000);
let body = document.querySelector('body');

function changeBackground (){
    body.style.backgroundImage = "url(https://loremflickr.com/g/1280/800/hungary/)";
}

changeBackground();