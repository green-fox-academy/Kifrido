'use strict'

import { Aircraft } from './aircraft'

export class F16 extends Aircraft{
    
    constructor(){
        super('F16');
        this._maxAmmunition = 8;
        this._baseDamage = 30;
    }
}