'use strict';

// Write a program that prints apple after 3 seconds.


//simplest solution

/*let showApple = function(){
    console.log("apple");

    setTimeout(showApple, 3000);
}*/


//2. solution

/*setTimeout(function(){
    console.log("apple");
}, 3000);*/


//writing in the html

/*let showApple = function(){
    let container = document.querySelector('.apple');
    let word = document.createElement('p');
    word.innerText = "apple";
    container.appendChild(word);
}

setTimeout(showApple, 3000);*/

//using 2 functions

showApple(function () {
    console.log('apple');
});

function showApple(myFruit) {
    setTimeout(function () {
        myFruit();
    }, 3000);
}

