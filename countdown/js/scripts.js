"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", initialize);

const dateSelect = $("#dateSelect");

const days = $("#days");
const hours = $("#hours");
const minutes = $("#minutes");
const seconds = $("#seconds");

function initialize() {
  checkLocalStorage();
  countdownTimer();
}

function countdownTimer() {
  const futureDate = new Date(dateSelect.value);
  const currentDate = new Date();

  var date1 = moment(currentDate);
  var date2 = moment(futureDate);

  var diff = date2.diff(date1);

  //const difference = futureDate - currentDate;
  const difference = diff;

  let remaining = "It's the new year!";

  if (futureDate < currentDate) {
    days.innerHTML = "";
    hours.innerHTML = "";
    minutes.innerHTML = "";
    seconds.innerHTML = "";
    alert("Please enter a date in the future");
    dateSelect.value = "";
    return;
  }

  if (difference > 0) {
    storeInLocalStorage(difference, currentDate);

    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 4
      ),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    remaining = Object.keys(parts)
      .map((part) => {
        return `${parts[part]} ${part}`;
      })
      .join(" ");

    days.innerHTML = `
      <h1>${parts.days}</h1>
    `;

    hours.innerHTML = `
      <h1>${parts.hours}</h1>
    `;

    minutes.innerHTML = `
      <h1>${parts.minutes}</h1>
    `;

    seconds.innerHTML = `
      <h1>${parts.seconds}</h1>
    `;
  }
}

setInterval(countdownTimer, 1000);

function storeInLocalStorage(difference, currentDate) {
  localStorage.setItem("difference", difference);
  localStorage.setItem("currentDate", currentDate);
}

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

  // let time = moment().millisecond(difference) + moment(currentDate).format('YYYY-MM-DDTHH:mm:ss.SSSZ');

  console.log(moment(difference).format("DD MMM YYYY hh:mm a"));

  // let time;
  // console.log(time);

  // let times = {
  //   days: Math.floor(time / (1000 * 60 * 60 * 24)),
  //   hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 4),
  //   minutes: Math.floor((time / 1000 / 60) % 60),
  //   seconds: Math.floor((time / 1000) % 60),
  // };

  //   days.innerHTML = `
  //   <h1>${times.days}</h1>
  // `;

  //   hours.innerHTML = `
  //   <h1>${times.hours}</h1>
  // `;

  //   minutes.innerHTML = `
  //   <h1>${times.minutes}</h1>
  // `;

  //   seconds.innerHTML = `
  //   <h1>${times.seconds}</h1>
  // `;
}

setInterval(checkLocalStorage, 1000);
