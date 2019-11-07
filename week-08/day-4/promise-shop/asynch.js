'use strict';

let promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

promise.then((response) => {
    console.log(response);
});

console.log("MAIN PROGRAM");
