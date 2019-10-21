'use strict';

import { F35 } from './F35'
import { F16 } from './F16'
import { AircraftCarrier } from './aircraft-carrier'

export abstract class Aircraft{
    protected _type: string;
    protected _currentAmmunition: number = 0;
    protected _maxAmmunition: number;
    protected _baseDamage: number;

    public fight(): number{
        let damageDealt = this.getDamageDealt();
        this._currentAmmunition = 0;
        return damageDealt;
    }

    public getDamageDealt(): number{
        return this._baseDamage * this._currentAmmunition;
    }

    public refill (ammoLoaded: number): number {
        if (ammoLoaded + this._currentAmmunition > this._maxAmmunition){
            this._currentAmmunition = this._maxAmmunition;
            return ammoLoaded - this._maxAmmunition;
        } else if (ammoLoaded + this._currentAmmunition < this._maxAmmunition) {
            this._currentAmmunition += ammoLoaded;
            return 0;
        };
    };

    public useAmmo (): void {
        this._currentAmmunition = 0;
    }

    public abstract getType(): string;

    public getStatus(){
        console.log(`Type ${this.getType()}, Ammo: ${this._currentAmmunition}, Base Damage: ${this._baseDamage}, All Damage: ${this.getDamageDealt()}`);
    }

    public isPriority(): boolean{
        if(this._type == 'F35'){
            return true;
        }else{
            return false;
        }
    }
}