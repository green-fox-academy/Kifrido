'use strict';

//1) Subscibe to keyup events on the global window object
//2) Console log the event object and peek inside
//3) Display the last pressed key's code as "Last pressed key code is: __"


window.addEventListener("keyup", function(element){
    console.log(element);
    let h1 = document.querySelector('h1');
    h1.innerText = `Last pressed key code is: ${element.keyCode}`
    document.body.appendChild(h1);
})