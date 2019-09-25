'use strict';

//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"

class PostIt{
    private _backgroundColor: string;
    private _textOnIt: string;
    private _textColor: string;

    constructor(backgroundColor: string, textOnIt: string, textColor: string){
        this._backgroundColor= backgroundColor;
        this._textOnIt = textOnIt;
        this._textColor = textColor;
    }
}

let orangePostIt = new PostIt('orange', 'Idea1', 'blue');
let pinkPostIt = new PostIt('pink', 'Awesome', 'black');
let yellowPostIt = new PostIt('yellow', 'Superb!', 'green');

console.log(orangePostIt);
console.log(pinkPostIt);
console.log(yellowPostIt);

