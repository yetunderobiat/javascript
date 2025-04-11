const items = {
    location: ["Ikeja", "Maryland", "Ikorodu", "Oshodi", "Lekki", "Surulere", "Ikoyi", "Iyanapaja"],
    cloths: ["Nike", "Channel", "Gucci", "Dior"],
    shoes: ["Puma", "Adidas", "Crocs", "Skechers"],
    markup: ["Mac", "Fenty", "Maybelline"],
    bag: ["Prada", "Gucci", "Hermes"],
    jewerly: ["Mejuri", "Cartier", "Van Cleef"]
  };
  
  // Populate dropdowns
  function populateSelect(id, options) {
    const select = document.getElementById(id);
    options.forEach((item, index) => {
      const opt = document.createElement("option");
      opt.value = index;
      opt.textContent = item;
      select.appendChild(opt);
    });
  }
  
  window.onload = () => {
    populateSelect("location", items.location);
    populateSelect("cloth", items.cloths);
    populateSelect("shoes", items.shoes);
    populateSelect("markup", items.markup);
    populateSelect("bag", items.bag);
    populateSelect("jewelry", items.jewerly);
  
    document.getElementById("orderBtn").addEventListener("click", () => {
      const loc = document.getElementById("location").value;
      const cloth = document.getElementById("cloth").value;
      const shoes = document.getElementById("shoes").value;
      const markup = document.getElementById("markup").value;
      const bag = document.getElementById("bag").value;
      const jewelry = document.getElementById("jewelry").value;
  
      selectedItems(orderItems, loc, cloth, shoes, markup, bag, jewelry);
    });
  };
  
  function selectedItems(pickItems, bestChoice, select_cloth, select_shoes, select_markup, select_bag, select_jewelry) {
    setTimeout(() => {
      printOutput(`I would love to place my orders from ${items.location[bestChoice]}`);
      pickItems(select_cloth, select_shoes, select_markup, select_bag, select_jewelry);
    }, 1000);
  }
  
  function orderItems(select_cloth, select_shoes, select_markup, select_bag, select_jewelry) {
    setTimeout(() => {
      printOutput("Processing order");
      setTimeout(() => {
        printOutput("You have selected:");
        setTimeout(() => {
          printOutput(`A ${items.cloths[select_cloth]} for cloths`);
          setTimeout(() => {
            printOutput(`A ${items.shoes[select_shoes]} for shoes`);
            setTimeout(() => {
              printOutput(`A ${items.markup[select_markup]} for markup`);
              setTimeout(() => {
                printOutput(`A ${items.bag[select_bag]} for bag`);
                setTimeout(() => {
                  printOutput(`A ${items.jewerly[select_jewelry]} for jewelries`);
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 1000);
    }, 1000);
  }
  
  function printOutput(text) {
    const outputDiv = document.getElementById("output");
    const para = document.createElement("p");
    para.textContent = text;
    outputDiv.appendChild(para);
  }
  