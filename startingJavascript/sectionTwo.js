// let js = "amazing";
// if (js === "amazing") alert("JavaScript is fun");
// console.log(20 + 30 + 40)

// Values and variables

// console.log(20)
// console.log('robiat')

// let firstName = 'jonas';
// console.log(firstName)

//values and variables assignments
// let country = 'Nigeria';
// let continent = 'africa';
// let population = 139000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// data types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);


// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 'jonas');
// console.log(typeof 23);

// undefined variable
// let year;
// console.log(year);
// console.log(typeof year);

// three different ways of declaring a vriable
//let
// let age = 30;
// age = 31; //reassigning a value to a variable or we are mutating the age variable. you mutate a variable using let

// const 
//  used to change variables that are not supposed to change at any point in the future. a value in a const  variable cannot be changed.
//you cannot mutate a variable using const. it is immutable
// const birthYear = 1991;
// birthYear = 1991;  //it will throw up an error

// const job; //it will throw up an error

// var 
// it is similar to let
//it is an old way off declaring a variable
// var job = 'programmer';
// job = 'teacher';
// console.log(job);


//BASIC OPERATORS
// example 1
// const age = 2025 - 2006;
// const ageJonas = 2040 - 2000;
// console.log(age, ageJonas);

// example 2
// const year = 2025;
// const myYear = year - 2006;
// console.log(myYear);

// example 3
// const currentYear = 2025;
// const currentAge = 2011;
// const myAge = currentYear - currentAge;
// console.log(myAge);

// console.log(age * 10, ageJonas / 2, myYear - 1000, myAge + 2000)

// example 4 -- concatenating string with the use of '+'
// const myFirstName = 'Robiat';
// const mySecondName = 'Yetunde';

// console.log(myFirstName + ' ' + mySecondName);

// const myFirstName = 'Robiat';
// const mySecondName = 'Yetunde';
// const myAge = 25;

// console.log('My first name is' + ' ' + myFirstName  + ', my second name is' + ' ' + mySecondName + ' ' + 'and i am' + ' ' + myAge + ' ' + 'years old')

// console.log(typeof myAge)
// console.log(typeof myFirstName)

// example 5 - using assignment operator 
// let x = 10 + 5;
// x += 110; // x = x + 10
// console.log(x);

// let y = 10 + 10; 
// y *= 10; // x = x * 10
// y *= 2;
// y++; //y = y + 1;
// y--; //y = y - 1;
// console.log(y)

// example  6 - comparison operator
// const age = 2025 - 2006;
// const ageJonas = 2040 - 2000;
// console.log(age > ageJonas);

// const ageRobiat = 2025 - 2007;
// console.log(age <= 20);

// const ageRobi = 2025 - 2007;
// console.log(age >= 20);

// example 7 - operator predence
// let x, y;
// x = y = 25 - 18 - 5;
// console.log(x, y);

// const ageRobby = 20;
// const ageRobi = 40;

// console.log(ageRobby + ageRobi / 2);
// console.log((ageRobby + ageRobi) / 2);

// example 8 - template literals 
const myFirstName = 'Robiat';
const mySecondName = 'Yetunde';
const currentYear = 2025;
const initialYear = 2006;

console.log('My first name is' + ' ' + myFirstName  + ', my second name is' + ' ' + mySecondName + ' ' + 'and i am' + ' ' + (currentYear - initialYear) + ' ' + 'years old')

// type convertion
const inputYear = '2025';
console.log(Number(inputYear),  inputYear)
console.log(Number(inputYear) + 18);

console.log(String(23), 23)

// type coercion
console.log('I  am ' + 23 + '  years old') // the '+' operator is converting a number to string. string + number = string
console.log(3 + '23' + '10' - 3); // the '-'operator converts a string to number. it does not convert it to string. string - number = number
console.log('23' * '2'); // string * string = number
console.log('23' / '2'); // string / string = number