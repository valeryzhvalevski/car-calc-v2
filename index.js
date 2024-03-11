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

const objModel = {
  AUDI: [
    { title: "a4", price: 1500 },
    { title: "a6", price: 10000 },
    { title: "a8", price: 3400 },
    { title: "q7", price: 3400 },
  ],
  SKODA: [
    { title: "kodiaq", price: 2200 },
    { title: "fabia", price: 4800 },
    { title: "rapid", price: 4800 },
    { title: "octavia", price: 4800 },
  ],
  VOLVO: [
    { title: "s80", price: 6000 },
    { title: "s40", price: 12000 },
    { title: "xc60", price: 1500 },
    { title: "v60", price: 4800 },
  ],
  VW: [
    { title: "golf", price: 6000 },
    { title: "passat", price: 12000 },
    { title: "touareg", price: 1500 },
    { title: "phaeton", price: 4800 },
  ],
};

video.playbackRate = 0.8;

engineRange.addEventListener('input', function() {
  rangeValue.textContent = engineRange.value;
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
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
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
  });
});


// //vars
// const containerModel = document.querySelector(".container_model");
// const wrSecondForm = document.querySelector(".wrapper_secondForm");
// const containerCountUser = document.querySelector(".container__count-user");
// const used = document.querySelector("#used");
// const newStatus = document.querySelector("#new");
// const resultSumm = document.querySelector(".result");
// const form = document.forms.calc;
// let arrResult = [];
// const markAuto = form.elements.markaAuto;
// const modelAuto = form.elements.modelAuto;
// const btnSubmit = form.elements.btnSend;
// const enigne = form.elements.enigne;
// const statusRadio = form.elements.status;
// const countUser = form.elements.count;
// const fuelArr = form.elements.fuel;

// //listener
// markAuto.addEventListener("change", getValueMarka);
// modelAuto.addEventListener("change", getValueModel);
// form.addEventListener("submit", getResult);
// used.addEventListener("change", renderCountUsedAdd);
// newStatus.addEventListener("change", renderCountUsedRemove);

// ///function

// ///global
// function getValueMarka(event) {
//   //валидация
//   if (event.target.value === "") {
//     containerModel.classList.add("none");
//   }
//   containerModel.classList.remove("none");
//   renderSelectModel(objModel[event.target.value]);
//   switch (event.target.value) {
//     case "BMW":
//       arrResult[0] = 50000;
//       break;
//     case "AUDI":
//       arrResult[0] = 45000;
//       break;
//     case "CITROEN":
//       arrResult[0] = 20000;
//       break;
//     case "SKODA":
//       arrResult[0] = 30000;
//       break;
//     default:
//       arrResult = [];
//   }
// }

// function renderSelectModel(arr) {
//   modelAuto.innerHTML = "";
//   const optHidden = document.createElement("option");
//   optHidden.textContent = "выберите модель";
//   optHidden.value = "";
//   optHidden.hidden = true;
//   modelAuto.appendChild(optHidden);
//   wrSecondForm.classList.add("none");
//   arr.forEach((item) => {
//     const opt = document.createElement("option");
//     opt.textContent = item.title;
//     opt.value = item.price;
//     modelAuto.appendChild(opt);
//   });
// }

// function getValueModel(event) {
//   if (arrResult.length === 0) return;
//   arrResult[1] = +event.target.value;
//   wrSecondForm.classList.remove("none");
// }

// function getResult(event) {
//   event.preventDefault();
//   const fuelPrice = getValueRadio(fuelArr);
//   const enignePrice = +enigne.value * 500;
//   const priceStatus = getValueRadio(statusRadio);
//   let usedPrice = 0;
//   if (!containerCountUser.classList.contains("none")) {
//     usedPrice = getValueRadio(countUser);
//   }
//   const result =
//     +fuelPrice +
//     +enignePrice +
//     +priceStatus +
//     +usedPrice +
//     arrResult[0] +
//     arrResult[1];
//   resultSumm.textContent = `${result}$`;
// }

// function renderCountUsedAdd(event) {
//   if (event.target.checked) {
//     containerCountUser.classList.remove("none");
//   }
// }
// function renderCountUsedRemove(event) {
//   if (event.target.checked) {
//     containerCountUser.classList.add("none");
//   }
// }

// ///templates
// function getValueRadio(arrRadio) {
//   const originalArrRadio = [...arrRadio];
//   let price;
//   originalArrRadio.forEach((item) => {
//     if (item.checked) {
//       price = item.value;
//     }
//   });
//   return price;
// }
