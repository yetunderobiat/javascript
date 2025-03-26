// function validVoter(age) {
//   if (age >= 18) {
//     console.log("You are eligible to vote");
//   } else {
//     console.log("You are not eligible to vote");
//   }
// }
// validVoter(5);

// function dualNumber(x) {
//   if (x % 3 === 0 && x % 5 === 0) {
//     console.log("Correct");
//   } else {
//     console.log("Incorrect");
//   }
// }
// dualNumber(15);
// dualNumber(6);
// dualNumber(30);

// const numArray = [1, 3, 7, 9, 2, 4];
// const newArray = [8, 10, ...numArray];
// console.log(newArray);

// const shallowCopy = [...numArray];
// shallowCopy.push(25);
// console.log(shallowCopy);
// shallowCopy.shift();
// console.log(shallowCopy);

// console.log(numArray);
// console.log(shallowCopy.push(25));

const eplTeams = [
  "Arsenal",
  "Aston Villa",
  "Bournemouth",
  "Brentford",
  "Brighton & Hove Albion",
  "Burnley",
  "Chelsea",
  "Crystal Palace",
  "Everton",
  "Fulham",
  "Liverpool",
  "Luton Town",
  "Manchester City",
  "Manchester United",
  "Newcastle United",
  "Nottingham Forest",
  "Sheffield United",
  "Tottenham Hotspur",
  "West Ham United",
];

for (const num of eplTeams.entries()) {
  console.log(`Position ${num[0] + 1} is ${num[1]}`);
}
