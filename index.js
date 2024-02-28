"use strict";

//vars
const containerModel = document.querySelector(".container_model");
const wrSecondForm = document.querySelector(".wrapper_secondForm");
const containerCountUser = document.querySelector(".container__count-user");
const used = document.querySelector("#used");
const newStatus = document.querySelector("#new");
const resultSumm = document.querySelector(".result");
const form = document.forms.calc;
let arrResult = [];
const objModel = {
  BMW: [
    { title: "x3", price: 2000 },
    { title: 525, price: 2500 },
    { title: "i1", price: 2200 },
  ],
  AUDI: [
    { title: "a4b6", price: 1500 },
    { title: "a8qutrro", price: 10000 },
    { title: "a3", price: 3400 },
  ],
  CITROEN: [
    { title: "c5", price: 2200 },
    { title: "c4", price: 4800 },
    { title: "c3", price: 4800 },
  ],
  SKODA: [
    { title: "octavia", price: 6000 },
    { title: "rapid", price: 12000 },
    { title: "fabia", price: 1500 },
  ],
};
const markAuto = form.elements.markaAuto;
const modelAuto = form.elements.modelAuto;
const btnSubmit = form.elements.btnSend;
const enigne = form.elements.enigne;
const statusRadio = form.elements.status;
const countUser = form.elements.count;
const fuelArr = form.elements.fuel;

//listener
markAuto.addEventListener("change", getValueMarka);
modelAuto.addEventListener("change", getValueModel);
form.addEventListener("submit", getResult);
used.addEventListener("change", renderCountUsedAdd);
newStatus.addEventListener("change", renderCountUsedRemove);

///function

///global
function getValueMarka(event) {
  containerModel.classList.remove("none");
  renderSelectModel(objModel[event.target.value]);
  switch (event.target.value) {
    case "BMW":
      arrResult[0] = 50000;
      break;
    case "AUDI":
      arrResult[0] = 45000;
      break;
    case "CITROEN":
      arrResult[0] = 20000;
      break;
    case "SKODA":
      arrResult[0] = 30000;
      break;
    default:
      arrResult = [];
  }
}

function renderSelectModel(arr) {
  modelAuto.innerHTML = "";
  const optHidden = document.createElement("option");
  optHidden.textContent = "выберите модель";
  optHidden.value = "";
  optHidden.hidden = true;
  modelAuto.appendChild(optHidden);
  wrSecondForm.classList.add("none");
  arr.forEach((item) => {
    const opt = document.createElement("option");
    opt.textContent = item.title;
    opt.value = item.price;
    modelAuto.appendChild(opt);
  });
}

function getValueModel(event) {
  if (arrResult.length === 0) return;
  arrResult[1] = +event.target.value;
  wrSecondForm.classList.remove("none");
}

function getResult(event) {
  event.preventDefault();
  
  // Ппроверка топлива
  const fuelPrice = getValueRadio(fuelArr);
  if (!fuelPrice) {
    alert("Выберите тип топлива");
    return;
  }
  
  // проверка на объем двигателя
  const engineDisplacement = +enigne.value;
  if (!engineDisplacement || isNaN(engineDisplacement)) {
    alert("Введите корректный объем двигателя");
    return;
  }

  // проверка на состояние автомобиля
  const priceStatus = getValueRadio(statusRadio);
  if (!priceStatus) {
    alert("Выберите состояние автомобиля");
    return;
  }

  // проверка на количество владельцев
  const usedPrice = getValueRadio(countUser);
  if (!usedPrice) {
    alert("Выберите количество владельцев");
    return;
  }

  const result =
    +fuelPrice +
    engineDisplacement * 500 +
    +priceStatus +
    +usedPrice +
    arrResult[0] +
    arrResult[1];
  resultSumm.textContent = `${result}$`;
}

function renderCountUsedAdd(event) {
  if (event.target.checked) {
    containerCountUser.classList.remove("none");
  }
}
function renderCountUsedRemove(event) {
  if (event.target.checked) {
    containerCountUser.classList.add("none");
  }
}

///templates
function getValueRadio(arrRadio) {
  const originalArrRadio = [...arrRadio];
  let price;
  originalArrRadio.forEach((item) => {
    if (item.checked) {
      price = item.value;
    }
  });
  return price;
}
