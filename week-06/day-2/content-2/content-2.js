'use strict';

//1) replace the list items' content with items from this list:
//     ['apple', 'banana', 'cat', 'dog']


let newList = ['apple', 'banana', 'cat', 'dog'];

let placeHolder = document.querySelectorAll("li");

  for(let i = 0; i < newList.length; i++){
      //console.log(placeHolder[i]);
      placeHolder[i].innerText = newList[i];
  }

  //    2) change the <ul> element's background color to 'limegreen'
//     - use css class to change the color instead of the style property

document.getElementsByTagName('ul')[0].className = "limegreen"; 

