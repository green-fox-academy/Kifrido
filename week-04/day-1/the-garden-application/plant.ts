'use strict';

import{ Flower } from './flower'
import { Tree } from './tree'
import { Garden } from './garden'

export class Plant{
    protected _waterAmount: number;
    protected _thirstLevel: number;
    protected _absorbAbility: number;
    protected _color: string;

    constructor(waterAmount: number, thirstLevel: number, absorbAbility: number, color: string){
        this._waterAmount = waterAmount;
        this._thirstLevel = thirstLevel;
        this._absorbAbility = absorbAbility
        this._color = color;
    }
        public set waterAmount(waterAmount: number){
            this._waterAmount = 0;  
          }

        public get waterAmount() : number {
            return this._waterAmount;  
          }

          public thirstLevel() : void{
            (this._waterAmount < this._thirstLevel) ? console.log('needs water') : console.log('doesnt need water');
          }
}