'use strict';

//Create a Counter class
//which has an integer property
//when creating it should have a default value 0 or we can specify it when creating
//we can add(number) to increase the counter's value by a whole number
//or we can add() without parameters just increasing the counter's value by one
//and we can get() the current value as string
//also we can reset() the value to the initial value

class Counter{
    private _integer: number;
    private _initialValue: number;

    constructor(integer: number = 0) {
            this._integer = integer;
            this._initialValue = integer;
    }

    public add(integer: number = 1): void {
        this._integer += integer;
    }

    public reset(): void{
            this._integer = this._initialValue;
        }

    public get integer(): string {
        return `Counter has the current value of: ${this._integer}`;
    }
}

let newCounter = new Counter(10);
console.log(newCounter.integer);

newCounter.add();
newCounter.reset();

console.log(newCounter.integer);

