'use strict'

import { Aircraft } from './aircraft'

export class F35 extends Aircraft{
    
    constructor(){
        super();
        this._maxAmmunition = 12;
        this._baseDamage = 50;
    }

    public getType() : string {
        return "F35";
    }
}