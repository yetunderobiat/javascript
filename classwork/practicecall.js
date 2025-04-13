const buildingHouse = {
  materials: ["bricks", "cement", "sand", "steel", "wood", "glass", "tiles"],
  rooms: [
    "living room",
    "kitchen",
    "bedroom",
    "bathroom",
    "garage",
    "dining room",
    "study",
  ],
  workers: [
    "architect",
    "engineer",
    "carpenter",
    "electrician",
    "plumber",
    "mason",
    "painter",
  ],
  tools: [
    "hammer",
    "drill",
    "saw",
    "trowel",
    "measuring tape",
    "screwdriver",
    "level",
  ],
  constructionSteps: [
    "site preparation",
    "foundation work",
    "framing",
    "roofing",
    "plumbing and electrical",
    "interior finishing",
    "painting",
    "final inspection",
  ],
  utilities: ["electricity", "water", "gas", "internet", "sewage"],
  exteriorFeatures: ["garden", "fence", "driveway", "patio", "balcony"],
};

function houseConstruction(home,stepOne,stepTwo,stepThree,stepFour,){
    setTimeout(() => {
        console.log(`${buildingHouse.materials[stepOne]}`);     
        home(stepTwo,stepThree,stepFour,) 
    }, 2000);
}
function houseBuilding(stepTwo,stepThree,stepFour,){
    setTimeout(() => {
        console.log(`${buildingHouse.rooms[stepTwo]}`);
        setTimeout(() => {
            console.log(`${buildingHouse.workers[stepThree]}`);
            setTimeout(() => {
                console.log(`${buildingHouse.tools[stepFour]}`);
                
            },1000);
        },1000);
    }, 1000);
}
houseConstruction(houseBuilding, 6,0,2,4)
