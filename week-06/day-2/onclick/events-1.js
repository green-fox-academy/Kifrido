'use strict';

//Turn the party on and off by clicking the button. (the whole page)

let button = document.querySelector('button');
let body = document.querySelector('body');

button.onclick = () => {
	body.getAttribute('class') != 'party' ? body.setAttribute('class', 'party') : body.setAttribute('class', '');
}