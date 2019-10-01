'use strict'

import { Instrument } from './instrument'
import { StringedInstrument } from './stringedinstruments'

export class BassGuitar extends StringedInstrument{

    constructor(numberOfString : number = 4){
        super('Bass Guitar', numberOfString);
    }

    public sound() : string{
        return "Duum-duum-duum";
    }
}
