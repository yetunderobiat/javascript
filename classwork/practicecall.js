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

function houseConstruction(home,stepOne){
    setTimeout(() => {
        console.log(`${buildingHouse.materials[stepOne]}`);     
        home() 
    }, 2000);
}
function houseBuilding(){
    setTimeout(() => {
        console.log();
        
    }, 2000);
}
houseConstruction(houseBuilding, 2)
