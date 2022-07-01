// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer: "D" "E" "L" "T" "A" "2" "0" "2" "2"
// b) Verify and explain: output was actually (10) ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '2']   with the .split every individual character in the string is put into seperate individual strings and returns an array. The space in between the 'a' and '2' is counted as a character so thats included.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: An Error
// b) Verify and explain: undefined: because only 'greeter' was declared and in the string interpolation LEARN Student should be there


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Declared a function & .map affects everything within the array and the '*' (the operation character for multiply) will iterate through each element giving a new array of numbers. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: .filter affects each element in the array based on the criteria and returns a different array. 
//Question: what does the explanation point do in this instance? "value % 2 !== 0" 


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer:"JavaScript"
// b) Verify and explain: Nested objects, referencing the value using dot notation and key.valus. console logged the variable 'myCodingSkills' and the property 'languages' and the index '0' which in the array of strings is the first value.   


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer:Learn student george
// b) Verify and explain: console logged the entire class and with every assigned key value. Honestly still a little unsure on how this works. 
