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

// const numbers = [1, 3, 4, 5, 6, 10, 12];
// const evenNum = numbers.filter((x) => {
//   return x > 4 && x % 2 === 0;
// });
// console.log(evenNum);

// const multiplyNum = numbers.reduce((a, b) => {
//   return a * b;
// }, 1);
// console.log(multiplyNum);

// console.log("***reverse an array***");
// const arrNum = [1, 2, 3, 4, 5, 6];
// console.log(arrNum);
// console.log(arrNum.reverse());

// console.log("***reverse a string***");
// const myName = "Yetunde";
// console.log(myName);
// console.log(myName.split("").reverse().join(""));

// console.log("***join 2 strings in different ways***");
// const joinArr = [2, 3, 4];
// const addArr = [7, 5, 6];
// const moreArr = [9, 3, 4];
// console.log([...joinArr, ...addArr]);
// console.log(joinArr.concat(addArr, moreArr));
// console.log(joinArr.concat(addArr).concat(moreArr));

// // palindrome
// function checkPalindrome(word){
//   const cleanWord = word.toLowerCase()
//   const reverseWord = cleanWord.split("").reverse().join("")
//   return cleanWord === reverseWord
// }
// console.log(checkPalindrome("hello"));
// console.log(checkPalindrome("Dad"));

// Write a function that determines whether a given number is positive or negative
// console.log(
//   "Write a function that determines whether a given number is positive or negative."
// );
// function originalNum(x) {
//   if (x > 0) {
//     console.log(`${x} is a positive number`);
//   } else if (x < 0) {
//     console.log(`${x} is a negative number`);
//   } else {
//     console.log(`${x} is just a number`);
//   }
// }
// originalNum(0);
// originalNum(-1);
// originalNum(1);

// // Write a function that checks if a number is even or odd
// console.log("2. Write a function that checks if a number is even or odd");
// function checkNum(y) {
//   if (y % 2 === 0) {
//     console.log(`${y} is an even number`);
//   } else {
//     console.log(`${y} is an odd number`);
//   }
// }
// checkNum(4);
// checkNum(7);

// // ⁠Write a function that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).
// console.log(
//   "3. ⁠Write a function that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”)."
// );
// function transformNum(a) {
//   if (a >= 80 && a < 100) {
//     console.log(`Your grade is A = ${a} `);
//   } else if (a >= 60 && a <= 79) {
//     console.log(`Your grade is B = ${a} `);
//   } else if (a >= 40 && a <= 59) {
//     console.log(`Your grade is C = ${a} `);
//   } else if (a >= 30 && a <= 39) {
//     console.log(`Your grade is D = ${a} `);
//   } else if (a >= 0 && a <= 29) {
//     console.log(`You failed! Your grade is F = ${a} `);
//   } else {
//     console.log(`${a} does not have a grade`);
//   }
// }
// transformNum(61);
// transformNum(39);
// transformNum(200);

// // Write a function that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15
// console.log(
//   "4. Write a function that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15."
// );
// function calTicketPrice(age) {
//   if (age < 12) {
//     return "5";
//   } else if (age < 18) {
//     return "10";
//   } else if (age < 60) {
//     return "20";
//   } else {
//     return "15";
//   }
// }
// console.log(calTicketPrice(10));
// console.log(calTicketPrice(15));
// console.log(calTicketPrice(55));
// console.log(calTicketPrice());

// // Write a function that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0
// console.log(
//   "5. Write a function that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0"
// );
// function discountPrice(price) {
//   if (price >= 100) {
//     console.log(`Price ${price} have a discount of 20`);
//   } else if (price >= 50) {
//     console.log(`Price ${price} have a discount of 10`);
//   } else {
//     console.log(`Discount is 0`);
//   }
// }
// discountPrice(60);
// discountPrice(190);
// discountPrice(-80);
// function calculateDiscount(amount) {
//   let discount = 0;

//   if (amount >= 100) {
//     discount = 20;
//   } else if (amount >= 50) {
//     discount = 10;
//   }

//   return discount;
// }

// let purchaseAmount = 85;
// let discount = calculateDiscount(purchaseAmount);
// console.log(`Discount for ₦${purchaseAmount} is ₦${discount}`);

// // // Write a simple number guessing function.
// // console.log("6. Write a simple number guessing function.");
// function checkingNum(guessNum, secretNum) {
//   if (guessNum < secretNum) {
//     console.log(`${guessNum} is lower than ${secretNum}`);
//   } else if (guessNum > secretNum) {
//     console.log(`${guessNum} is higher than ${secretNum}`);
//   } else if (guessNum === secretNum) {
//     console.log(`${guessNum} is equals to ${secretNum}`);
//   } else {
//     console.log("Guess is wrong");
//   }
// }
// checkingNum(8, 1);
// checkingNum(-1, 1);
// checkingNum(1);
// checkingNum(3, 3);

// A call back function

// function getSoap(addWater) {
//   console.log("Get your detergent");
//   addWater();
// }
// function pourWater(startWashing) {
//   console.log("Add water to the cloths");
//   startWashing();
// }
// function rinseClothe(streadCloth) {
//   console.log("Start washing your cloth");
//   streadCloth();
// }
// function dryCloth() {
//   console.log("Rinse cloth");
// }
// getSoap(() => pourWater(() => rinseClothe(dryCloth)));

"use strict";

//ILE IYAN ELEWE

// place order
// prepare food
//prepare soup
//add stain
//select drink
//food on the way
//enjoy meal

const menu = {
  food: ["yam", "semo"],
  soup: ["efo", "ila", "ewedu"],
  stain: ["goat meat", "brokoto", "assorted", "ponmo"],
  drink: ["water", "palm wine", "soft dink"],
};

function placeOrder(
  prepare_meal,
  food_select,
  soup_select,
  stain_select,
  drink_select
) {
  setTimeout(() => {
    console.log(
      `You have decided to eat ${
        menu.food[food_select] === "yam" ? "pounded yam" : "semo"
      }`
    );
    prepare_meal(soup_select, stain_select, drink_select);
  }, 2000);
}

function prepareFood(soup_select, stain_select, drink_select) {
  setTimeout(() => {
    console.log("food bn prepared");
    setTimeout(() => {
      console.log(`your ${menu.soup[soup_select]} is bn prepared too`);
      setTimeout(() => {
        console.log(`you picked ${menu.stain[stain_select]} as accessory`);
        setTimeout(() => {
          console.log(`you picked ${menu.drink[drink_select]} as drink`);
          setTimeout(() => {
            console.log("Food almost ready");
            setTimeout(() => {
              console.log("Enjoy your meal");
            }, 1000);
          }, 1000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 1000);
}

placeOrder(prepareFood, 1, 1, 2, 0);

const items = {
  selectItems:['cloths','shoes','markup','bag', 'jewerly'],
  cloths: ["Nike", "Channel", "Gucci", "Dior"],
  shoes: ["Puma", "Adidas", "Crocs", "Skechers"],
  markup: ["Mac", "Fenty", "Maybelline"],
  bag:[],
  jewerly:[],
};

function 

