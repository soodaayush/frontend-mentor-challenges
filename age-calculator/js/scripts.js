"use strict";

let $ = document.querySelector.bind(document);

let submitBtn = $("#submit-btn");
submitBtn.addEventListener("click", submit);

let dayLabel = $("#day-label");
let dayInput = $("#day-input");
let dayError = $(".day-error");

let monthLabel = $("#month-label");
let monthInput = $("#month-input");
let monthError = $(".month-error");

let yearLabel = $("#year-label");
let yearInput = $("#year-input");
let yearError = $(".year-error");

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

  inputtedDate = new Date(
    `${monthInput.value}/${dayInput.value}/${yearInput.value}`
  );

  console.log(inputtedDate);
}
