'use strict';

import { Aircraft } from './aircraft'
import { F16 } from './F16'
import { F35 } from './F35'

export class AircraftCarrier{
    protected _listOfAircrafts: Aircraft[];
    protected _ammoStore: number;
    protected _healthPoint: number;
    protected _totalDamage: number;

    constructor(ammoStore: number = 0){
        this._ammoStore = ammoStore;
        this._listOfAircrafts = [];
    }

    public add(aircraft: Aircraft): void{
        aircraft = new Aircraft('F16');
        this._listOfAircrafts.push(new Aircraft('F16'));
    }

    public fill(num: number, aircraft: Aircraft): void{
        if(this._ammoStore >= num){
            this._ammoStore -= num;
            aircraft.refill(num);
        }else if(this._ammoStore < num){
            if(aircraft.isPriority == true){
               aircraft.refill(num); 
            }
        }else{
            (this._ammoStore == 0){
                console.log('There is no ammo in store');
            }
        }
    }

    public fight(carrier: AircraftCarrier, aircraft: Aircraft){
        aircraft.fight();
        this._healthPoint -= this._totalDamage;

    }

    public getStatus(aircraft: Aircraft): string{
        if(this._healthPoint == 0){
            return "It's dead Jim :("
        }else{
        return `HP: ${this._healthPoint}, Aircraft count: ${this._listOfAircrafts.length}, Ammo Storage: ${this._ammoStore}, Total damage: ${this._totalDamage} \n Aircrafts: ${aircraft.getStatus}`
        }
    }
}