'use strict';

import { Car } from './Car';

class Station{
    private _gasAmount: number;

    constructor(gasAmount: number){
        this._gasAmount = gasAmount;
    }

    refill(car: Car): void{
        car.gasAmount += car.capacity;
        this._gasAmount -= car.capacity;
    }

    public get gasAmount(): number{
        return this._gasAmount;
    }
}

export { Station };