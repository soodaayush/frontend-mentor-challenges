"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

const lightMode = $("#lightMode");

lightMode.addEventListener("click", lightMode_Click);

const lightModeIcon = $("#lightModeIcon");

const searchBox = $("#searchBox");
console.log(searchBox);

searchBox.addEventListener("Keyup", function (event) {
  if (event.keyCode === 13) {
    console.log("e");
    searchCountry();
  }
});

const searchIcon = $("#searchIcon");

const rows = $(".rows");
const rowContent = $(".row-content");

const numberFormat = new Intl.NumberFormat();

let systemTheme =
  localStorage.getItem("systemTheme") === null
    ? "dark"
    : localStorage.getItem("systemTheme");

function initialize() {
  setAmbiance();
  loadCountries();
}

async function getData() {
  const url = "https://restcountries.eu/rest/v2/all";

  let response = await fetch(url, {
    method: "GET",
  });

  let data = response.json();

  return data;
}

function setAmbiance() {
  if (systemTheme === "dark") {
    lightModeIcon.classList.remove("moon-dark");
    lightModeIcon.classList.add("moon-light");
    document.body.classList.remove("bg-light");
    document.body.classList.add("bg-dark");

    lightModeIcon.src = "images/moon-dark.svg";
    searchIcon.src = "images/search-dark.svg";
    lightMode.textContent = "Light Mode";
  } else {
    lightModeIcon.classList.remove("moon-light");
    lightModeIcon.classList.add("moon-dark");
    document.body.classList.remove("bg-dark");
    document.body.classList.add("bg-light");

    lightModeIcon.src = "images/moon-light.svg";
    searchIcon.src = "images/search-light.svg";
    lightMode.textContent = "Dark Mode";
  }

  localStorage.setItem("systemTheme", systemTheme);
}

function lightMode_Click() {
  systemTheme = systemTheme === "dark" ? "light" : "dark";
  setAmbiance();
}

function loadCountries() {
  let countryData = getData();

  countryData.then((data) => {
    for (let i = 0; i < data.length; i++) {
      let country = data[i];

      let row = document.createElement("div");
      row.className = "row";
      row.style.display = "flex";
      row.style.gap = "40px";

      row.innerHTML = `
        <div class="country">
            <div style="background-image:url(${
              country.flag
            }); background-size: cover; background-repeat: no-repeat;" class="flag">
            </div>
            <div class="info">
               <h4>${country.name}</h4>
               <p>Population: ${numberFormat.format(country.population)}</p>
               <p>Region: ${country.region}</p>
               <p>Capital: ${country.capital}</p>
            </div>
        </div>        
      `;

      rowContent.appendChild(row);
    }
  });
}

function searchCountry() {
  console.log("e");
  loadCountries(searchBox.value);
}
