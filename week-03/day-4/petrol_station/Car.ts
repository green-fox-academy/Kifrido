'use strict';

import { Station } from './Station';

class Car{
    private _gasAmount: number;
    private _capacity: number;

    constructor(gasAmount: number = 0, capacity: number = 100){
        this._gasAmount = gasAmount;
        this._capacity = capacity;
    }

    public get capacity(): number{
        return this._capacity;
    }

    public set gasAmount(gasAmount: number){
        this._gasAmount = gasAmount;
    }

    public get gasAmount(): number{
        return this._gasAmount;
    }

}

export { Car };