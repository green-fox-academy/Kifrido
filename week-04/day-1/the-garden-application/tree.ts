'use strict';

import{ Flower } from './flower'
import { Plant } from './plant'
import {Garden} from './garden'

export class Tree extends Plant{

    constructor (color: string){
        super(0, 10, 0.4, color);
    }

    public getType() : string {
        return "tree";
    }
}