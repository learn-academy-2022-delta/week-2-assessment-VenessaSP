// ASSESSMENT 2: Coding Practical Questions with Jest

const { default: test } = require("node:test")
const { isTypedArray } = require("util/types")
const { describe, array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15 
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


describe("dividend", () => {
    test("takes a number as an argument and decides if the number is evenly divisble by three or not")
    const num1 = 15
    const num2 = 0
    const num3 = -7
    expect(dividend(num1)).toEqual("num1 is divisible by 3")
    expect(dividend(num2)).toEqual("num2 is divisible by 3")
    expect(dividend(num3)).toEqual("num3 is not divisible by 3")
})


// b) Create the function that makes the test pass.

//Pseudocode
// Declared a function called dividend
// used 3 parameters num1,num2,num3
// used conditional statments for each variable using modulus to determine if divisible by 3


const dividend = (num1, num2, num3) => {
    if (num1 % 3 === 0) {
        return "is divisible by 3" }
        else if (num2 % 3 === 0){
            return "is divisible by 3"
        } else (num3 % 3 === 0) 
                return "is not divisible by 3"
            }

        


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
 
describe("nouns", () => {
    it("takes in an array of words and returns an array with all the words capitalized")
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    expect(nouns(randomNouns1)).toEqual(randomNouns1)
    expect(nouns(randomNouns2)).toEqual(randomNouns1) 
})

const nouns = (randomNouns1, randomNouns2) => {
    return randomNouns1.map(value => {
        value.toUpperCase("s", "p", "t", "c", "n") } {
            return randomNouns2.map(value =>  {
                value.toUpperCase('t', 'd', 'c', 'm', 'd') 
            })
        }
    
    )}   


// Pseudocode
// declared a function 'nouns'
// used parameters 'array'- to include every array listed and 'string' to include every string listed
// used HOF .map as an iteration for all arrays 
// used .toUpperCase


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe('vowels', () => {
    it("takes in a string and logs the index of the first vowel")
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
    expect(vowelTester1).toEqual(vowelTester1)
    expect(vowelTester2).toEqual(vowelTester2)
    expect(vowelTester3).toEqual(vowelTester3)

})

//Pseudocode
// declare variable 'vowels'
// make a  3 parameters 'vowelTester1, vowelTester2, vowelTester3
// use .filter to only return index []

const vowels = (vowelTester1, vowelTester2, vowelTester3) => {
    return vowelTester1, vowelTester2, vowelTester3 => {
        value.
    }

}



// b) Create the function that makes the test pass.

//---------------------- NOTES-------------------------
// - had alot of problems with the problems with the challenges

     //All the problems read outputed below and unsure what that means
// > 3 | const { default: test } = require("node:test")
// |                           ^
// 4 | const { isTypedArray } = require("util/types")
// 5 | const { describe, array } = require("yargs")
//---------------------------------------------------------------------
//                  PROBLEM 2
// 1.) I'm unsure if I'm correct but there's a curly bracket that give me an error and everytime I try to adjust problems on different parts of the code happen
// 2.) Also with the return statments and parameters am I supposed to put the varibles to represent them? and the .toUpperCase I tried using in an array and I'm not sure about it.
//-----------------PROBLEM 3-------------------------------------------
// 1.)I tried using the [] to represent the index but was unsure on where to put it and how to use in the return statments
// 2.)Also the parameters, unsure if using the variables together and using the return statment to support all the variables used in the parameter. 