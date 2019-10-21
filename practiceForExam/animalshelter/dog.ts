'use strict';

import { Animal } from './Animal'

export class Dog extends Animal{
    
    constructor(name?: string){
        super(name ? name : "dog", Math.floor(Math.random() * 7) + 1);
    }

    public getName() : string {
        return this._name;
    }

    public getHealCost(): number{
        return this._healCost;
    }
}