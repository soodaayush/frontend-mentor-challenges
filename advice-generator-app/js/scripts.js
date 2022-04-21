"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

let adviceID = $("#adviceID");
let adviceBody = $("#adviceBody");

async function initialize() {
  console.log("DOM loaded");

  let url = "https://api.adviceslip.com/advice";

  let response = await fetch(url, {
    method: "GET",
  });

  let apiData = response.json();

  console.log(apiData);

  apiData.then((data) => {
    adviceID.textContent = `Advice #${data.slip.id}`;
    adviceBody.textContent = `"${data.slip.advice}"`;
  });
}
