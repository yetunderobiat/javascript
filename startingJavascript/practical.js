// JavaScript Fundamentals – Part 1
// Coding Challenge #1

//test data 1
// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.88;
// const johnMass = 95;

// const markBmi = markMass / (markHeight * 2);
// console.log('Mark BMI is: ', markBmi);

// const johnBmi = johnMass / (johnHeight * 2);
// console.log('John BMI is: ', johnBmi);

//test data 2
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76

const markBmi = markMass / markHeight ** 2;
console.log('Mark BMI is:', markBmi + 'kg')

const johnBmi = johnMass / johnHeight * johnHeight;
console.log('John BMI is:', johnBmi + 'kg')

const markHigherBmi = markBmi > johnBmi;
console.log(markHigherBmi)

// Coding Challenge #2
console.log('Who has the higher BMI:')
if (markBmi > johnBmi){
    console.log("Mark's BMI is higher than John's! Mark BMI is " + markBmi + 'kg')
}
else{
    console.log("John's BMI is higher than Mark's! John BMI is " + johnBmi + 'kg')
}