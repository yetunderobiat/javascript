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

// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.88;
// const johnMass = 95;

// const markBmi =  markMass / (markHeight * markHeight);
// const johnBmi =  johnMass / (johnHeight * johnHeight);

// console.log("Mark's BMI is:", markBmi);
// console.log("John's BMI is:", johnBmi);

// if (markBmi > johnBmi){
//     console.log(`Mark's BMI (${markBmi}) is higher than john's (${johnBmi})` )
// } else {
//     console.log(`John's BMI (${johnBmi} is higher than John's (${markBmi})`)
// }

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
// const teamDolphins = (97 + 102 + 101);
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

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// Test data 1
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.20;
// console.log(`The value of the tip bill is ${bill}, the value of the tip is ${tip} and the total value is ${bill + tip} `)

// Test data 2
// const bill = 40;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.20;
// console.log(`The value of tip is ${tip} , the value of bill is ${bill} and their total is ${bill + tip}`)

// Test data 3
// const bill = 480;
// const tip = bill >=  50 && bill <= 300 ? bill * 0.15: bill * 0.20;
// console.log(`The value of tip is ${tip} , the value of bill is ${bill} and their total is ${bill + tip}`)

// SECTION 9: Data Structure, Modern Operators and Strings: exercise
const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//   Destructure the books array into two variables called firstBook and secondBook.
const [firstBook, secondBook] = books;

// Destructure the books array into a variable called thirdBook. You must skip the first two books.
const [, , thirdBook] = books;

// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [[, rating], [, ratingsCount]] = ratings;

// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
