let myHtml = document.querySelector(".html");

myHtml.style.scrollBehavior = "smooth";
myHtml.style.webkitFontSmoothing = "antialiased";
myHtml.style.mozOsxFontSmoothing = "grayscale";
myHtml.style.fontSize = "16px";
myHtml.style.lineHeight = "1.6";
myHtml.style.fontFamily = "Arial";

let myBody = document.querySelector(".body");

myBody.style.margin = "0";
myBody.style.backgroundColor = "hsl(0, 100%, 74%)";
myBody.style.backgroundImage = "url(../images/bg-intro-desktop.png)";

let noMargin = document.querySelectorAll(".nomargin");

noMargin.forEach((element) => {
  element.style.margin = "0";
});

let myContainer = document.querySelector(".container");

myContainer.style.width = "80%";
myContainer.style.margin = "auto";
myContainer.style.height = "100vh";
myContainer.style.display = "flex";
myContainer.style.justifyContent = "flex-start"
myContainer.style.alignItems = "center";

let myTitle = document.querySelector(".left-banner")

myTitle.style.display = "flex";
