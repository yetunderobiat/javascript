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
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
