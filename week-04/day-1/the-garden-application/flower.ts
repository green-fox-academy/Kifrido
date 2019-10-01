'use strict';

import{ Tree } from './tree'
import { Plant } from './plant'
import {Garden} from './garden'

export class Flower extends Plant{
   
    constructor (color: string){
        super(0, 5, 0.75, color);
    }

    public getType() : string {
        return "flower";
    }
}
