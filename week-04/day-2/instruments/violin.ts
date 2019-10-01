'use strict'

import { Instrument } from './instrument'
import { StringedInstrument } from './stringedinstruments'

export class Violin extends StringedInstrument{

    constructor(numberOfString : number = 4){
        super('Violin', numberOfString);
    }

    public sound() : string{
        return "Screech";
    }
}