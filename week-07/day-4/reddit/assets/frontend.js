'use strict';


//show list of book titles

let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/', true);


let listContainer = document.getElementsByTagName("ul")[0];
ourRequest.onload = function () {

    let ourData = JSON.parse(ourRequest.responseText);
    for (let i = 0; i < ourData.length; i++) {
        let headLine = document.createElement("li");
        headLine.innerText = ourData[i].book_name;
        listContainer.appendChild(headLine);
    };
}
ourRequest.send();

//show full data

let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://localhost:3000/fulldata', true);
let tableContainer = document.getElementsByTagName("table")[0];
myRequest.onload = function () {
    let myData = JSON.parse(myRequest.responseText);
    for (let i = 0; i < myData.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("td");
        th.innerText = myData[i].book_name;
        tr.appendChild(th);
        tableContainer.appendChild(tr);
        let autName = document.createElement("td");
        autName.innerText = myData[i].aut_name;
        tr.appendChild(autName);
        tableContainer.appendChild(tr);
        let category = document.createElement("td");
        category.innerText = myData[i].cate_descrip;
        tr.appendChild(category);
        tableContainer.appendChild(tr);
        let publisher = document.createElement("td");
        publisher.innerText = myData[i].pub_name;
        tr.appendChild(publisher);
        tableContainer.appendChild(tr);
        let price = document.createElement("td");
        price.innerText = myData[i].book_price;
        tr.appendChild(price);
        tableContainer.appendChild(tr);
    };
}
myRequest.send();