'use strict';

import{ Flower } from './flower'
import { Tree } from './tree'
import { Plant } from './plant'

export class Garden{
    protected _plant: Plant[];

    constructor(){
        this._plant = [];
    }

    public addPlant(plant: Plant){
        this._plant.push(plant); 
    }

    public water(waterAmount : number){
        let counter: number = 0;
        for(let i: number = 0; i < this._plant.length; i++){
            if(this._plant[i].needsWater()){
            counter++;
            }
        }
        for(let j: number = 0; j < this._plant.length; j++){
            if(this._plant[j].needsWater())
            this._plant[j].water(waterAmount / counter);
        }
    }

    public status(){
        for(let k: number = 0; k < this._plant.length; k++){ 
            (this._plant[k].needsWater()) ? console.log('The ' + this._plant[k].color + ' ' + this._plant[k].getType() + ' needs water') : console.log('The ' + this._plant[k].color + ' '  + this._plant[k].getType()  + ' doesnt need water'); 
        }
    }
}

let garden: Garden = new Garden();



let firstFlower = new Flower('yellow');
let secondFlower = new Flower('blue');
let firstTree = new Tree('purple');
let secondTree = new Tree('orange');

garden.addPlant(firstFlower);
garden.addPlant(secondFlower);
garden.addPlant(firstTree);
garden.addPlant(secondTree);

garden.status();
garden.water(40);
garden.status();
garden.water(70);
garden.status();








