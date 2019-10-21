'use strict';

import { Animal } from './animal';

//Reuse your Animal class
//Create a Farm class
//it has list of Animals
//it has slots which defines the number of free places for animals
//breed() -> creates a new animal if there's place for it
//slaughter() -> removes the least hungry animal

class Farm{
    private _listOfAnimals: Animal[] = [];
    private _slots: number;

    constructor(listOfAnimals: Animal){
    this._listOfAnimals = listOfAnimals;
    }

    public get listOfAnimals(): Animal{
        return this._listOfAnimals
    }

    public breed(): void{
        for (let i: number = 0; i < this._listOfAnimals.length; i++){
            if (this._slots > 0){
                this._listOfAnimals.push[i]
            }
        }
    }

   /* public slaughter(){
        for (let j: number = 0; j < this._listOfAnimals.length; j++){
            if (){
            this._listOfAnimals.splice(j, 1);
            }
        }
    }*/
}

let animals = new Animal(listOfAnimals);

console.log();