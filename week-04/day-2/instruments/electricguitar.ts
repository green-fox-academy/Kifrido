'use strict'

import { Instrument } from './instrument'
import { StringedInstrument } from './stringedinstruments'

export class ElectricGuitar extends StringedInstrument{
    
    constructor(numberOfString : number = 6){
        super('Electric Guitar', numberOfString);
    }

        public sound() : string{
            return "Twang";
        }
    
}