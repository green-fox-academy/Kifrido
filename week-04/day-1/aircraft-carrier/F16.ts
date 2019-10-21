'use strict'

import { Aircraft } from './aircraft'

export class F16 extends Aircraft{
    
    constructor(){
        super();
        this._maxAmmunition = 8;
        this._baseDamage = 30;
    }

    public getType() : string {
        return "F16";
    }
}