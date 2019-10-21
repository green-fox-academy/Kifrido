'use strict';

import { Animal } from './Animal'

export class Cat extends Animal{
    
    constructor(name?: string){
        super(name ? name : "cat", Math.floor(Math.random() * 6));
    }

    public getName() : string {
        return this._name;
    }

    public getHealCost(): number{
        return this._healCost;
    }
}