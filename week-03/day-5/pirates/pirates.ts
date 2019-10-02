'use strict';

//Create a Pirate class. While you can add other fields and methods, you must have these methods:-

//drinkSomeRum() - intoxicates the Pirate some
//howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
//0 to 4 times, "Pour me anudder!"
//else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
//If you manage to get this far, then you can try to do the following. - die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead. - brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

//And... if you get that far...

//Add a parrot.

export class Pirate {
    protected _drunknessLevel: number = 0;
    protected _isItAlive: boolean = true;

    constructor(drunknessLevel: number, isItAlive: boolean) {
        this._drunknessLevel = drunknessLevel;
        this._isItAlive = isItAlive;
    }

    public drinkSomeRum(): void {
        this._drunknessLevel++;
    }

    public howsItGoingMate(): void {
        this._drunknessLevel < 4 ? console.log("Pour me anudder!") : console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
    }

    public die(): void {
        this._isItAlive = false;
    }

    /*public askIfAlive(): string{
        return this._isItAlive == true ? console.log("I'm alive!") : console.log("He is dead.");
    }*/

    public passOut(): void{
        console.log('zzzzzzzzzz');
    }

    public get isItAlive(): boolean {
        return this._isItAlive;
    }

    public get drunknessLevel(): number {
        return this._drunknessLevel;
    }
}

let jack = new Pirate(0, true);
jack.drinkSomeRum();
jack.howsItGoingMate();
jack.drinkSomeRum();
jack.howsItGoingMate();
jack.drinkSomeRum();
jack.howsItGoingMate();
jack.drinkSomeRum();
jack.howsItGoingMate();
jack.passOut();

//console.log(jack.askIfAlive());
console.log(jack.drunknessLevel);
