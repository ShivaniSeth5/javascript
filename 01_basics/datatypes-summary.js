// Primitive Data Types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
// const bigNumber = 34565868690n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = { 
    name: "shivani",
    age: 30,
}

const myFunction = function(){
    console.log("Hello world");
}