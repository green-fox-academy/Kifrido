'use strict';

import { Cat } from "./cat";
import { Dog } from "./dog";
import { Parrot } from "./parrot";
import { Animal } from "./Animal";
import { AnimalShelter} from "./Animal-shelter"

let cat = new Cat();
let dog = new Dog();
let parrot = new Parrot();
let cirmi = new Cat('cirmi');
let animalshelter = new AnimalShelter();

cirmi.toString();
cirmi.heal();
animalshelter.addAdopter('whatever');
animalshelter.rescue(dog);
animalshelter.rescue(cirmi);
animalshelter.toString();
animalshelter.earnDonation(50);
animalshelter.toString();
