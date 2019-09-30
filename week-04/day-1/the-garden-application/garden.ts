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

    public water(waterAmount){
        for(let i: number = 0; i < this._plant.length; i++){
            
        }
    }
}

let garden: Garden = new Garden();

garden.addPlant;
garden.addPlant;

console.log(garden);







