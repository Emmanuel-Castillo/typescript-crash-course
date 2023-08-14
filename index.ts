//declare type after variable declaration: static typing
let age: number = 25
age = 23

let hobby: string = "soccer"
// hobby = true -> wrong

let isAdult: boolean = true

//compiled to js using ts compiler

let apple: string = "yo yo ma"

let x: any = true
x = 15
x = "dont use too often"

//arrays
let fruits: string[] = ["Apple","Orange"]
let arr: any[] = [22, "a", true]
let numArr: number[][] = [[1],[2]]

//tuples: ordered set of values
let employee: [number, string] = [1, "Jack"]
let employees: [number, string][] = [
  [2,"Sarah"],
  [3, "Jack"]
]

//objects
//custom types

type Car = {
  brand: string,
  year: number
}

let car1: Car = {
  brand: "Lexus",
  year: 2020
}

//interface
interface Car1 {
  brand: string,
  year: number
}

let newCar : Car1 = {
brand: "Lexus",
year: 2020
}

//union: lets a variable hold more than one value
let y: string | number = 22
type occupation = "employed" | "student"
let jackOccupation: occupation = "student"