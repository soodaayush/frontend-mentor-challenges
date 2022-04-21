"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

let adviceID = $("#adviceID");
let adviceBody = $("#adviceBody");
let newAdviceBtn = $("#newAdviceBtn");

async function initialize() {
  let url = "https://api.adviceslip.com/advice";

  let response = await fetch(url, {
    method: "GET",
  });

  let apiData = response.json();

  apiData.then((data) => {
    adviceID.textContent = `Advice #${data.slip.id}`;
    adviceBody.textContent = `"${data.slip.advice}"`;
  });
}

newAdviceBtn.addEventListener("click", function () {
  initialize();
});
