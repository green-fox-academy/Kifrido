'use strict';

import { F35 } from './F35'
import { F16 } from './F16'

export class Aircraft{
    protected _type: string;
    protected _currentAmmunition: number = 0;
    protected _maxAmmunition: number;
    protected _baseDamage: number;
    protected _allDamage: number;

    constructor(type: string){
        this._type = type;
    }

    public fight(): number{
        let damageDealt = this._baseDamage * this._currentAmmunition;
        this._currentAmmunition = 0;
        return damageDealt;
    }

    public refill(num: number): number{
        this._currentAmmunition += num;
        let remainingAmmunition = 0;
        if(num > this._maxAmmunition || this._currentAmmunition == num){
            remainingAmmunition += num;
        }
        return remainingAmmunition;
    }

    public getType(): string{
        return this._type;
    }

    public getStatus(): string{
        return `Type ${this._type}, Ammo: ${this._currentAmmunition}, Base Damage: ${this._baseDamage}, All Damage: ${this._allDamage}`;
    }

    public isPriority(): boolean{
        if(this._type == 'F35'){
            return true;
        }else{
            return false;
        }
    }
}