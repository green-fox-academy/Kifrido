'use strict';

import { Animal } from './Animal'

export class Parrot extends Animal{
    
    constructor(name?: string){
        super(name ? name : "parrot", Math.floor(Math.random() * 6) + 4);
    }

    public getName() : string {
        return this._name;
    }

    public getHealCost(): number{
        return this._healCost;
    }
}