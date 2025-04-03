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

// const eplTeams = [
//   "Arsenal",
//   "Aston Villa",
//   "Bournemouth",
//   "Brentford",
//   "Brighton & Hove Albion",
//   "Burnley",
//   "Chelsea",
//   "Crystal Palace",
//   "Everton",
//   "Fulham",
//   "Liverpool",
//   "Luton Town",
//   "Manchester City",
//   "Manchester United",
//   "Newcastle United",
//   "Nottingham Forest",
//   "Sheffield United",
//   "Tottenham Hotspur",
//   "West Ham United",
// ];

// for (const num of eplTeams.entries()) {
//   console.log(`Position ${num[0] + 1} is ${num[1]}`);
// }

// Write a for loop that prints numbers from 1 to 20.
// for (let i = 1; i <= 20; i++) {
//   console.log(`this is number ${i}`);
// }

// function checkClass(check) {
//   const myCheck = check.slice(-2);
//   if (myCheck === "ng") {
//     console.log("You are a nigerian");
//   } else if (myCheck === "gh") {
//     console.log("you are a ghanian");
//   } else if (myCheck === "us") {
//     console.log("you are an american");
//   } else {
//     console.log("country not determined");
//   }
// }
// checkClass("123yu");
// checkClass("12918us");
// checkClass("98129gh");

// // a function that capitalize the input
// function checkInput(myName) {
//   const correctName = myName.trim().toLowerCase();
//   return (
//     correctName[0].toUpperCase() +
//     correctName.slice(1, -1) +
//     correctName[myName.length - 1].toUpperCase()
//   );
// }
// console.log(checkInput("biodun"));
// console.log(checkInput("robiat"));

const numbers = [1, 3, 4, 5, 6, 10, 12];
const evenNum = numbers.filter((x) => {
  return x > 4 && x % 2 === 0;
});
console.log(evenNum);

const multiplyNum = numbers.reduce((a, b) => {
  return a * b;
}, 1);
console.log(multiplyNum);

console.log("*****reverse an array*****");
const arrNum = [1, 2, 3, 4, 5, 6];
console.log(arrNum);
console.log(arrNum.reverse());

console.log("***reverse a string***");
const myName = "Yetunde";
console.log(myName);
console.log(myName.split("").reverse().join(""));

console.log("***join 2 strings in different ways***");
const joinArr = [2, 3, 4];
const addArr = [7, 5, 6];
const moreArr = [9, 3, 4];
console.log([...joinArr, ...addArr]);
console.log(joinArr.concat(addArr, moreArr));
console.log(joinArr.concat(addArr).concat(moreArr));

// palindrome
function checkPalindrome(word){
  const cleanWord = word.toLowerCase()
  const reverseWord = cleanWord.split("").reverse().join("")
  return cleanWord === reverseWord
}
console.log(checkPalindrome("hello"));
console.log(checkPalindrome("Dad"));
