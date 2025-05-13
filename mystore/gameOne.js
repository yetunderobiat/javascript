let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 3;
let highscore = 0;

const displayMessage = function (msg) {
  document.querySelector(".message").textContent = msg;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.body.style.backgroundColor = "#6a0dad";
    document.querySelector(".number").style.boxShadow = "0 0 30px gold";
    document.querySelector('.discount-code').style.display = 'block';


    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 Game Over!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {});
