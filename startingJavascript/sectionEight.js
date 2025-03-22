// the javascript engine and routine
// execution contexts and the call stack
// what is inside execution contex?
//1. variable environments
//2. scope chain
//3. this keyword
// a call stack is a place where execution contexts get stacked on top of eachother, to keep track of where we are in the execution.
// the scope and the scope chain
// scoping is how all program variables are organized and accessed in the js engine.
// scope of a variable is a region of our code where a certain variable can be accessed
// functions are value that are stored in variables
// types of scope
// 1. global scope: it is declared outside of any functin or block. variables can be accessible everywhere
// const myName = "Robiat";
// const myAge = "33";
// const myYear = "2025";

// console.log(myName, myAge, myYear);
/// 2. function scope: variables are only accessed inside functions. it is also called local scope
// function myDetails(year) {
//   const now = "33";
//   const age = now - year;
//   return age;
// }
// console.log();
// // 3. block scope: variables are only accesible inside block
// if (year >= 1991 && year <= 1996) {
//   const now = true;
//   const food = "rice";
// }
// console.log(now);

// scope chain vs call stack
// const a = "jonas";
// first();

// function first() {
//   const b = "Hello";
//   second();

//   function second() {
//     const c = "Hi!";
//     third();
//   }
// }

// function third() {
//   const d = "Hey!";
//   console.log(d + c + b + a);
// }

// scoping in practice
// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       const str = `oh, and i am a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(millenial);
//   }
//   printAge();
//   return age;
// }

//global variable
// const firstName = "Robiat";
// calcAge(1999);

// Hoisting and the TDZ
// hoisting makes some type of variable accessible/usable in the code before they are actually declared
// TDZ - Temporal Dead Zone - makes it easier to avoid and catch error

// Hoisting and the TDZ in practice
// variables
console.log(me);

var me = "Robiat";
let job = "Teacher";
const year = 1991;

// function
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

//example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log("all products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// the this  keyword practice
// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// calcAge(1990);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const robiat = {
//   year: 2017,
// };
// robiat.calcAge = jonas.calcAge;
// robiat.calcAge();

// const f = robiat.calcAge;
// f();

// Regular Functions vs. Arrow Functions
var firstName = "Robiat";
const jonas = {
  firstName: "Robiat",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 8);
