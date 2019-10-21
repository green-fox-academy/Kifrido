'use strict';

import { Aircraft } from './aircraft'
import { F16 } from './F16'
import { F35 } from './F35'

export class AircraftCarrier{
    protected _listOfAircrafts: Aircraft[];
    protected _ammoStore: number;
    protected _healthPoint: number;
    protected _totalDamage: number;

    constructor(ammoStore: number = 0, healthPoint: number){
        this._ammoStore = ammoStore;
        this._listOfAircrafts = [];
        this._healthPoint = healthPoint;
    }

    public add(aircraft: Aircraft): void{
        this._listOfAircrafts.push(aircraft);
    }

    public fill (): void {
        try {
            if (this._ammoStore == 0) {
                throw 'error';
            } else {
                this._listOfAircrafts.forEach(element => {
                    if (this._ammoStore > 0 && element.isPriority() == true) {
                        this._ammoStore= element.refill(this._ammoStore);
                    };
                    if (this._ammoStore > 0 && element.isPriority() == false) {
                        this._ammoStore = element.refill(this._ammoStore);
                    };
                })
            }
        } catch (error) {
            console.log('The carrier has no ammo, no filling is possible!');
        } 
    }

    public getStatus (): void {
        if (this._healthPoint <= 0){
            console.log(`It's dead, Jim :(`);
        } else {
            console.log(`HP ${this._healthPoint}, Ammo Storage: ${this._ammoStore}, Total Damage: ${this._listOfAircrafts.reduce(function (totalDamage, element) {
                return totalDamage += element.fight()
            }, 0)}`);
            this._listOfAircrafts.forEach(element => element.getStatus());
        }
    }

    public fight (anotherCarrier: AircraftCarrier): void {
        anotherCarrier._healthPoint -= this._listOfAircrafts.reduce(function (totalDamage, element) {
            return totalDamage += element.fight()
        }, 0)
        this._listOfAircrafts.forEach(element => element.useAmmo());
        this.getStatus();
    }
}
