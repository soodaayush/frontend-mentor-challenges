("use strict");

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  console.log("DOM loaded");
}

function initialize() {
  setAmbiance();
  loadCountryData();
}

const flag = $("#flag");

const col1 = $("#col-1");
const col2 = $("#col-2");

const numberFormat = new Intl.NumberFormat();

let systemTheme =
  localStorage.getItem("systemTheme") === null
    ? "dark"
    : localStorage.getItem("systemTheme");

async function getCountryData() {
  const urlParams = new URLSearchParams(window.location.search);
  const country = urlParams.get("country");

  const url = `https://restcountries.eu/rest/v2/name/${country}`;

  let response = await fetch(url, {
    method: "GET",
  });

  let data = response.json();

  console.log(data);

  return data;
}

function setAmbiance() {
  if (systemTheme === "dark") {
    document.body.classList.remove("bg-light");
    document.body.classList.add("bg-dark");
  } else {
    document.body.classList.remove("bg-dark");
    document.body.classList.add("bg-light");
  }

  localStorage.setItem("systemTheme", systemTheme);
}

function loadCountryData() {
  let countryData = getCountryData();

  countryData.then((data) => {
    let country = data[0];

    console.log(country.flag);

    let flagImage = document.createElement("img");
    flagImage.src = `${country.flag}`;
    flagImage.style.width = "100%";

    flag.appendChild(flagImage);

    col1.innerHTML = `
        <h2>${country.name}</h2>
        <p>Native Name: ${country.nativeName}</p>
        <p>Population: ${numberFormat.format(country.population)}</p>
        <p>Region: ${country.region}</p>
        <p>Sub Region: ${country.subregion}</p>
        <p>Capital: ${country.capital}</p>
    `;

    col2.innerHTML = `
        <p>Top Level Domain: ${country.topLevelDomain}</p>
        <p>Currencies: ${country.currencies.name}</p>
        <p>Languages: ${country.languages.name}</p>
    `;
  });
}
