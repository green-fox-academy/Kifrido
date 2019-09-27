'use strict';

import { Sharpie } from './sharpie';




class SharpieSet{
    private _sharpieList: Sharpie[] = [];


    constructor(sharpieList){
        this._sharpieList = sharpieList;
    }

    countUsable(): number {
        let counter: number = 0;
        for (let i: number = 0; i < this._sharpieList.length; i++){
            if(this._sharpieList[i].inkAmount > 0){
            counter++;
            }
        return counter;
        }
    }


    removeTrash(): void {
        for (let j: number = 0; j < this._sharpieList.length; j++){
            if(this._sharpieList[j].inkAmount == 0){
                this._sharpieList.splice(j, 1);
            }
        }
    }
}

export { SharpieSet };