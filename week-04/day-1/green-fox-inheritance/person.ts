'use strict';

//Create a Person class with the following fields:

//name: the name of the person
//age: the age of the person (whole number)
//gender: the gender of the person (male / female)
//And the following methods:

//introduce(): prints out "Hi, I'm name, a age year old gender."
//getGoal(): prints out "My goal is: Live for the moment!"
//And the following constructors:

//Person(name, age, gender)
//Person(): sets name to Jane Doe, age to 30, gender to female

export class Person {
    protected _name: string;
    protected _age: number;
    protected _gender: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female'){
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    protected specificIntroduction(): string{
        return "";
    }

    public introduce(): void{
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + this.specificIntroduction() + ".");
    }

    public getGoal(): void{
        console.log("My goal is: Live for the moment!");
    }
}
