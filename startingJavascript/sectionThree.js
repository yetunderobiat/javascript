// Activating string mode    
// 'Use strict';

// let hasDriversLicense = true;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense)   console.log('I can drive');

// const interface = 'audio'
// const private = 234//strict mode reserves these words so we cannot reserve them with variabels
// const if = 'dncjdcn'


// Functions
// a function is a piece a code that can be used multiple times

// example 1
//using function multiple times by invoking the function again
// function  logger(){
    //funtion body
//     console.log('My name is robiat')
// }
// logger();
// logger();
// logger();
// logger(); //invoking, calling or running the function

// example 2
// passing data and returning data in a function
// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const applejuice = fruitProcessor(5, 8);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(3, 5);
// console.log(appleOrangeJuice);


// example 3
// function declarion and expression
// function declaration - functions that can be used before it is declared
// function calAge1(birthYear){
//     const age = 2027 - birthYear;
//     return age;
// }
// const age1 = calAge1(2008);

// // function expression a function stored in a variable
// const calAge2 = function(birthYear){
//     const age = 2027 - birthYear;
//     return age;
// }
// const age2 = calAge2(2018);
// console.log(age1, age2);

// const myAge = function(birthYear){
//     const age1 = 2025 - birthYear;
//     return (age1);
// }
// const currentAge = myAge(2006);
// console.log(currentAge);

// const foodItem = function(numOfFood){
//     const food = 20 + numOfFood;
//     return food;
// }
// const quantityOfFood = foodItem(100);
// console.log(quantityOfFood)

// example 4
// Arrow function
// const calcAge3 = birthYear => 2025 -birthYear;
// const age3 = calcAge3(2006);
// console.log(age3)

// const ageOfRetirement = (birthYear, firstName ) => {
//     const year = 2025 - birthYear;
//     const  age = 65 - year;
//     return `${firstName} retires in ${age} years`   
// }
// console.log(ageOfRetirement(2003, 'robiat'));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2027 - birthYear;
//     const requirement = 65 - age;
//     return `${firstName} retires in ${requirement} years`
// }
// console.log(yearsUntilRetirement(1991, 'robiat'));
// console.log(yearsUntilRetirement(1971, 'yetunde'));


// example 5
// calling a function from inside another function
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function foodProcessor(apples, oranges){
//     const applePices = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applePices} apples and ${orangePieces} oranges.`
//     return juice;
// }
// console.log(foodProcessor(2, 4))

// example 6
// reviewing functions

//Array -- it is  data structure

// const friends = ['Robiat', 'Yetunde', 'ibrahim'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1])

// friends[2] = 'jay'
// console.log(friends)

// const myName = 'bob'
// const friendss = [myName, 'Robiat', 'Yetunde', 'ibrahim', 22 - 33, 'Alice'];
// console.log(friendss);
// console.log(friendss.length)

// const calcAge = function (birthYear){
//     return 2025 -birthYear
// }
// const years = [1990, 1991, 1992, 1993, 1994, 1995]
// const age4 = (calcAge(years[0]))
// console.log(age4)

// const animals = ['Dog', 'Cat', 'Birds', 'Snake'];
// const newLengh = animals.push('Rabbit');
// console.log(animals);
// console.log(newLengh);

// animals.unshift('Rat');
// console.log(animals);

// animals.pop();
// console.log(animals);

// animals.shift();
// console.log(animals);

// console.log(animals.indexOf('Cat'));
// console.log(animals.indexOf('Snake'));
// console.log(animals.includes(22));
// console.log(animals.includes('Dog'));

// if (animals.includes('Birds')){
//     console.log("This is a bird");
// } else {
//     console.log("Not part of the list")
// }

//  Objects
// const jonas = {
//     firstName: 'Joans',
//     lastName: 'Ibrahim',
//     age: 2033 - 2000,
//     job : 'teacher',
//     friends: ['michael', 'rob', 'joe']
// }
// console.log(jonas)

// the first way of getting a property from an object is using the dot notation
// dot notation
// console.log(jonas.age);
// // bracket notation
// console.log(jonas['age']);
// const interestedIn = prompt('What do you want to know');

// if (jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request');
// }

// console.log(`${jonas.firstName} has friends ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)

// Object Method
// const robiat = {
//     firstName: 'Robiat',
//     lastName: 'Ibrahim',
//     birthYear: 2006,
//     job : 'student',
//     friends: ['michael', 'rob', 'joe'],
//     hasDriversLicense: true,

//     calcAge: function (){
//         return 2025 - this.birthYear; 
//     }

//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };
// console.log(robiat.getSummary());
// console.log(robiat.calcAge(2006)); // dot notation
// console.log(robiat['calcAge'](2006)); //bracket notation



// iteration: 
// the for loop keeps running while condition is true 
// for(let rep = 10; rep <= 20; rep ++){
//     console.log(`Lifting weights repetion ${rep}`);
// }


// looping through arrays

const robiat = ['Robiat', 
    'Ibrahim',
    2025 - 2006,
    'student', 
    ['michael', 'rob', 'joe'],
    true
 ];
 const types = []
for (let i = 0; i < robiat.length ; i++){
    console.log(robiat[i], typeof robiat[i]);

    types[1] = typeof robiat[i]
    types.push(typeof robiat[i])
}
console.log(types)


const years = [19, 20, 21, 22, 23];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(200 - years[i]);
}
console.log(ages);

// continue and break statement
// continue statement
console.log('------ only string ------')
for (let i = 0; i < robiat.length; i++){
    if(typeof robiat[i] !== 'string')
        continue;
    console.log(robiat[i], typeof robiat[i]);
}

console.log('------ break with number------')
for (let i = 0; i < robiat.length; i++){
    if(typeof robiat[i] === 'number')
        break;
    console.log(robiat[i], typeof robiat[i]);
}

// looping backwords 
const yetunde = ['Robiat', 
    'Ibrahim',
    2025 - 2006,
    'student', 
    ['michael', 'rob', 'joe'],
 ];

 for (let i = yetunde.length - 1; i >= 0; i--){
    console.log(i, yetunde[i])
 }

// creating a loop inside another loop
for (let exercise = 1; exercise <= 4; exercise++){
    console.log(`--------- starting exercise ${exercise}`);

    for (let rep = 1; rep < 10; rep++){
        console.log(`Exercise: ${exercise} Lifting weight repetition ${rep}`);
    }
}

// while loop
// the while loop is for specifying a condition
// for (let rep = 1; rep <= 10; rep ++){
//     console.log(`Lifting weights repetion ${rep}`);
// }

let rep = 1;
while (rep <= 10){
    // console.log(`While:Lifting weights repetion ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6 ) + 1;

while (dice != 6){
    console.log(`You rolled a dice ${dice}`);
    dice = Math.trunc(Math.random() * 6 ) + 1;
    if (dice === 6){
        console.log('loop is about to end...')
    }

}