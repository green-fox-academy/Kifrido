'use strict';

//Create a Student class that has the same fields and methods as the Person class, and has the following additional

//fields:
//previousOrganization: the name of the student’s previous company / school
//skippedDays: the number of days skipped from the course
//methods:
//getGoal(): prints out "Be a junior software developer."
//introduce(): "Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already."
//skipDays(numberOfDays): increases skippedDays by numberOfDays
//The Student class has the following constructors:

//Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
//Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0

class Student {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _previousOrganization: string;
    private _skippedDays: number;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'School of Life'){
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._previousOrganization = previousOrganization;
        this._skippedDays = 0;
    }

    public introduce(): void{
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + " from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.");
    }

    public getGoal(): void{
        console.log("My goal is: Be a junior software developer.");
    }

    skipDays(numberOfDays): void{
        this._skippedDays += numberOfDays;
    } 
}

export { Student };