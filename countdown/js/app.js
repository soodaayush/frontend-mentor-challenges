"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

const days = $("#days");
const hours = $("#hours");
const minutes = $("#minutes");
const seconds = $("#seconds");
const dateSelect = $("#dateSelect");

let targetDate = moment().format();

dateSelect.addEventListener("change", () => {
  const futureDate = new Date(dateSelect.value);
  const currentDate = moment().format();

  let date1 = moment(currentDate);
  let date2 = moment(futureDate);

  const difference = date2.diff(date1) / 1000;

  if (difference < 0) {
    days.innerHTML = "";
    hours.innerHTML = "";
    minutes.innerHTML = "";
    seconds.innerHTML = "";
    dateSelect.value = "";

    alert("Please enter a date in the future");
    return;
  }

  storeInLocalStorage(difference, currentDate);

  window.location.reload();
});

function initialize() {
  checkLocalStorage();
  countdown();
}

function storeInLocalStorage(difference, currentDate) {
  localStorage.setItem("difference", difference);
  localStorage.setItem("currentDate", currentDate);
}

function countdown() {
  console.log(targetDate);

  let currentDate = moment().format();

  let date1 = moment(currentDate);
  let date2 = moment(targetDate);

  const diff = date2.diff(date1);
  var dur = moment.duration(diff);

  let timeSeconds = dur.asSeconds();

  let times = {
    days: Math.floor(timeSeconds / (24 * 3600)),
    hours: Math.floor((timeSeconds % (3600 * 24)) / 3600) + 4,
    minutes: Math.floor((timeSeconds % 3600) / 60),
    seconds: Math.floor(timeSeconds % 60),
  };

  days.innerHTML = `
  <h1>${times.days}</h1>
`;

  hours.innerHTML = `
  <h1>${times.hours}</h1>
`;

  minutes.innerHTML = `
  <h1>${times.minutes}</h1>
`;

  seconds.innerHTML = `
  <h1>${times.seconds}</h1>
`;

  console.log(times.seconds);
}

setInterval(countdown, 1000);

function checkLocalStorage() {
  let difference = localStorage.getItem("difference");
  let currentDate = localStorage.getItem("currentDate");

  if (
    difference === null ||
    difference === undefined ||
    currentDate === null ||
    currentDate === undefined
  ) {
    return;
  }

  targetDate = moment(currentDate).add(difference, "s").format();
}

//on load check if local storage is already set with date and diff
//if it is set then
//take the current date + diff to calculate target date
//thats your target for ticker countdown

//if it is NOT set
//let user select the date
//once the date is selected, save it in local storage
//get it from local storage
//thats your target for ticker countdown
