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
//type assertion
let z = "a";
y = 22;
//functions
function add(x, y) {
    return x + y;
}
add(12, 34);
function sayHi() {
    console.log("hi");
}
//using generics: T -> placeholder
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copyArr(["1", "2", "3"]);
//enums
var EyeColor;
(function (EyeColor) {
    EyeColor["brown"] = "Common eye color";
    EyeColor["blue"] = "Rare eye color";
    EyeColor["green"] = "Very rare eye color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyecolor;
    document.body.innerText = info;
}
displayStudent({
    name: "Jack",
    age: 20,
});
