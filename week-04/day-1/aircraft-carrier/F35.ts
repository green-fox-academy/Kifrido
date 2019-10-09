'use strict'

import { Aircraft } from './aircraft'

export class F35 extends Aircraft{
    
    constructor(){
        super('F35');
        this._maxAmmunition = 12;
        this._baseDamage = 50;
    }
}