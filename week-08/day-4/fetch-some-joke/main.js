'use strict';

let button = document.querySelector('button');
let container = document.querySelector('div');

button.addEventListener('click', fetchUserData);

function fetchUserData() {
    let p = document.createElement("p");
    container.appendChild(p);
    fetch('http://api.icndb.com/jokes/random')
        .then(response => response.json())
        .then(json => p.innerText = json.value.joke)
        .catch((error) => {
            console.log(error);
            console.log('Some error happened');
        })
};