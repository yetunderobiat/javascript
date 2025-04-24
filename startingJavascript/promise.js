// const promise = new Promise((resolve, reject) => {
//   const randomNumber = Math.floor(Math.random() * 5);
//   console.log(randomNumber);
//   setTimeout(() => {
//     if (randomNumber >= 2) {
//       resolve("You have won");
//     } else {
//       reject("You have lost");
//     }
//   }, 3000);
// });
// console.log(promise);

// const practicePromise = new Promise((resolve, reject) => {
//   const addNumber = 3 + 7;
//   setTimeout(() => {
//     if (addNumber === 10) {
//       resolve("Correct");
//     } else {
//       reject("Wrong");
//     }
//   }, 2000);
// });
// console.log(practicePromise);

// https://catfact.ninja/fact
// https://api.genderize.io?name=temitope

// const myCat = "https://catfact.ninja/fact";
// const catFetch = fetch(myCat)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const myName = "https://api.example.com/data";
// const nameFetch = fetch(myName)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   }).catch((error)=>{
//     console.log(error);
//   })

// async function checkName() {
//   const result = await fetch("https://api.genderize.io?name=");
//   const data = await result.json();
//   console.log(data);
// }
// checkName();

// const fetchApi = "https://api.genderize.io?name=yetunde";
// const practiceFetch = fetch(fetchApi)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

async function checkName() {
  const result = await fetch("https://api.genderize.io?name=yetunde");
  const data = await result.json();
  console.log(data);
  console.log(data.name);
  console.log(`My  name is ${data.name} i am a ${data.gender}`);
}
checkName();

// async function nameCheck() {
//   try {
//     const result = await fetch("https://api.genderize.io?name=tunde");
//     if (!result.ok) {
//       throw new Error(`HTTP error! Status: ${result.status}`);
//     }
//     const data = await result.json();
//     console.log(data);
//     console.log(data.name);
//     console.log(`My  name is ${data.name} i am a ${data.gender}`);
//   } catch (error) {
//     console.error("There was a problem fetching the data:", error);
//   }
// }
// nameCheck()


const catAPI = "https://catfact.ninja/fact";bb
async function getCat() {
  try {
    CatFactElement.textContent = "loading..... I";
    const result = await fetch(catAPI);
    if (!result.ok) {
      throw new Error(`${result.status}`);
    }
    const data = await result.json();
    console.log(data);
    catFactElement.textContent = data.fact;
  } catch (error) {
    console.log(Error);
    getCat();
    newFactBtn.addEventListener("click", getCat);
  }
}
