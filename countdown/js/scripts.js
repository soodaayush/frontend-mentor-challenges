"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", countdownTimer);

const dateSelect = $("#dateSelect");

const days = $("#days");
const hours = $("#hours");
const minutes = $("#minutes");
const seconds = $("#seconds");

function countdownTimer() {
  const futureDate = new Date(dateSelect.value);
  const currentDate = new Date();

  const difference = futureDate - currentDate;

  let remaining = "It's the new year!";

  if (difference > 0) {
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
