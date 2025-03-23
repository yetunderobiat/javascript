// destructing arrays
const restaurant = {
  name: "ibrahim robiat",
  location: "ikorodu, lasgos, nigeria",
  categories: ["italian", "pizzaria", "vegetarian", "organic"],
  staterMenu: ["rice", "chicken", "salad", "spaghetti", "bread"],
  mainMenu: ["pizza", "pasta", "risotto"],

  //   order: function (staterIndex, mainIndex) {
  //     return [this.staterMenu(staterIndex), this.mainMenu(mainIndex)];
  //   },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, second] = restaurant.categories;
console.log(first, second);

const [firstchoice, , third] = restaurant.mainMenu;
console.log(firstchoice, third);

[first, second] = [second, first];
console.log(first, second);

// receive two return values from a function
// const [stater, mainCourse] = restaurant.order(2, 0);
// console.log(stater, mainCourse);

//nested destruction
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j);
console.log(i, j, k);

// default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
