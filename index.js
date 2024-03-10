"use strict";
const buttons = document.querySelectorAll("button");
const video = document.getElementById("background-video");
const firstButton = document.getElementById("firstButton");
const form = document.forms.calc;
const geely = document.getElementById('geely');
const modelContainer = document.querySelector('.model');
const modesAudi = document.querySelector('.model__audi');
const modesSkoda = document.querySelector('.model__skoda');
const modesVolvo = document.querySelector('.model__volvo');
const modesVW = document.querySelector('.model__vw');
const audiBTN = document.getElementById ('audi-btn');
const skodaBTN = document.getElementById ('skoda-btn');
const volvoBTN = document.getElementById ('volvo-btn');
const vwBTN = document.getElementById ('vw-btn');

video.playbackRate = 0.8;

form.classList.add("none");

firstButton.addEventListener('click', (event) => {
  event.preventDefault();
  form.classList.remove('none');
  firstButton.classList.add('none');
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

geely.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const rect = geely.getBoundingClientRect();
  const elemX = rect.left + rect.width / 2;
  const elemY = rect.top + rect.height / 2;
  const offsetX = mouseX - elemX;
  const offsetY = mouseY - elemY;
  const newX = elemX - offsetX * 0.05; // Множитель для скорости движения
  const newY = elemY - offsetY * 0.05; // Множитель для скорости движения

  // Применение новых координат
  geely.style.transform = `translate(${newX}px, ${newY}px)`;
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
// const objModel = {
//   BMW: {
//     image: "/img/audi-logo.jpeg",
//     models: [
//       { title: "x3", price: 2000, image: "path/to/bmw_x3_image.jpg" },
//       { title: "525", price: 2500, image: "path/to/bmw_525_image.jpg" },
//       { title: "i1", price: 2200, image: "path/to/bmw_i1_image.jpg" },
//     ]
//   },  AUDI: [
//     { title: "a4b6", price: 1500 },
//     { title: "a8qutrro", price: 10000 },
//     { title: "a3", price: 3400 },
//   ],
//   CITROEN: [
//     { title: "c5", price: 2200 },
//     { title: "c4", price: 4800 },
//     { title: "c3", price: 4800 },
//   ],
//   SKODA: [
//     { title: "octavia", price: 6000 },
//     { title: "rapid", price: 12000 },
//     { title: "fabia", price: 1500 },
//   ],
// };
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
