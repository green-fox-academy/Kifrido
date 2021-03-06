'use strict';

//Create Sharpie class
//We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
//When creating one, we need to specify the color and the width
//Every sharpie is created with a default 100 as inkAmount
//We can use() the sharpie objects
//which decreases inkAmount

class Sharpie {
    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor(color: string, width: number, inkAmount: number) {
        this._color= color;
        this._width = width;
        this._inkAmount= inkAmount;
    }

    public use(): void {
        this._inkAmount -= 1;
    }

    public get inkAmount(): number{
        return this._inkAmount;
    }

    public set inkAmount(inkAmount : number){
        this._inkAmount = inkAmount;
    }
}

let sharpieFirst = new Sharpie('red', 20, 100);
let sharpieSecond = new Sharpie('blue', 30, 0);




sharpieFirst.use();
sharpieSecond.use();
sharpieSecond.use();




export { Sharpie };