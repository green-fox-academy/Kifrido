'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


/*for (let i: number = 0; i <= lineCount; i++) {
    for (let j: number = 0; j <= lineCount - i; j++) {
      console.log('*');
    }
    {console.log(\n);
} 
}*/

for (let i = 1; i <= lineCount; i++) {
  let row = '';

  for (let j = 1; j <= i; j++) {
    row += '*';
  }

 { console.log(row);
}
}

