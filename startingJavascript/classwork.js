const friend = ["biodun", "t bazz", "coach"]
console.log(friend);

const number = [1, 2, 3, 4, 5, 6];

const tripleNum = number.map(el => el *  3);
console.log(tripleNum);

const halfNum = number.map(el => el / 2);
console.log(halfNum);

const oddNum =number.filter((x) => x % 2);
console.log(oddNum);

const evenNum = number.filter((y) => y % 2 === 0);
console.log(evenNum);



// 1. print number 1 to 10
// multiply each number in an array by 10
// sum number 1 to 5

for (let n = 1; n <= 10; n++){
    console.log(n);
}

const arrayNum = [2, 4, 6, 8]
for (let i = 0; i < number.length; i++){
    console.log(arrayNum[i] * 2);
}



// 13/03/2025
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".check").addEventListener("click", () => {
  const userGuess = Number(document.querySelector(".guess").value);

  if (!userGuess) {
    document.querySelector(".message").innerHTML =
      "Input a valid number in the box";
  } else if (userGuess === secretNumber) {
    document.querySelector(".message").innerHTML = "You don get am";
  } else if (userGuess > 20) {
    document.querySelector(".message").innerHTML =
      " eye dey pain you? we say between 1 and 20";
  } else if (userGuess > secretNumber) {
    document.querySelector(".message").innerHTML = "guess too high";
  } else if (userGuess < secretNumber) {
    document.querySelector(".message").innerHTML = "guess too low";
  }
});
// document.querySelector(".check")
//   const myGuess =  document.querySelector(".check").innerHTML = "My password"
//   console.log(myGuess)