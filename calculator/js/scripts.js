"use strict";

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  setThemeFromLocalStorage();
  setAmbiance();
}

let $ = document.querySelector.bind(document);

let selectedOperation;

const numberFormatter = Intl.NumberFormat();

const themeSwitch = $("#themeSwitch");

const userInput = $("#userInput");

// Theme

let colors = ["grey", "white", "purple"];
let index = 0;

function themeSwitch_Click() {
  index++;

  if (index >= colors.length) {
    index = 0;
  }

  setAmbiance(colors[index], index);

  console.log(index);
  console.log(colors[index]);
}

function setAmbiance(theme, index) {
  if (theme === "white") {
    document.body.classList.remove("bg-grey");
    document.body.classList.add("bg-white");
  } else if (theme === "purple") {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-purple");
  } else if (theme === "grey") {
    document.body.classList.remove("bg-purple");
    document.body.classList.add("bg-grey");
  } else {
    document.body.classList.add("bg-grey");
  }

  localStorage.setItem("theme", index);
}

function setThemeFromLocalStorage() {
  let theme = localStorage.getItem("theme");

  console.log(theme);

  if (theme === "1") {
    document.body.classList.add("bg-white");
  } else if (theme === "2") {
    document.body.classList.add("bg-purple");
  } else if (theme === "0") {
    document.body.classList.add("bg-grey");
  } else {
    document.body.classList.add("bg-grey");
  }
}

// Number

const numbers = document.querySelectorAll(".number");

// Operation

const operations = document.querySelectorAll(".operation");

// Delete, Decimal, Reset and Equal

const del = $("#delete");
const decimal = $("#dot");
const reset = $("#reset");
const equal = $("#eval");

// Event Listeners

// Theme

themeSwitch.addEventListener("click", themeSwitch_Click);

// Numbers

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    userInput.placeholder += number.textContent;
  });
});

// Operations

operations.forEach((operation) => {
  operation.addEventListener("click", function () {
    userInput.placeholder += " " + operation.textContent + " ";
    selectedOperation = operation.textContent;
  });
});

// Delete, Decimal, Reset and Equal

del.addEventListener("click", function () {
  let strReverse = userInput.placeholder;

  strReverse = strReverse.split("").reverse().join("");

  let deleteString = strReverse - 1;

  strReverse = strReverse.slice(strReverse - deleteString);

  strReverse = strReverse.split("").reverse().join("");

  userInput.placeholder = strReverse;
});

decimal.addEventListener("click", function () {
  userInput.placeholder += ".";
});

reset.addEventListener("click", function () {
  userInput.placeholder = "";
});

equal.addEventListener("click", function () {
  let getNumbers = userInput.placeholder.split(selectedOperation);
  getNumbers[0], getNumbers[1];

  if (selectedOperation === "+") {
    userInput.placeholder = numberFormatter.format(
      Number(getNumbers[0]) + Number(getNumbers[1])
    );
  }

  if (selectedOperation === "x") {
    userInput.placeholder = numberFormatter.format(
      Number(getNumbers[0]) * Number(getNumbers[1])
    );
  }

  if (selectedOperation === "-") {
    userInput.placeholder = numberFormatter.format(
      Number(getNumbers[0]) - Number(getNumbers[1])
    );
  }

  if (selectedOperation === "/") {
    userInput.placeholder = numberFormatter.format(
      Number(getNumbers[0]) / Number(getNumbers[1])
    );
  }
});
