'use strict';

//On the click of the button,
//Count the items in the list
//And display the result in the result element.

const button = document.querySelector('button');
const parent = document.querySelector('ul');
const countElements = () => {
let result = document.querySelector('.result');
let count = parent.childElementCount;
result.innerHTML = count;
};
button.addEventListener('click', countElements);