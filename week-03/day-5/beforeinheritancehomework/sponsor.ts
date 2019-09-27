'use strict';

//Create a Sponsor class that has the same fields and methods as the Person class, and has the following additional

//fields:
//company: name of the company
//hiredStudents: number of students hired
//method:
//introduce(): "Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far."
//hire(): increase hiredStudents by 1
//getGoal(): prints out "Hire brilliant junior software developers."
//The Sponsor class has the following constructors:

//Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
//Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0

class Sponsor{
    private _name: string;
    private _age: number;
    private _gender: string;
    private _company: string;
    private _hiredStudents: number;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google'){
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._company = company;
        this._hiredStudents = 0;
    }

    public introduce(): void{
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + " who represents " + this._company + " and hired " + this._hiredStudents + " students so far.");
    }

    public hire(): number{
        return this._hiredStudents++;
    }

    public getGoal(): void{
        console.log("My goal is: Hire brilliant junior software developers.");
    }
}

export { Sponsor };