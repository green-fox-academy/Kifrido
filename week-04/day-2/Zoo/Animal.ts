'use strict'

export abstract class Animal{
    protected _name: string;
    protected _age: number;
    protected _gender: string;

    constructor(name: string, age?: number, gender?: string){
        this._name = name;
        this._age = age != undefined ? age : 0;
        this._gender = gender != undefined ? gender : "male";
    }

    public getName() : string{
        return this._name;
    }

    public getAge() : number{
        return this._age;
    }

    public abstract breed() : string;
}