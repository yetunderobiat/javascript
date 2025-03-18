// DOM - document object model. it allows js to access html elements and styles to manipulate them
"use script";

// selecting and manipulating element
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// console.log(document.querySelector('.number').textContent);

// document.querySelector(".score").textContent = 2;
// console.log(document.querySelector(".score").textContent);

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// when guess is too high
// else if (guess > secretNumber) {
// if (score > 1) {
//   document.querySelector(".message").textContent = "Your guess is too high";
//   score--;
//   document.querySelector(".score").textContent = score;
// } else {
//   document.querySelector(".message").textContent = "You lost the  game";
//   document.querySelector(".score").textContent = 0;
// }
// document.querySelector("body").style.backgroundColor = "yellow";

// when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Your guess is too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost the  game";
//       document.querySelector(".score").textContent = 0;
//     }
//     document.querySelector("body").style.backgroundColor = "red";
//   }
// });

// handling the click element
// implementing the game logic
// manipulating css style
// challenge 1
// implementing highscore
// refactoring our code

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("Wrong input, not a number");
  } else if (guess === secretNumber) {
    displayMessage("Yayy, you guessed the number correctly");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (guess > secretNumber) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "Your guess is too high"
          : "Your guess is too low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the  game");
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing....");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
});
