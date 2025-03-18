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

// handling the click element
//implementing the game logic
// manipulating css style

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 3;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent =
      "Wrong input, not a number";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Yayy, you guessed the number correctly";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";


    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Your guess is too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the  game";
      document.querySelector(".score").textContent = 0;
    }
    document.querySelector("body").style.backgroundColor = 'yellow';
    // document.querySelector(".number").style.width = "30rem";

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Your guess is too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the  game";
      document.querySelector(".score").textContent = 0;
    }
    document.querySelector("body").style.backgroundColor = 'red';
  }
});
