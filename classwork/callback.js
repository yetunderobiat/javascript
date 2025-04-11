const cake = {
  location: [
    "Cakes and cream",
    "Diva cakes",
    "Yefepere",
    "Cake lagos",
    "Zuzu Cakes",
    "Yetunde's delight",
    "Heavenly cakes",
    "Take and want more",
  ],
  flavour: ["vanilla", "banana", "strawberry", "chocolate", "redvelcet"],
  size: ["10", "12", "14", "16", "18", "20"],
  layers: ["1", "2", "3", "4", "5", "6", "7"],
  shape: ["square", "circle", "triangle", "star", "moon", "diamond"],
  color: ["red", "blue", "yellow", "green", "purple", "white", "pink"],
  icing: ["butter", "fondant", "whippedcream", "plain"],
  toppings: ["candy", "sprinkles", "white chocolate", "dark chocolate"],
  text: ["Long life", "Happy Birthday", "A year older", "Hurray"],
  extra: ["icecream", "wine", "fruits", "pizza", "drinks"],
};
function orderCake(cakeChoice, bestChoice,select_flavour,select_size) {
  setTimeout(() => {
    console.log(`My order will be taken from ${cake.location[bestChoice]}`);
    cakeChoice(select_flavour,select_size);
  }, 2000);
}
function receiveOrder(select_flavour,select_size) {
  setTimeout(() => {
    console.log(`Processing order`);
    setTimeout(()=>{
        console.log(`A ${cake.flavour[select_flavour]} cake`);
        setTimeout(() => {
            console.log(`With ${cake.size[select_size]} inches in size`);
            
        }, 1000);
        
    })
  },1000);
}
orderCake(receiveOrder, 0, 3, 4);
