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

// const nameFetch = fetch(myName)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   }).catch((error)=>{
//     console.log(error);
//   })

// const myName = "https://api.genderize.io?name=";
async function checkName() {
  const result = await fetch("https://api.genderize.io?name=");
  const data = await result.json();
  console.log(data);
}
checkName();
