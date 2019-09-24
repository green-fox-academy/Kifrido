'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function dividedByZero(x: number) {
    
  try {
      if(x == 0) {
          throw "error";
      } else {(console.log (10 / x));
    }
}
    catch(error) {
        console.log('fail');
    } 
  } 

  dividedByZero(10);
  dividedByZero(0);