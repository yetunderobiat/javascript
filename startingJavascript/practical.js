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
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76

// const markBmi = markMass / markHeight ** 2;
// console.log('Mark BMI is:', markBmi + 'kg')

// const johnBmi = johnMass / johnHeight * johnHeight;
// console.log('John BMI is:', johnBmi + 'kg')

// const markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi)

// // Coding Challenge #2
// console.log('Who has the higher BMI:')
// if (markBmi > johnBmi){
//     console.log("Mark's BMI is higher than John's! Mark BMI is " + markBmi + 'kg')
// }
// else{
//     console.log("John's BMI is higher than Mark's! John BMI is " + johnBmi + 'kg')
// }


// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.88;
const johnMass = 95;

markBmi =  markMass / (markHeight * markHeight);
johnBmi =  johnMass / (johnHeight * johnHeight);

console.log("Mark's BMI is:", markBmi);
console.log("John's BMI is:", johnBmi);

console.log("Mark's BMI is higher than John's!");
console.log(`Mark's BMI (27.3) is higher than John's (24.2)!`);