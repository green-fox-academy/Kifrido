'use strict';

//1) Select the rectangle by the ID: "very-rectangle"
//2) Change the rectangle's position to x:50, y:50
//3) Change its fill to tomato

let selected = document.querySelector('#very-rectangle');

selected.setAttribute('x', 50);
selected.setAttribute('y', 50);
selected.style.fill = 'tomato';