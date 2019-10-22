'use strict';

//If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

let elementP = document.querySelectorAll("p")[3];
elementP.getAttribute("class") == "dolphin" ? document.querySelectorAll("p")[0].innerText = "pear" : console.log("");

//If the first p has an 'apple' class, replace cat's content with 'dog'

let elementApple = document.querySelectorAll("p")[0];
elementApple.getAttribute("class") == "apple" ? document.querySelectorAll("p")[2].innerText = "dog" : console.log("");

//Make apple red by adding a .red class

document.querySelectorAll("p")[0].classList +=' red';


//Make balloon less balloon-like (change its shape)

let baloon = document.querySelector (".balloon").style.borderRadius = "10%";

