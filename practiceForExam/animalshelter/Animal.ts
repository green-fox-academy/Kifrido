'use strict';

export abstract class Animal{
    protected _ownerName: string;
    protected _isHealthy: boolean;
    protected _healCost: number;
    protected _name: string;

    constructor(name: string, healCost: number){
        this._name = name;
        this._healCost = healCost;
        this._isHealthy = false;
    }

    public getOwnerName(): string{
        return this._ownerName;
    }

    public set ownerName(ownerName: string){
        this._ownerName = ownerName;
    }

    public abstract getHealCost(): number;
    

    public isHealthy(): boolean{
        return this._isHealthy;
    }

    public abstract getName(): string;

    public heal(): void{
        this._isHealthy = true;
    }

    public isAdoptable(): boolean{
        if(this._isHealthy == true){
            return true;
        }else{
            return false;
        }
    }

    public toString(): void{
        console.log(`${this._name}` + (this.isHealthy() ? " is healthy" : " is not healthy (healing would cost:" + this._healCost + "€)") + ` and` +  (this.isAdoptable() ? " is adoptable" : " is not adoptable"));
    }
}