'use strict';

//Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

//fields:
//level: the level of the mentor (junior / intermediate / senior)
//methods:
//getGoal(): prints out "Educate brilliant junior software developers."
//introduce(): "Hi, I'm name, a age year old gender level mentor."
//The Mentor class has the following constructors:

//Mentor(name, age, gender, level)
//Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

class Mentor{
    private _name: string;
    private _age: number;
    private _gender: string;
    private _level: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate'){
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._level = level;
    }

    public introduce(): void{
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + ' ' + this._level + " mentor.");
    }

    public getGoal(): void{
        console.log("My goal is: Educate brilliant junior software developers.");
    }
}

export { Mentor };