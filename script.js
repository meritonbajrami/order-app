console.log(
  "%cGot ya! Dont mind the code, I've made this project in my beginnings(when I started this journey)!",
  "color: red; font-size: larger"
);

const mobileNotSupportedEl = document.querySelector(".body-container");

const checkMobileSupport = (width) => {
if (width < 968) {
    mobileNotSupportedEl.classList.add("show-warning");
  } else {
    mobileNotSupportedEl.classList.remove("show-warning");
  }
}
checkMobileSupport(window.screen.width);

window.addEventListener("resize", function (event) {
  checkMobileSupport(event.currentTarget.innerWidth);
});

const recipes = [
  {
    image:
      "http://www.everynookandcranny.net/wp-content/uploads/2015/05/dsc_0242.jpg",
    title: "Almond Brown Sugar Croissant",
    description: "Sweet croissant with topping almonds and brown sugar",
    price: 12.98,
    unit: "$",
    pieces: 1,
    id: 1,
    categories: "Croissants",
    finalPrice: 12.98,
  },
  {
    image:
      "https://img.freepik.com/free-photo/croissant-sandwich-ham_1339-5802.jpg?w=360",
    title: "Smoke Tenderloin Slice Croissant",
    description:
      "Plain croissant with smoke tenderloin beef sliced and vegetable",
    price: 10.01,
    finalPrice: 10.01,
    unit: "$",
    pieces: 1,
    id: 2,
    categories: "Waffle",
  },
  {
    image:
      "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/11882/croissant-french-toast-with-berries-and-cream.jpg",
    title: "Berry Whipped Cream Croissant",
    description: "Sweet croissant with blueberries and strawberries inside",
    price: 12.98,
    finalPrice: 12.98,
    unit: "$",
    pieces: 1,
    id: 3,
    categories: "Coffe",
  },
  {
    image:
      "http://www.everynookandcranny.net/wp-content/uploads/2015/05/dsc_0242.jpg",
    title: "Almond Brown Sugar Croissant",
    description: "Sweet croissant with topping almonds and brown sugar",
    price: 22.98,
    finalPrice: 22.98,
    unit: "$",
    pieces: 1,
    id: 4,
    categories: "Ice Cream",
  },
  {
    image:
      "https://img.freepik.com/free-photo/croissant-sandwich-ham_1339-5802.jpg?w=360",
    title: "Smoke Tenderloin Slice Croissant",
    description:
      "Plain croissant with smoke tenderloin beef sliced and vegetable",
    price: 20.98,
    finalPrice: 20.98,
    unit: "$",
    pieces: 1,
    id: 5,
    categories: "Croissants",
  },
  {
    image:
      "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/11882/croissant-french-toast-with-berries-and-cream.jpg",
    title: "Berry Whipped Cream Croissant",
    description: "Sweet croissant with blueberries and strawberries inside",
    price: 16.98,
    finalPrice: 16.98,
    unit: "$",
    pieces: 1,
    id: 6,
    categories: "Signature",
  },
  {
    image:
      "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/11882/croissant-french-toast-with-berries-and-cream.jpg",
    title: "Berry Whipped Cream Croissant",
    description: "Sweet croissant with blueberries and strawberries inside",
    price: 14.98,
    finalPrice: 14.98,
    unit: "$",
    pieces: 1,
    id: 7,
    categories: "Signature",
  },
  {
    image:
      "https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/11882/croissant-french-toast-with-berries-and-cream.jpg",
    title: "Berry Whipped Cream Croissant",
    description: "Sweet croissant with blueberries and strawberries inside",
    price: 7.98,
    finalPrice: 7.98,
    unit: "$",
    pieces: 1,
    id: 8,
    categories: "Croissants",
  },
];

let container = document.querySelector(".food");
let result = document.querySelector(".result");

let activeTab = "Croissants";

let basket = [];

const renderHTML = (activeTab, recetat, searchMode = false) => {
  container.innerHTML = "";
  result.innerHTML = "";
  let activeTabRecipes = recetat;

  if (!searchMode) {
    activeTabRecipes = recetat.filter(
      (recipe) => recipe.categories === activeTab
    );
  }

  if (activeTabRecipes.length < 3) {
    container.classList.add("justify-content-start");
  } else {
    container.classList.remove("justify-content-start");
  }

  activeTabRecipes.forEach((recipe, index) => {
    const listContainer = document.createElement("div");

    listContainer.classList.add("card");
    listContainer.setAttribute("data-id", index);
    listContainer.setAttribute("data-category", recipe.categories);
    listContainer.innerHTML = generateCardHtmlElement(recipe);

    container.appendChild(listContainer);

    const svg = listContainer.children[0].children[0].addEventListener(
      "click",
      () => {
        basket.push(recipe);
        renderBaskedItems();
      }
    );
  });
};

const generateCardHtmlElement = (recipe) => {
  const mainDiv = document.createElement("div");
  mainDiv.innerHTML = `<svg class="add-to-card-icon" width="35" data-id="${recipe.id}" height="35" data-name="Capa 1" id="Capa_1" viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg"><path data-id="${recipe.id}" d="M15.64,6.68a.32.32,0,0,0-.27-.14H6.17C6.08,5.63,6,4.94,6,4.92a.35.35,0,0,0-.35-.31h-1a.35.35,0,1,0,0,.69h.71c.12,1.19.53,5.26.63,6s.32,1.41,1.29,1.57a1.32,1.32,0,0,0-.56,1.06,1.33,1.33,0,0,0,2.66,0A1.32,1.32,0,0,0,9,13l1.28.1,1.27.11a1.3,1.3,0,0,0-.23.71,1.33,1.33,0,0,0,2.66,0,1.31,1.31,0,0,0-1-1.26.36.36,0,0,0-.17-.07c-.43,0-1.46-.1-2.5-.19s-2.25-.18-2.72-.2c-.65,0-.85-.24-1-1h0L14.41,11a.34.34,0,0,0,.33-.26l1-3.8A.35.35,0,0,0,15.64,6.68Zm-3,7.86a.63.63,0,0,1-.63-.63.64.64,0,0,1,.62-.64h0a.64.64,0,0,1,0,1.27ZM8,14.54a.64.64,0,1,1,.63-.63A.63.63,0,0,1,8,14.54Zm6.1-4.2-7.55.15c0-.36-.09-.8-.14-1.28H9.21a.38.38,0,0,0,.37-.38.37.37,0,0,0-.37-.37H6.36L6.24,7.24h8.68Z"/></svg>
      <img  src="${recipe.image}" alt="almond Croissants">
      <h1 class="title">${recipe.title}</h1>
      <span class="croissant">${recipe.description}</span>
      <div class="prices">
          <span class="price"> <b> ${recipe.unit}${recipe.price}</b> /${recipe.pieces}  pieces</span>`;

  return mainDiv.outerHTML;
};

renderHTML(activeTab, recipes);

const navLi = document.querySelectorAll(".main-bar");

navLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    navLi.forEach((li) => {
      li.classList.remove("active");
    });

    li.classList.add("active");

    const attributi = li.getAttribute("data-id");

    activeTab = attributi;
    renderHTML(activeTab, recipes);
    // renderBaskedItems();
  });
});

const first = document.querySelector(".pjesa-e-pare");

const svgs = document.querySelectorAll(".add-to-card-icon");

const renderBaskedItems = () => {
  first.innerHTML = "";
  basket.forEach((item, index) => {
    const divOrder = document.createElement("div");

    divOrder.innerHTML = `<div class="result mb-20">
         <div class="img-result">
             <img class="imgresult" src="${item.image}" alt="almond Croissants">
         </div>
         <div class="title-result">
             <div>
             <h1 class="title">${item.title}</h1>
    
             </div>
             <div class="price-btn">
                     <span class="price" data-price="${item.price}"><b> ${item.price}</b> </span>
                     <div class="numruesi">
                         <button class="counter minus" data-id="${item.id}">-</button>
                         <span class="aktual-number">${item.pieces}</span>
                         <button class="counter plus" data-id="${item.id}">+</button>
                     </div>
             </div>
         </div>
         </div>
     </div>`;

    first.appendChild(divOrder);

    const minutesDiv =
      divOrder.children[0].children[1].children[1].children[1].children[0];
    const plusDiv =
      divOrder.children[0].children[1].children[1].children[1].children[2];

    const currentBaskedOnIteration = basket[index];

    minutesDiv.addEventListener("click", () => {
      if (basket[index].pieces === 1) {
        basket = basket.filter((rec) => {
          return rec.id !== currentBaskedOnIteration.id;
        });
      } else {
        basket[index] = {
          ...currentBaskedOnIteration,
          pieces: currentBaskedOnIteration.pieces - 1,
          finalPrice:
            (currentBaskedOnIteration.pieces - 1) *
            currentBaskedOnIteration.price,
        };
      }

      renderBaskedItems();
    });

    plusDiv.addEventListener("click", () => {
      basket[index] = {
        ...basket[index],
        pieces: basket[index].pieces + 1,
        finalPrice: (basket[index].pieces + 1) * basket[index].price,
      };
      renderBaskedItems();
    });
  });
  let total = basket
    .map((item) => item.finalPrice)
    .reduce((acc, cur) => acc + cur, 0);

  const cmimiTotalEl = document.querySelector(".cmimi-total");

  if (cmimiTotalEl) {
    cmimiTotalEl.innerHTML = "$" + parseFloat(total).toFixed(2);
  }
};

const search = document.querySelector(".search");
search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  container.innerHTML = "";
  const matchingObjects = recipes.filter((obj) => {
    const title = obj.title.toLowerCase();
    const description = obj.description.toLowerCase();
    return title.includes(value) || description.includes(value);
  });

  renderHTML(activeTab, matchingObjects, true);
});
