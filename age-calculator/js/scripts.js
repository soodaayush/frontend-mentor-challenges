"use strict";

let $ = document.querySelector.bind(document);

let submitBtn = $("#submit-btn");
submitBtn.addEventListener("click", submit);

let dayLabel = $("#day-label");
let dayInput = $("#day-input");
let dayError = $(".day-error");
let dayAmount = $("#day-amount");

let monthLabel = $("#month-label");
let monthInput = $("#month-input");
let monthError = $(".month-error");
let monthAmount = $("#month-amount");

let yearLabel = $("#year-label");
let yearInput = $("#year-input");
let yearError = $(".year-error");
let yearAmount = $("#year-amount");

let date = new Date();

function submit() {
  if (dayInput.value === "" || dayInput.value < 0) {
    dayLabel.style.color = "hsl(0, 100%, 67%)";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
    dayError.style.display = "inline-block";
  }

  if (
    monthInput.value === 1 ||
    monthInput.value === 3 ||
    monthInput.value === 5 ||
    monthInput.value === 7 ||
    monthInput.value === 8 ||
    monthInput.value === 10 ||
    monthInput.value === 12
  ) {
    if (dayInput.value > 31) {
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
      dayError.style.display = "inline-block";
    }
  } else {
    if (dayInput.value > 30) {
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
      dayError.style.display = "inline-block";
    }
  }

  if (
    monthInput.value === "" ||
    monthInput.value < 0 ||
    monthInput.value > 12
  ) {
    monthLabel.style.color = "hsl(0, 100%, 67%)";
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
    monthError.style.display = "inline-block";
  }

  if (yearInput.value === "" || yearInput.value > date.getFullYear()) {
    yearLabel.style.color = "hsl(0, 100%, 67%)";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
    yearError.style.display = "inline-block";
  }

  console.log(yearInput.value);

  let inputtedDate = new Date(
    `${monthInput.value}/${dayInput.value}/${yearInput.value}`
  );

  console.log(date)

  var diff = Math.floor(date.getTime() - inputtedDate.getTime());
  var secs = Math.floor(diff / 1000);
  var mins = Math.floor(secs / 60);
  var hours = Math.floor(mins / 60);
  var days = Math.floor(hours / 24);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);
  months = Math.floor(months % 12);
  days = Math.floor(days % 31);

  dayAmount.innerText = `${days}`;
  monthAmount.innerText = `${months}`;
  yearAmount.innerText = `${years}`;

  console.log(inputtedDate);
}
