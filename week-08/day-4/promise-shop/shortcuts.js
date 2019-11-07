'use strict';

//
let promise = Promise.resolve('resolved');

 promise.then((response) => {
  console.log(response);
});

//reject

let promise1 = Promise.reject(new Error('REJECTED!'));

  
  function onReject (error) {
    console.log(error.message);
  }

  promise1.catch(onReject);