'use strict';

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = '   - Buy milk\n';

let todoText2 = todoText.slice(0, 1) + "My todo:" + '\n' + todoText.slice(1);
let todoText3 = todoText2.slice(0, 22) + '\n' + "  - Download games" +  todoText2.slice(22);
let todoText4 = todoText3.slice(0, -1) + '\n' + '\t' + "- Diablo" +  todoText3.slice(-1);

console.log(todoText4);