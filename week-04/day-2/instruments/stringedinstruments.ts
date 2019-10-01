'use strict'

import { Instrument } from './instrument'

export abstract class StringedInstrument extends Instrument{
    protected _numberOfString: number;

    constructor(name: string, numberOfString: number){
        super(name);
        this._numberOfString = numberOfString;
    }

    public abstract sound() : string;

    public play() : void{
        console.log(this._name + ", a " + this._numberOfString + "-stringed instrument that goes " + this.sound() + ".");
    }
}
