'use strict';


let form = document.querySelector("form");
let log = document.querySelector("#log");
let button = document.querySelector(".button");
let output;

form.addEventListener("change", function (event) {
    let data = new FormData(form);
    output = "";
    for (const entry of data) {
        output = entry[1];
    };
    log.innerText = output;
    if (output == "Dog" || output == "Cat") {
        document.querySelector(".signup").disabled = false;
    } else{
        document.querySelector(".signup").disabled = true;
    }
    if (output == "Yes") {
        document.querySelector(".cats").disabled = false;
    } else{
        document.querySelector(".cats").disabled = true;
    }
    event.preventDefault();
}, false);

button.addEventListener("click", function(){
    alert("Thank you, you've successfully signed up for cat facts");
})


