'use strict';

import { Animal } from "./Animal";

export class AnimalShelter{
    private _budget: number;
    private _listOfAnimals: Animal[];
    private _listOfAdopters: string[];

    constructor(budget: number = 50){
        this._budget = budget;
        this._listOfAnimals = [];
        this._listOfAdopters = [];
    }

    public rescue(animal: Animal) : number{
        this._listOfAnimals.push(animal);
        return this._listOfAnimals.length;
    }

    public heal(animal: Animal): number{
        let healedAnimals: number = 0;
        for(let i: number = 0; i < this._listOfAnimals.length; i++){
            if(this._budget > this._listOfAnimals[i].getHealCost() && this._listOfAnimals[i].isHealthy() == false){
                this._listOfAnimals[i].heal();
                this._budget -= this._listOfAnimals[i].getHealCost();
                healedAnimals++;
                break;
            }
        }
        return healedAnimals;
    }

    public addAdopter(ownerName: string): void{
        this._listOfAdopters.push(ownerName);
    }

    public findNewOwner(): void{
        let listOfAdoptableAnimals: Animal[] = [];
        this._listOfAnimals.forEach(function(element){
            if(element.isAdoptable() == true){
                listOfAdoptableAnimals.push(element);
            }
        });
        let randomAnimal: number = Math.floor(Math.random() * listOfAdoptableAnimals.length);
        let randomAdopter: number = Math.floor(Math.random() * this._listOfAdopters.length);
        listOfAdoptableAnimals[randomAnimal].ownerName = this._listOfAdopters[randomAdopter];
        for(let n: number = 0; n < this._listOfAnimals.length; n++){
            if(this._listOfAnimals[n].ownerName !== ""){
                this._listOfAnimals.splice(randomAnimal, 1);
            }
        }
        this._listOfAdopters.splice(randomAdopter, 1);
    }

    public earnDonation(amount: number) : number{
        return this._budget += amount;
    }

    public toString(): void{
        console.log(`Budget: ${this._budget} €, \n There are ${this._listOfAnimals.length} animal(s) and ${this._listOfAdopters.length} potential adopter(s)`);
        this._listOfAnimals.forEach(element => {
            element.toString();
        });
    }
}