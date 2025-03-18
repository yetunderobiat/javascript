// DOM - document object model. it allows js to access html elements and styles to manipulate them
"use script";

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
