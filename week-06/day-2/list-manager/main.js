'use strict';

//1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
//2, Achive the same design by css
//3, Try not to use css classes
//4, Add some functionality to the buttons
//    - If "Up" is clicked the selection should move up by one
//    - If "Down" is clicked the selection should move down by one
//    - If "X" is clicked the selected item should be removed and the first item should be selected
//    - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
//5, Check all the edge cases, no error should be printed to the console

let body = document.querySelector('body');

//creating left box

let leftBox = document.createElement('ul');
leftBox.setAttribute("class", "box left");
body.appendChild(leftBox);
let itemList = ["bread", "milk", "orange", "tomato"];
for(let i = 0; i < itemList.length; i++){
    let items = document.createElement('li');
    items.innerHTML = itemList[i];
    if(i == 0){
        items.setAttribute("class", "highlighted");
    }
    leftBox.appendChild(items);
}

//creating middle box

let buttons = document.createElement("nav");
buttons.setAttribute("class", "button");
body.appendChild(buttons);
let commands = ["Up", ">", "X", "Down"];
let funcs = ["up()", "add()", "remove()", "down()"];
for (let i = 0; i < commands.length; i++){
    let node = document.createElement("button");
    node.setAttribute("onclick", funcs[i]);
    node.innerHTML = commands[i];
    buttons.appendChild(node);
}

//creating right box

let rightBox = document.createElement('ul');
rightBox.setAttribute("class", "box right");
body.appendChild(rightBox);

//adding functions

//down

let down = () => {
    let counter = document.getElementsByClassName("box left")[0].childElementCount;
    let listItems = document.getElementsByClassName("box left")[0].childNodes;
    for(let i = 0; i < counter; i++){
        if(listItems[i].getAttribute("class") == "highlighted"){
            if(i == counter - 1){
                listItems[i].removeAttribute("class");
                listItems[0].setAttribute("class", "highlighted");
                i = counter;
            }else {
                listItems[i].removeAttribute("class"); 
                listItems[i + 1].setAttribute("class", "highlighted");
                i = counter;
            }
        }
    }
}

//up

let up = () => {
    let counter = document.getElementsByClassName("box left")[0].childElementCount;
    let listItems = document.getElementsByClassName("box left")[0].childNodes;
    for(let i = 0; i < counter; i++){
        if(listItems[i].getAttribute("class") == "highlighted"){
            if(i == 0){
                listItems[i].removeAttribute("class");
                listItems[counter - 1].setAttribute("class", "highlighted");
                i = counter;
            }else {
                listItems[i].removeAttribute("class"); 
                listItems[i - 1].setAttribute("class", "highlighted");
                i = counter;
            }
        }
    }
}

//remove

let remove = () => {
  let toRemove = document.getElementsByClassName("highlighted")[0];
  let parent = toRemove.parentNode;
  parent.removeChild(toRemove);
  document.getElementsByClassName("box left")[0].childNodes[0].setAttribute ("class", "highlighted");
}


//add

let add = () => {
let toAdd = document.getElementsByClassName("highlighted")[0];
let parent = document.getElementsByClassName("box right")[0];
remove();
toAdd.removeAttribute("class");
parent.appendChild(toAdd);
}

