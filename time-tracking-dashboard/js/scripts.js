"use strict";

let $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", getData);

let dailyFilter = $("#daily-filter");
let weeklyFilter = $("#weekly-filter");
let monthlyFilter = $("#monthly-filter");

let workTitle = $("#work-title");
let workHours = $("#work-hours");
let workPreviousHours = $("#work-previous-hours");

let playTitle = $("#play-title");
let playHours = $("#play-hours");
let playPreviousHours = $("#play-previous-hours");

let studyTitle = $("#study-title");
let studyHours = $("#study-hours");
let studyPreviousHours = $("#study-previous-hours");

let exerciseTitle = $("#exercise-title");
let exerciseHours = $("#exercise-hours");
let exercisePreviousHours = $("#exercise-previous-hours");

let socialTitle = $("#social-title");
let socialHours = $("#social-hours");
let socialPreviousHours = $("#social-previous-hours");

let selfCareTitle = $("#self-care-title");
let selfCareHours = $("#self-care-hours");
let selfCarePreviousHours = $("#self-care-previous-hours");

dailyFilter.addEventListener("click", changeFilterToDaily);
weeklyFilter.addEventListener("click", changeFilterToWeekly);
monthlyFilter.addEventListener("click", changeFilterToMonthly);

function changeFilterToDaily() {
  localStorage.setItem("filter", "daily");
  getData();
}

function changeFilterToWeekly() {
  localStorage.setItem("filter", "weekly");
  getData();
}

function changeFilterToMonthly() {
  localStorage.setItem("filter", "monthly");
  getData();
}

async function getData() {
  if (!localStorage.getItem("filter")) {
    localStorage.setItem("filter", "weekly");
  }

  let response = await fetch("../data.json");

  let responseJson = await response.json();

  console.log(responseJson[0].timeframes.weekly);

  if (localStorage.getItem("filter") === "daily") {
    workTitle.textContent = responseJson[0].title;
    workHours.textContent = responseJson[0].timeframes.daily.current + "hrs";
    workPreviousHours.textContent =
      "Last Week -" + " " + responseJson[0].timeframes.daily.previous + "hrs";

    playTitle.textContent = responseJson[1].title;
    playHours.textContent = responseJson[1].timeframes.daily.current + "hrs";
    playPreviousHours.textContent =
      "Last Week -" + " " + responseJson[1].timeframes.daily.previous + "hrs";

    studyTitle.textContent = responseJson[2].title;
    studyHours.textContent = responseJson[2].timeframes.daily.current + "hrs";
    studyPreviousHours.textContent =
      "Last Week -" + " " + responseJson[2].timeframes.daily.previous + "hrs";

    exerciseTitle.textContent = responseJson[3].title;
    exerciseHours.textContent =
      responseJson[3].timeframes.daily.current + "hrs";
    exercisePreviousHours.textContent =
      "Last Week -" + " " + responseJson[3].timeframes.daily.previous + "hrs";

    socialTitle.textContent = responseJson[4].title;
    socialHours.textContent = responseJson[4].timeframes.daily.current + "hrs";
    socialPreviousHours.textContent =
      "Last Week -" + " " + responseJson[4].timeframes.daily.previous + "hrs";

    selfCareTitle.textContent = responseJson[5].title;
    selfCareHours.textContent =
      responseJson[5].timeframes.daily.current + "hrs";
    selfCarePreviousHours.textContent =
      "Last Week -" + " " + responseJson[5].timeframes.daily.previous + "hrs";
  }

  if (localStorage.getItem("filter") === "weekly") {
    workTitle.textContent = responseJson[0].title;
    workHours.textContent = responseJson[0].timeframes.weekly.current + "hrs";
    workPreviousHours.textContent =
      "Last Week -" + " " + responseJson[0].timeframes.weekly.previous + "hrs";

    playTitle.textContent = responseJson[1].title;
    playHours.textContent = responseJson[1].timeframes.weekly.current + "hrs";
    playPreviousHours.textContent =
      "Last Week -" + " " + responseJson[1].timeframes.weekly.previous + "hrs";

    studyTitle.textContent = responseJson[2].title;
    studyHours.textContent = responseJson[2].timeframes.weekly.current + "hrs";
    studyPreviousHours.textContent =
      "Last Week -" + " " + responseJson[2].timeframes.weekly.previous + "hrs";

    exerciseTitle.textContent = responseJson[3].title;
    exerciseHours.textContent =
      responseJson[3].timeframes.weekly.current + "hrs";
    exercisePreviousHours.textContent =
      "Last Week -" + " " + responseJson[3].timeframes.weekly.previous + "hrs";

    socialTitle.textContent = responseJson[4].title;
    socialHours.textContent = responseJson[4].timeframes.weekly.current + "hrs";
    socialPreviousHours.textContent =
      "Last Week -" + " " + responseJson[4].timeframes.weekly.previous + "hrs";

    selfCareTitle.textContent = responseJson[5].title;
    selfCareHours.textContent =
      responseJson[5].timeframes.weekly.current + "hrs";
    selfCarePreviousHours.textContent =
      "Last Week -" + " " + responseJson[5].timeframes.weekly.previous + "hrs";
  }

  if (localStorage.getItem("filter") === "monthly") {
    workTitle.textContent = responseJson[0].title;
    workHours.textContent = responseJson[0].timeframes.monthly.current + "hrs";
    workPreviousHours.textContent =
      "Last Week -" + " " + responseJson[0].timeframes.monthly.previous + "hrs";

    playTitle.textContent = responseJson[1].title;
    playHours.textContent = responseJson[1].timeframes.monthly.current + "hrs";
    playPreviousHours.textContent =
      "Last Week -" + " " + responseJson[1].timeframes.monthly.previous + "hrs";

    studyTitle.textContent = responseJson[2].title;
    studyHours.textContent = responseJson[2].timeframes.monthly.current + "hrs";
    studyPreviousHours.textContent =
      "Last Week -" + " " + responseJson[2].timeframes.monthly.previous + "hrs";

    exerciseTitle.textContent = responseJson[3].title;
    exerciseHours.textContent =
      responseJson[3].timeframes.monthly.current + "hrs";
    exercisePreviousHours.textContent =
      "Last Week -" + " " + responseJson[3].timeframes.monthly.previous + "hrs";

    socialTitle.textContent = responseJson[4].title;
    socialHours.textContent =
      responseJson[4].timeframes.monthly.current + "hrs";
    socialPreviousHours.textContent =
      "Last Week -" + " " + responseJson[4].timeframes.monthly.previous + "hrs";

    selfCareTitle.textContent = responseJson[5].title;
    selfCareHours.textContent =
      responseJson[5].timeframes.monthly.current + "hrs";
    selfCarePreviousHours.textContent =
      "Last Week -" + " " + responseJson[5].timeframes.monthly.previous + "hrs";
  }
}
