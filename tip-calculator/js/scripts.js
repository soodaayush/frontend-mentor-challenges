"use strict";

let $ = document.querySelector.bind(document);

const billInput = $("#billInput");
const peopleInput = $("#peopleInput");

const billInputError = $("#billInputError");
const peopleInputError = $("#peopleInputError");

const tipBtn = document.querySelectorAll(".tipButton");
const customTip = $("#customTip");

const tipPrice = $("#tipPrice");
const totalPrice = $("#totalPrice");

const resetBtn = $("#resetBtn");

billInput.addEventListener("keyup", function () {
  if (billInput.value === "0") {
    billInput.style.border = "1.5px solid red";
    billInputError.style.display = "block";
  } else {
    billInput.style.border = "";
    billInputError.style.display = "none";

    totalPrice.textContent = `$${billInput.value}`;
  }

  if (billInput.value === "") {
    totalPrice.textContent = "$0.00";
  }
});

peopleInput.addEventListener("keyup", function () {
  if (peopleInput.value < 1) {
    peopleInput.style.border = "1.5px solid red";
    peopleInputError.style.display = "block";
  } else {
    peopleInput.style.border = "";
    peopleInputError.style.display = "none";
  }
});

customTip.addEventListener("click", function () {
  customTip.placeholder = "";

  customTip.contentEditable = true;
});

resetBtn.addEventListener("click", function () {
  billInput.value = "";
  peopleInput.value = "";

  billInputError.style.display = "none";
  billInput.style.border = "";

  peopleInputError.style.display = "none";
  peopleInput.style.border = "";

  customTip.value = "";
  customTip.placeholder = "Custom";

  tipPrice.textContent = "$0.00";
  totalPrice.textContent = "$0.00";
});

tipBtn.forEach((element) => {
  element.addEventListener("click", function () {
    let tip = element.textContent.split("%")[0];

    if (billInput.value === 0 || peopleInput.value < 1) {
      return;
    }

    let bill = (billInput.value * tip) / 100;

    let tipTotal = bill / peopleInput.value;

    tipPrice.textContent = `$${tipTotal}`;
  });
});

customTip.addEventListener("keyup", function () {
  let tip = customTip.value;

  if (billInput.value === 0 || peopleInput.value < 1) {
    return;
  }

  let bill = (billInput.value * tip) / 100;

  let tipTotal = bill / peopleInput.value;

  tipPrice.textContent = `$${tipTotal}`;
});
