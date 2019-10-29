'use strict';

// Write a program that prints apple after 3 seconds.

/*let showApple = function(){
    console.log("apple");

    setTimeout(showApple, 3000);
}*/

/*setTimeout(function(){
    console.log("apple");
}, 3000);*/

let showApple = function(){
    let container = document.querySelector('.apple');
    let word = document.createElement('p');
    word.innerText = "apple";
    container.appendChild(word);
}
setTimeout(showApple, 3000);

