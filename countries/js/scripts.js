"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

const rows = $(".rows");
const rowContent = $(".row-content");

const numberFormat = new Intl.NumberFormat();

function initialize() {
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

function loadCountries() {
  let countryData = getData();

  countryData.then((data) => {
    for (let i = 0; i < data.length; i++) {
      let country = data[i];

      let row = document.createElement("div");
      row.className = "row";
      row.style.display = "flex";
      row.style.gap = "40px";

      //   rowContent.style.border = "1px solid red";

      //   let countryBox = document.createElement("div");
      //   countryBox.className = "country";

      //   let flag = document.createElement("img");
      //   flag.style.height = "50%";
      //   flag.style.width = "100%";
      //   flag.src = `${country.flag}`;

      //   let info = document.createElement("div");
      //   info.className = "info";

      //   info.innerHTML = `
      //   <h4>${country.name}</h4>
      //   <p>Population: ${numberFormat.format(country.population)}</p>
      //   <p>Region: ${country.region}</p>
      //   <p>Capital: ${country.capital}</p>
      // `;

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
