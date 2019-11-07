'use strict';

first().then(second).then(console.log);

/*
let firstPromise = first();

let secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);*/