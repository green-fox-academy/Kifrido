'use strict';

export abstract class Vehicle{
    protected _type : string;
    protected _speed : number;
    protected _color : string;

    constructor(type: string, speed: number, color: string){
        this._type = type;
        this._speed = speed;
        this._color = color;
    }
}
