'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let createCandy = document.querySelector(".create-candies");
let candies = document.querySelector(".candies");
let buyLollipops = document.querySelector(".buy-lollypops");
let lollipops = document.querySelector(".lollypops");
let candiesPerSecond = document.querySelector(".speed");
let candyRain = document.querySelector(".candy-machine");
candies.innerHTML = 900;
lollipops.innerHTML = "🍭";



createCandy.addEventListener("click", function () {
    candies.innerHTML++;
})

buyLollipops.addEventListener("click", function () {
    if (candies.innerHTML >= 100){
        candies.innerHTML -= 100;
        lollipops.innerHTML += "🍭";
    }
})

let myInterval = setInterval(function () {
    if (lollipops.innerHTML.length % 10 == 0 && lollipops.innerHTML.length !==0) {
        candiesPerSecond.innerHTML++;
        candies.innerHTML++;
      }
    if (candies.innerHTML > 10000) {
        console.log("I won");
        clearInterval(myInterval);
    }
}, 1000);

candyRain.addEventListener("click", function () {
	candiesPerSecond.innerHTML = parseInt((candiesPerSecond.innerHTML) * 10)
});

setInterval(() => {
	candies.innerHTML = parseInt(candies.innerHTML) + Math.floor(lollipops.innerHTML.length / 20) * candiesPerSecond.innerHTML;

}, 1000);