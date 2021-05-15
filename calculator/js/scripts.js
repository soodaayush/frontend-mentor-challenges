"use strict";

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  setAmbiance();
}

let $ = document.querySelector.bind(document);

let selectedOperation;

const numberFormatter = Intl.NumberFormat();

const themeSwitch = $("#themeSwitch");

const input = $(".box");

// Theme

let theme =
  localStorage.getItem("systemTheme") === null
    ? "white"
    : localStorage.getItem("systemTheme");

function themeSwitch_Click() {
  theme = theme === "white" ? "grey" : "white";
  setAmbiance();
}

function setAmbiance() {
  if (theme === "white") {
    document.body.classList.remove("bg-grey");
    document.body.classList.add("bg-white");
  } else {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-grey");
  }

  localStorage.setItem("systemTheme", theme);
}

// Numbers

const one = $("#one");
const two = $("#two");
const three = $("#three");
const four = $("#four");
const five = $("#five");
const six = $("#six");
const seven = $("#seven");
const eight = $("#eight");
const nine = $("#nine");
const zero = $("#zero");

// Operations

const add = $("#add");
const subtract = $("#subtract");
const divide = $("#divide");
const multiply = $("#multiply");

// Delete, Decimal, Reset and Equal

const del = $("#delete");
const decimal = $("#dot");
const reset = $("#reset");
const equal = $("#eval");

// Event Listeners

// Numbers

themeSwitch.addEventListener("click", themeSwitch_Click);

one.addEventListener("click", function () {
  input.placeholder += "1";
});

two.addEventListener("click", function () {
  input.placeholder += "2";
});

three.addEventListener("click", function () {
  input.placeholder += "3";
});

four.addEventListener("click", function () {
  input.placeholder += "4";
});

five.addEventListener("click", function () {
  input.placeholder += "5";
});

six.addEventListener("click", function () {
  input.placeholder += "6";
});

seven.addEventListener("click", function () {
  input.placeholder += "7";
});

eight.addEventListener("click", function () {
  input.placeholder += "8";
});

nine.addEventListener("click", function () {
  input.placeholder += "9";
});

zero.addEventListener("click", function () {
  input.placeholder += "0";
});

// Operations

add.addEventListener("click", function () {
  input.placeholder += " + ";
  selectedOperation = add.textContent;
});

subtract.addEventListener("click", function () {
  input.placeholder += " - ";
  selectedOperation = subtract.textContent;
});

divide.addEventListener("click", function () {
  input.placeholder += " / ";
  selectedOperation = divide.textContent;
});

multiply.addEventListener("click", function () {
  input.placeholder += " x ";
  selectedOperation = multiply.textContent;
});

// Delete, Decimal, Reset and Equal

del.addEventListener("click", function () {});

decimal.addEventListener("click", function () {
  input.placeholder += ".";
});

reset.addEventListener("click", function () {
  input.placeholder = "";
});

equal.addEventListener("click", function () {
  let getNumbers = input.placeholder.split(selectedOperation);
  getNumbers[0], getNumbers[1];

  if (selectedOperation === "+") {
    input.placeholder = numberFormatter.format(
      Number(getNumbers[0]) + Number(getNumbers[1])
    );

    input.style.textAlign = "right";
  }

  if (selectedOperation === "x") {
    input.placeholder = numberFormatter.format(
      Number(getNumbers[0]) * Number(getNumbers[1])
    );

    input.style.textAlign = "right";
  }

  if (selectedOperation === "-") {
    input.placeholder = numberFormatter.format(
      Number(getNumbers[0]) - Number(getNumbers[1])
    );

    input.style.textAlign = "right";
  }

  if (selectedOperation === "/") {
    input.placeholder = numberFormatter.format(
      Number(getNumbers[0]) / Number(getNumbers[1])
    );

    input.style.textAlign = "right";
  }
});
