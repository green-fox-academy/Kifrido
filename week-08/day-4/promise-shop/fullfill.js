'use strict';

let promise = new Promise(function (fulfill, reject) {
    setTimeout(function(){
        fulfill('FULFILLED!');
    }, 300);
  });

 promise.then((response) => {
  console.log(response);
});