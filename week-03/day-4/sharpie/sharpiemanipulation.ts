'use strict';

import { Sharpie } from './sharpie';
import { SharpieSet } from './sharpie-set';

//Reuse your Sharpie class
//Create SharpieSet class
//it contains a list of Sharpie
//countUsable() -> sharpie is usable if it has ink in it
//removeTrash() -> removes all unusable sharpies

let sharpieFirst = new Sharpie('red', 20, 100);
let sharpieSecond = new Sharpie('blue', 30, 0);

let listOfSharpies: Sharpie[] = [sharpieFirst, sharpieSecond];


let sharpieset1 = new SharpieSet(listOfSharpies);
console.log(listOfSharpies);
sharpieset1.removeTrash();
console.log(listOfSharpies);
sharpieset1.countUsable();
console.log(sharpieset1.countUsable());

