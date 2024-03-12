"use strict";
const buttons = document.querySelectorAll("button");
const video = document.getElementById("background-video");
const firstButton = document.getElementById("firstButton");
const form = document.forms.calc;
const geely = document.getElementById("geely");
const modelContainer = document.querySelector(".model");
const modelsAudi = document.querySelector(".model__audi");
const modelsSkoda = document.querySelector(".model__skoda");
const modelsVolvo = document.querySelector(".model__volvo");
const modelsVW = document.querySelector(".model__vw");
const audiBTN = document.getElementById("audi-btn");
const skodaBTN = document.getElementById("skoda-btn");
const volvoBTN = document.getElementById("volvo-btn");
const vwBTN = document.getElementById("vw-btn");
const fuelContainer = document.querySelector(".fuel");
const engineContainer = document.querySelector(".engine");
const ownersContainer = document.querySelector(".owners");
const priceBTN = document.getElementById('price');
const modelButtons = document.querySelectorAll(".models-car button");
const engineRange = document.getElementById('engine-id');
const rangeValue = document.getElementById('range-value');
const fuelButtons = document.querySelectorAll(".fuel button");
const ownersButtons = document.querySelectorAll(".owners button");
const result = document.querySelector(".result");

let arrResult = [];
const objModel = {
  AUDI: [
    { title: "a4", price: 32000 },
    { title: "a6", price: 38000 },
    { title: "a8", price: 42000 },
    { title: "q7", price: 53000 },
  ],
  SKODA: [
    { title: "kodiaq", price: 42000 },
    { title: "fabia", price: 30000 },
    { title: "rapid", price: 33000 },
    { title: "octavia", price: 27000 },
  ],
  VOLVO: [
    { title: "s80", price: 27000 },
    { title: "s40", price: 25000 },
    { title: "xc60", price: 32000 },
    { title: "v60", price: 21000 },
  ],
  VW: [
    { title: "golf", price: 17000 },
    { title: "passat", price: 22500 },
    { title: "touareg", price: 31000 },
    { title: "phaeton", price: 30000 },
  ],
};

video.playbackRate = 0.8;

engineRange.addEventListener('input', function() {
  rangeValue.textContent = engineRange.value;
  calculatePrice();
});

form.classList.add("none");

firstButton.addEventListener("click", (event) => {
  event.preventDefault();
  form.classList.remove("none");
  firstButton.classList.add("none");
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (!button.closest('.fuel') && !button.closest('.owners') && !priceBTN) {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    }
  });
});

geely.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  const elementX = geely.getBoundingClientRect().left;
  const elementY = geely.getBoundingClientRect().top;
  const deltaX = x - elementX;
  const deltaY = y - elementY;
  geely.style.transform = `translate(${deltaX / 0.3}px, ${deltaY / 0.4}px)`;
});

geely.addEventListener("mouseleave", function() {
  geely.style.transform = `translate(0px, 0px)`;
});

modelsAudi.classList.add("none");
modelsSkoda.classList.add("none");
modelsVW.classList.add("none");
modelsVolvo.classList.add("none");
fuelContainer.classList.add("none");
engineContainer.classList.add("none");
ownersContainer.classList.add("none");
priceBTN.classList.add("none");
result.classList.add("none");

audiBTN.addEventListener("click", () => {
  audiBTN.classList.add('active-btn-img');
  skodaBTN.classList.remove('active-btn-img');
  volvoBTN.classList.remove('active-btn-img');
  vwBTN.classList.remove('active-btn-img');

  modelsSkoda.classList.add("none");
  modelsVW.classList.add("none");
  modelsVolvo.classList.add("none");
  modelsAudi.classList.remove("none");
  fuelContainer.classList.remove("none");
  engineContainer.classList.remove("none");
  ownersContainer.classList.remove("none");
});

skodaBTN.addEventListener("click", () => {
  skodaBTN.classList.add('active-btn-img');
  audiBTN.classList.remove('active-btn-img');
  volvoBTN.classList.remove('active-btn-img');
  vwBTN.classList.remove('active-btn-img');

  modelsAudi.classList.add("none");
  modelsVW.classList.add("none");
  modelsVolvo.classList.add("none");
  modelsSkoda.classList.remove("none");
  fuelContainer.classList.remove("none");
  engineContainer.classList.remove("none");
  ownersContainer.classList.remove("none");
});

volvoBTN.addEventListener("click", () => {
  volvoBTN.classList.add('active-btn-img');
  skodaBTN.classList.remove('active-btn-img');
  audiBTN.classList.remove('active-btn-img');
  vwBTN.classList.remove('active-btn-img');

  modelsAudi.classList.add("none");
  modelsSkoda.classList.add("none");
  modelsVW.classList.add("none");
  modelsVolvo.classList.remove("none");
  fuelContainer.classList.remove("none");
  engineContainer.classList.remove("none");
  ownersContainer.classList.remove("none");
});

vwBTN.addEventListener("click", () => {
  vwBTN.classList.add('active-btn-img');
  skodaBTN.classList.remove('active-btn-img');
  audiBTN.classList.remove('active-btn-img');
  volvoBTN.classList.remove('active-btn-img');

  modelsAudi.classList.add("none");
  modelsSkoda.classList.add("none");
  modelsVolvo.classList.add("none");
  modelsVW.classList.remove("none");
  fuelContainer.classList.remove("none");
  engineContainer.classList.remove("none");
  ownersContainer.classList.remove("none");
});

modelButtons.forEach(button => {
  button.addEventListener("click", function() {
    modelButtons.forEach(btn => btn.classList.remove("model-car-active"));
    this.classList.add("model-car-active");
    showCalculateButton();
    calculatePrice();
  });
});

fuelButtons.forEach(button => {
  button.addEventListener("click", function() {
    fuelButtons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    showCalculateButton();
    calculatePrice();
  });
});

ownersButtons.forEach(button => {
  button.addEventListener("click", function() {
    ownersButtons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    showCalculateButton();
    calculatePrice();
  });
});

function showCalculateButton() {
  let modelActive = false;
  let fuelActive = false;
  let ownersActive = false;
  // let engineActive = parseFloat(engineCapacity) !== 0;

  modelButtons.forEach(button => {
    if (button.classList.contains("model-car-active")) {
      modelActive = true;
    }
  });

  fuelButtons.forEach(button => {
    if (button.classList.contains("active")) {
      fuelActive = true;
    }
  });

  ownersButtons.forEach(button => {
    if (button.classList.contains("active")) {
      ownersActive = true;
    }
  });

  if (modelActive && fuelActive && ownersActive) {
    priceBTN.classList.remove("none");
  } else {
    priceBTN.classList.add("none");
  }
}

var selectedBrand = ""; 
var selectedModel = ""; 
var selectedModelPrice = 0; 
var selectedFuel = 0; 
var selectedOwners = 0; 
var engineCapacity = 0; 

priceBTN.addEventListener('click', calculateTotalPrice); 
priceBTN.addEventListener('click', function() {
  result.classList.remove('none');
}); 


modelButtons.forEach(button => {
  button.addEventListener("click", function() {
    selectedBrand = this.parentNode.classList[0].split("__")[1].toUpperCase();
    selectedModel = this.classList[0].split("__")[1];
    selectedModelPrice = objModel[selectedBrand].find(model => model.title === selectedModel).price;
    });
});

fuelButtons.forEach(button => {
  button.addEventListener("click", function () {
    selectedFuel = parseFloat(this.value);
  });
});

ownersButtons.forEach(button => {
  button.addEventListener("click", function () {
    selectedOwners = parseFloat(this.value);
  });
});
engineRange.addEventListener('input', function() {
  engineCapacity = parseFloat(this.value);
  console.log(engineCapacity)
});

function calculateTotalPrice() {
  const resPrice = (selectedModelPrice + selectedFuel + selectedOwners) * engineCapacity;
  const formattedPrice = resPrice.toLocaleString('en-US');
  result.innerHTML = (`${formattedPrice}$`);
}

