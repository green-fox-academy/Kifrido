'use strict';

import { Vehicle } from './vehicle'
import { Flyable } from './flyable'

export class Helicopter extends Vehicle implements Flyable{

    constructor(type: string, speed: number, color: string){
        super(type, speed, color);
    }

    fly(): void{};
    land(): void{};
    takeOff(): void{};
}