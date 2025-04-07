// // Default Parameters
// const bookings = [];
// function createBooking(
//   flightNum,
//   numPassengers = 2,
//   price = 200 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }
// createBooking("24er");
// createBooking("hsv", 2, 300);

// // How Passing Arguments Works: Value vs. Reference
// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };

// function checkIn(flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 24739479284) {
//     // alert("Checked in");
//   } else {
//     // alert("Wrong passport!");
//   }
// }

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// function newPassport(person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);

// Functions Accepting Callback Functions
function oneWord(str) {
  return str.replace(/ /g, "").toLowerCase();
}

function upperFirstWord(str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
}

// Higher-order function
function transformer(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
function high5() {
  console.log("👋");
};
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);
