'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`



/*let numList: number[] = [3, 4, 5, 6, 7];
numList.reverse();
console.log(numList);*/

let numList: number[] = [3, 4, 5, 6, 7]

for (let i = 0; i <= (numList.length / 2); i++) {
        let tempArray = numList[i];
        numList[i] = numList[numList.length - 1 - i];
        numList[numList.length - 1 - i] = tempArray;
    }
    console.log(numList);
