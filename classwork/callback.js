const cake = {
  location: [
    "Cakes and cream",
    "Diva cakes",
    "Yefepere",
    "Cake lagos",
    "Zuzu Cakes",
    "Heavenly cakes",
    "Take and want more",
    "Yetunde's delight",
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
function orderCake(
  cakeChoice,
  bestChoice,
  select_flavour,
  select_size,
  select_layers,
  select_shape,
  select_color,
  select_icing,
  select_topping,
  select_text,
  select_extra
) {
  setTimeout(() => {
    console.log(`My order will be taken from ${cake.location[bestChoice]}`);
    cakeChoice(
      select_flavour,
      select_size,
      select_layers,
      select_shape,
      select_color,
      select_icing,
      select_topping,
      select_text,
      select_extra
    );
  }, 2000);
}
function receiveOrder(
  select_flavour,
  select_size,
  select_layers,
  select_shape,
  select_color,
  select_icing,
  select_topping,
  select_text,
  select_extra
) {
  setTimeout(() => {
    console.log(`Processing order`);
    setTimeout(() => {
      console.log(`A ${cake.flavour[select_flavour]} cake`);
      setTimeout(() => {
        console.log(`${cake.size[select_size]} inches in size`);
        setTimeout(() => {
          console.log(`${cake.layers[select_layers]} layers`);
          setTimeout(() => {
            console.log(`${cake.shape[select_shape]} in shape`);
            setTimeout(() => {
              console.log(`${cake.color[select_color]} in color`);
              setTimeout(() => {
                console.log(`With ${cake.icing[select_icing]} icing on top`);
                setTimeout(() => {
                  console.log(`A sprinkle of ${cake.toppings[select_topping]}`);
                  setTimeout(() => {
                    console.log(
                      `A text of ${cake.text[select_text]} written on it`
                    );
                    setTimeout(() => {
                      console.log(
                        `and a ${cake.extra[select_extra]} reward to the celebrant`
                      );
                      setTimeout(() => {
                        console.log("YOUR FULL ORDER");
                        setTimeout(() => {
                          console.log(
                            `A ${cake.flavour[select_flavour]} cake of ${cake.size[select_size]} inches in size, ${cake.layers[select_layers]} layers, ${cake.shape[select_shape]} in shape, ${cake.color[select_color]} in color, ${cake.icing[select_icing]} icing on top, a sprinkle of ${cake.toppings[select_topping]}, a text of ${cake.text[select_text]} written on it, and a ${cake.extra[select_extra]} reward to the celebrant. HAPPY BIRTHDAY`
                          );
                        }, 4000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
orderCake(receiveOrder, 7, 3, 4, 4, 2, 1, 2, 0, 3, 0);
