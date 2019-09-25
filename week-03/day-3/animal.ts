'use strict';

//Create an Animal class
//Every animal has a hunger value, which is a whole number
//Every animal has a thirst value, which is a whole number
//when creating a new animal object these values are created with the default 50 value
//Every animal can eat() which decreases their hunger by one
//Every animal can drink() which decreases their thirst by one
//Every animal can play() which increases both by one

class Animal{
    private _hunger: number;
    private _thirst: number;


    constructor(hunger: number, thirst: number) {
        this._hunger = hunger;
        this._thirst = thirst;
    }


    public eat(): void {
        this._hunger -= 1;
    }
    public drink(): void {
        this._thirst -= 1;
    }
    public play(): void {
        this._hunger += 1;
        this._thirst += 1;
    }

   
    public get hunger(): number{
        return this._hunger;
    }

    public get thirst(): number{
        return this._thirst;
    }
}

let lion = new Animal(50, 50)

    console.log('hunger of the lion: ' + lion.hunger);
    console.log('thirst of the lion: ' + lion.thirst);
    
    lion.play();
    lion.drink();

    console.log('hunger of the lion after playing: ' + lion.hunger);
    console.log('thirst of the lion after playing and drinking: ' + lion.thirst);
