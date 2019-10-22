'use strict';

//1)  Fill every paragraph with the last one's content.


let filledParagraph = document.querySelector(".animals").textContent;

let solution = document.querySelectorAll("p").forEach(function(element) {
    element.textContent = filledParagraph;
  });

  //2)  Do the same again, but you should keep the cat strong.

  let filledParagraph2 = document.querySelector(".animals").innerHTML;

  let solution2 = document.querySelectorAll("p").forEach(function(element) {
    element.innerHTML= filledParagraph2;
  });