let myBody = document.querySelector(".body");

myBody.style.margin = "0";
myBody.style.fontFamily = "Arial";
myBody.style.background = "#ccc";

let noMargin = document.querySelectorAll(".nomargin");

noMargin.forEach((element) => {
  element.style.margin = "0";
});

let myContainer = document.querySelector(".container");

myContainer.style.margin = "50px auto";
myContainer.style.display = "grid";
myContainer.style.gridTemplateColumns = "300px 300px 300px";
myContainer.style.gap = "20px";
myContainer.style.placeContent = "center";

let myCard = document.querySelectorAll(".card");

myCard.forEach((element) => {
  element.style.textAlign = "center";
  element.style.background = "#fff";
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.margin = "0 auto";
  element.style.width = "300px";
  element.style.height = "420px";
});

let perks = document.querySelectorAll(".perks");

perks.forEach((element) => {
  element.style.marginTop = "15px";
});

let titles = document.querySelectorAll(".title");

titles.forEach((element) => {
  element.style.paddingTop = "10px";
  element.style.paddingBottom = "10px";
  element.style.background = "#000";
  element.style.color = "#fff";
  element.style.marginTop = "0";
});
