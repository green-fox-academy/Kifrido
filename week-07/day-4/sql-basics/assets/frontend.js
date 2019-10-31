'use strict';

let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/', true);


let listContainer = document.getElementsByTagName("ul")[0];
ourRequest.onload = function () {

    let ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
    for (let i = 0; i < ourData.length; i++) {
        let headLine = document.createElement("li");
        headLine.innerText = ourData[i].book_name;
        listContainer.appendChild(headLine);
    };
}
ourRequest.send();