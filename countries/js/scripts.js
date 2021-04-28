"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

const lightMode = $("#lightMode");

lightMode.addEventListener("click", lightMode_Click);

const lightModeIcon = $("#lightModeIcon");

const search = $("#search");

const searchIcon = $("#searchIcon");

const filter = $("#filter");

filter.addEventListener("change", function () {
  filterByRegion();
});

let rowContent = $(".row-content");

const numberFormat = new Intl.NumberFormat();

let systemTheme =
  localStorage.getItem("systemTheme") === null
    ? "dark"
    : localStorage.getItem("systemTheme");

function initialize() {
  setAmbiance();
  loadCountries();
}

search.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    searchCountry();
  }
});

async function getData() {
  const url = "https://restcountries.eu/rest/v2/all";

  let response = await fetch(url, {
    method: "GET",
  });

  let data = response.json();

  return data;
}

async function getSpecificCountry(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;

  let response = await fetch(url, {
    method: "GET",
  });

  let data = response.json();

  return data;
}

async function getSpecificRegion(continent) {
  const url = `https://restcountries.eu/rest/v2/region/${continent}`;

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
        <a href="info.html?country=${country.name}" class="country">
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
        </a>        
      `;

      rowContent.appendChild(row);
    }
  });
}

function loadSearchData(countrySearch) {
  countrySearch = countrySearch.toLowerCase();

  let countryData = getSpecificCountry(countrySearch);

  countryData.then((data) => {
    for (let i = 0; i < data.length; i++) {
      let country = data[i];

      if (
        country.name.toLowerCase().includes(countrySearch) ||
        country.region.includes(countrySearch) ||
        country.capital.includes(countrySearch)
      ) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.display = "flex";
        row.style.gap = "40px";

        row.innerHTML = `
      <a href="info.html?country=${country.name}" class="country">
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
      </a>        
    `;

        rowContent.appendChild(row);
      }
    }
  });
}

function clearCountries() {
  rowContent.innerHTML = "";
}

function searchCountry() {
  if (search.value === "") {
    loadCountries();
    return;
  }

  clearCountries();
  loadSearchData(search.value);
}

function loadByRegion(continent) {
  let countryData = getSpecificRegion(continent);

  countryData.then((data) => {
    for (let i = 0; i < data.length; i++) {
      let country = data[i];

      let row = document.createElement("div");
      row.className = "row";
      row.style.display = "flex";
      row.style.gap = "40px";

      row.innerHTML = `
      <a href="info.html?country=${country.name}" class="country">
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
      </a>        
    `;

      rowContent.appendChild(row);
    }
  });
}

function filterByRegion() {
  clearCountries();
  loadByRegion(filter.value);
}
