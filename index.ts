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

//let car = {
//   brand: string,
//   year: number
//}

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

//type assertion
let z: any = "a"
y = <number> 22

//functions
function add(x:number, y:number):number {
  return x + y
}

add(12,34)

function sayHi(): void {
  console.log("hi")
}

//using generics: T -> placeholder
function copyArr<T>(arr: T[]): T[] {
  return [...arr]
}

let numCopy = copyArr<number>([1,2,3])
let strCopy = copyArr<string>(["1","2","3"])

//enums
enum EyeColor {
  brown = "Common eye color",
  blue = "Rare eye color",
  green = "Very rare eye color"
}

interface Student{
  name: string,
  age: number,
  eyecolor?: EyeColor
}

function displayStudent(student: Student):void {
  const info: string = student.name + "\n" + student.age + "\n" + student.eyecolor

  document.body.innerText = info
}

displayStudent({
  name: "Jack",
  age: 20,
})