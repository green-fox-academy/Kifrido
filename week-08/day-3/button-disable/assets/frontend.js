'use strict';

let buttonForCats = document.querySelector('.cats');
let buttonForSignup = document.querySelector('.signup');
let button = document.querySelector('.button');
let dog = document.querySelector('[value=Dog]');
let cat = document.querySelector('[value=Cat]');
let fish = document.querySelector('[value=Viktor]');
let yes = document.querySelector('[value=Yes]');
let no = document.querySelector('[value=No]');
let pets = document.querySelector('.pets');
let facts = document.querySelector('.facts');
let form = document.querySelector('form');

pets.addEventListener('click', (event) => {
	cat.checked || dog.checked ? buttonForSignup.disabled = false : buttonForSignup.disabled = true;
});

facts.addEventListener('click', (event) => {
	yes.checked ? buttonForCats.disabled = false : buttonForCats.disabled = true;
});

form.addEventListener('click', (event) => {
	if(fish.checked && no.checked){
        buttonForSignup.disabled = false;  
        alert(`Sigh, we still added you to the cat facts list`);
    } else {buttonForCats.disabled = true;}
});

button.addEventListener('click', (event) => {
	alert(`Thank you, you've successfully signed up for cat facts`);
});