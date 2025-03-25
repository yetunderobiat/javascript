// // destructing arrays
// // const restaurant = {
// //   name: "ibrahim robiat",
// //   location: "ikorodu, lasgos, nigeria",
// //   categories: ["italian", "pizzaria", "vegetarian", "organic"],
// //   staterMenu: ["rice", "chicken", "salad", "spaghetti", "bread"],
// //   mainMenu: ["pizza", "pasta", "risotto"],
// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0,
// //       close: 24,
// //     },
// //   },

// //   //   order: function (staterIndex, mainIndex) {
// //   //     return [this.staterMenu(staterIndex), this.mainMenu(mainIndex)];
// //   //   },
// // };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// const [firstchoice, , third] = restaurant.mainMenu;
// console.log(firstchoice, third);

// [first, second] = [second, first];
// console.log(first, second);

// // receive two return values from a function
// // const [stater, mainCourse] = restaurant.order(2, 0);
// // console.log(stater, mainCourse);

// //nested destruction
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j);
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Destructing objects
// we use the curly braces to desctructure
const restaurant = {
  names: "ibrahim robiat",
  location: "ikorodu, lasgos, nigeria",
  categories: ["italian", "pizzaria", "vegetarian", "organic"],
  staterMenu: ["rice", "chicken", "salad", "spaghetti", "bread"],
  mainMenu: ["pizza", "pasta", "risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (staterIndex, mainIndex) {
    return [this.staterMenu(staterIndex), this.mainMenu(mainIndex)];
  },

  orderDelivery: function (
    staterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  ) {
    console.log(
      `order received ${this.mainMenu[this.staterMenu]} and ${
        this.mainMenu[this.mainIndex]
      }will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
restaurant.orderDelivery[
  {
    time: "22:33",
    address: "via del sole, 21",
    mainIndex: 2,
    staterIndex: 2,
  }
];
restaurant.orderDelivery[{ address: "via del sole, 21", staterIndex: 1 }];

const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

const {
  names: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], staterMenu: stater = [] } = restaurant;
console.log(menu, stater);

// mutating a variable
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// The spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
const newArr = [1, 2, ...arr];
console.log(badNewArr);
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "gnocci"];
console.log(newMenu);

const newMenu2 = [...restaurant.staterMenu, "food"];
console.log(newMenu2);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const joinMenu = [...restaurant.mainMenu, ...restaurant.staterMenu];
console.log(joinMenu);

// iterables: arrays, strings, maps, sets, not objects
const str = "Jonas";
console.log(...str);

const letters = [...str, "", "s."];
console.log(letters);

const ingredients = [
  // prompt("let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3"),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guisepe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.names = "Ristorante Roma";
console.log(restaurantCopy.names);
console.log(restaurant.names);

// The rest pattern and parameter
// Rest
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.staterMenu,
];
console.log(pizza, risotto, otherFood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(3, 4);
add(3, 2, 5, 7);
add(1, 2, 3, 4, 5, 6);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// SHORT CIRCUITING(&& and ||)
// use any data type, return any data type, short-circuiting
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---AND---");
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
