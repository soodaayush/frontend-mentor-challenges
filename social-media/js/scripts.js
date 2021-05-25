"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  setAmbiance();
}

const themeMode = $("#themeMode");

const themeSwitch = $("#themeSwitch");

themeSwitch.addEventListener("click", themeSwitch_Click);

let systemTheme =
  localStorage.getItem("systemTheme") === null
    ? "dark"
    : localStorage.getItem("systemTheme");

function setAmbiance() {
  if (systemTheme === "dark") {
    document.body.classList.remove("bg-light");
    document.body.classList.add("bg-dark");

    themeMode.textContent = "Light Mode";
  } else {
    document.body.classList.remove("bg-dark");
    document.body.classList.add("bg-light");

    themeMode.textContent = "Dark Mode";
  }

  localStorage.setItem("systemTheme", systemTheme);
}

function themeSwitch_Click() {
  systemTheme = systemTheme === "dark" ? "light" : "dark";
  setAmbiance();
}
