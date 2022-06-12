"use strict";

let $ = document.querySelector.bind(document);

let submitBtn = $("#submitBtn");
console.log(submitBtn);

let ratingBtn1 = $("#ratingBtn1");
let ratingBtn2 = $("#ratingBtn2");
let ratingBtn3 = $("#ratingBtn3");
let ratingBtn4 = $("#ratingBtn4");
let ratingBtn5 = $("#ratingBtn5");

let ratingLabel = $("#ratingLabel");

let ratingModal = $("#ratingModal");
let thankYouModal = $("#thankYouModal");

submitBtn.addEventListener("click", submitRating);

ratingBtn1.addEventListener("click", function () {
  localStorage.setItem("rating", ratingBtn1.textContent);
});

ratingBtn2.addEventListener("click", function () {
  localStorage.setItem("rating", ratingBtn2.textContent);
});

ratingBtn3.addEventListener("click", function () {
  localStorage.setItem("rating", ratingBtn3.textContent);
});

ratingBtn4.addEventListener("click", function () {
  localStorage.setItem("rating", ratingBtn4.textContent);
});

ratingBtn5.addEventListener("click", function () {
  localStorage.setItem("rating", ratingBtn5.textContent);
});

function submitRating() {
  ratingLabel.textContent = `You selected ${localStorage.getItem(
    "rating"
  )} out of 5`;

  ratingModal.style.display = "none";
  thankYouModal.style.display = "flex";
}
