("use strict");

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  setAmbiance();
  loadCountryData();
}

const back = $("#back");

const flag = $("#flag");

const col1 = $("#col-1");

const numberFormat = new Intl.NumberFormat();

let systemTheme =
  localStorage.getItem("systemTheme") === null
    ? "dark"
    : localStorage.getItem("systemTheme");

async function getCountryData() {
  const urlParams = new URLSearchParams(window.location.search);
  const country = urlParams.get("code");

  const url = `https://restcountries.com/v3.1/alpha/${country}`;

  let response = await fetch(url, {
    method: "GET",
  });

  let data = response.json();

  return data;
}

function setAmbiance() {
  if (systemTheme === "dark") {
    document.body.classList.remove("bg-light");
    document.body.classList.add("bg-dark");

    back.style.backgroundColor = "hsl(209, 23%, 22%)";
  } else {
    document.body.classList.remove("bg-dark");
    document.body.classList.add("bg-light");

    back.style.backgroundColor = "#ccc";
  }

  localStorage.setItem("systemTheme", systemTheme);
}

function loadCountryData() {
  let countryData = getCountryData();

  countryData.then((data) => {
    let country = data;

    let flagImage = document.createElement("img");
    flagImage.src = `${country[0].flags.svg}`;
    flagImage.style.width = "100%";

    flag.appendChild(flagImage);

    col1.innerHTML = `
        <h2>${country[0].name.official}</h2>
        <p>Population: ${numberFormat.format(country[0].population)}</p>
        <p>Region: ${country[0].region}</p>
        <p>Sub Region: ${country[0].subregion}</p>
        <p>Capital: ${country[0].capital}</p>
        <p>Top Level Domain: ${country[0].tld[0]}</p>
        <p>Calling Code: +${country[0].ccn3}</p>
    `;
  });
}
