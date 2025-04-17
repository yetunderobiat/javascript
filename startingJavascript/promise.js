// https://catfact.ninja/fact
// https://api.genderize.io?name=temitope

const myCat = "https://catfact.ninja/fact";
const catFetch = fetch(myCat)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const myName = "https://api.genderize.io?name=yetunde";
const nameFetch = fetch(myName)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  }).catch((error)=>{
    console.log(error);
  })
