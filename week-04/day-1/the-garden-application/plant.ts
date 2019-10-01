'use strict';

import{ Flower } from './flower'
import { Tree } from './tree'
import { Garden } from './garden'

export abstract class Plant{
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

        public get color() : string {
            return this._color;  
        }

        public abstract getType(): string; 
        
        public get thirstLevel() : number{
          return this._thirstLevel;  
      }

      public needsWater() : boolean{
       return this._thirstLevel >= this._waterAmount
      }

      public water(waterAmount : number){
            this._waterAmount += waterAmount * this._absorbAbility;        
        }
}
