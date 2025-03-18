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
const x = function () {
  console.log(33);
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "It must be a number";
    console.log(document.querySelector(".number").textContent);
  }
});


