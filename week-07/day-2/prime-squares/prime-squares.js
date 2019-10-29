'use strict';

//   1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
//   2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
//   3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored

let container = document.querySelector('section');
let i = 1;
let myInterval = setInterval(function () {
    let divs = document.createElement('div');
    divs.innerText = i + 1;
    container.appendChild(divs);
    if (isItPrime(i)) {
        document.querySelectorAll('div')[i].setAttribute('class', 'prime');
    } else {
        document.querySelectorAll('div')[i].setAttribute('class', 'not-prime');
    }
    i++;
    if (i > 99) {
        clearInterval(myInterval);
    }
}, 100);



function isItPrime(value) {
    let isItPrime = true;
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            isItPrime = false;
        }
    }
    return isItPrime;
}

