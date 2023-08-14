"use strict";
//declare type after variable declaration: static typing
let age = 25;
age = 23;
let hobby = "soccer";
// hobby = true -> wrong
let isAdult = true;
//compiled to js using ts compiler
let apple = "yo yo ma";
let x = true;
x = 15;
x = "dont use too often";
//arrays
let fruits = ["Apple", "Orange"];
let arr = [22, "a", true];
let numArr = [[1], [2]];
//tuples: ordered set of values
let employee = [1, "Jack"];
let employees = [
    [2, "Sarah"],
    [3, "Jack"]
];
let car1 = {
    brand: "Lexus",
    year: 2020
};
let newCar = {
    brand: "Lexus",
    year: 2020
};
//union: lets a variable hold more than one value
let y = 22;
let jackOccupation = "student";
