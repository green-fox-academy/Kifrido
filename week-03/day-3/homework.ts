'use strict';

//Create 5 trees
//Store the data of them in variables in your program
//for every tree the program should store its'
//type
//leaf color
//age
//sex
//you can use just variables, or lists and/or maps

class Tree {
    private _type: string;
    private _leafColor: string;
    private _age: number;
    private _sex: string;

    constructor(type: string, leafColor: string, age: number, sex: string){
        this._type = type;
        this._leafColor = leafColor;
        this._age = age;
        this._sex = sex;
    }
    
    public get age(): number{
        return this._age
    }
   
}

let firstTree = new Tree('apple', 'green', 100, 'male');
let secondTree = new Tree('oak', 'brown', 20, 'female');
let thirdTree = new Tree('palm', 'green', 10, 'male');
let fourthTree = new Tree('nut', 'yellow', 1, 'female');
let fifthTree = new Tree('blackcherry', 'red', 100, 'male');

console.log(secondTree.age);