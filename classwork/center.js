

// Test data 1 

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn  = massMark / heightJohn ** 2; 

console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

// Test data 2
// const weightMark = 95;
// const Mark = 1.88;
// const massJohn = 85;``
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn  = massMark / heightJohn ** 2; 

// console.log("Mark's BMI:", BMIMark);
// console.log("John's BMI:", BMIJohn);

// Bonus
const markHigherBMI = BMIMark > BMIJohn;
console.log("Is mark BMI higher than John");
console.log(markHigherBMI);