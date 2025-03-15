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

const markBmi =  markMass / (markHeight * markHeight);
const johnBmi =  johnMass / (johnHeight * johnHeight);

console.log("Mark's BMI is:", markBmi);
console.log("John's BMI is:", johnBmi);

if (markBmi > johnBmi){
    console.log(`Mark's BMI (${markBmi}) is higher than john's (${johnBmi})` )
} else {
    console.log(`John's BMI (${johnBmi} is higher than John's (${markBmi})`)
}


// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "c" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.
// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// Test data 1
// const teamDolphins = (96 + 108 + 89);
// const teamKoalas = (88 + 91 + 110);

// const scoreDolphins = teamDolphins / 3;
// const scoreKoalas = teamKoalas / 3;

// console.log(`Team Dolphin's score is ${scoreDolphins}`)
// console.log(`Team koala's score is ${scoreKoalas}`)

// if(scoreKoalas > scoreDolphins){
//     console.log(`Koalas win the trophy  ${scoreKoalas}`)
// } else if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win the trophy ${scoreDolphins}`)
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy")
// }


// // Test data 2
// const teamDolphins = (97 + 12 + 101);
// const teamKoalas = (109 + 95 + 96);

// const scoreDolphins = teamDolphins / 3;
// const scoreKoalas = teamKoalas / 3;

// console.log(`Team Dolphin's score is ${scoreDolphins}`)
// console.log(`Team koala's score is ${scoreKoalas}`)

// if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log(`Koalas win the trophy  ${scoreKoalas}`)
// } else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win the trophy ${scoreDolphins}`)
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy")
// } else{
//     console.log("Try again")
// }

// Test data 3
const teamDolphins = (97 + 102 + 101);
const teamKoalas = (109 + 95 + 96);

const scoreDolphins = teamDolphins / 3;
const scoreKoalas = teamKoalas / 3;

console.log(`Team Dolphin's score is ${scoreDolphins}`)
console.log(`Team koala's score is ${scoreKoalas}`)

if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log(`Koalas win the trophy  ${scoreKoalas}`)
} else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win the trophy ${scoreDolphins}`)
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy")
} else{
    console.log("Try again")
}

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉