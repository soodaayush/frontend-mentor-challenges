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

let myContainer = document.createElement("div");

document.body.appendChild(myContainer);

myContainer.className = "container";

let leftBanner = document.createElement("div");

myContainer.appendChild(leftBanner);

leftBanner.innerHTML =
  "<h1 >Learn to code by <br /> watching others</h1> <br /> <p>djaskhdkashdkjk";

// let noMargin = document.querySelectorAll(".nomargin");

// noMargin.forEach((element) => {
//   element.style.margin = "0";
// });

// myContainer = document.querySelector(".container");

// myContainer.style.width = "80%";
// myContainer.style.margin = "auto";
// myContainer.style.height = "100vh";
// myContainer.style.display = "flex";
// myContainer.style.justifyContent = "flex-start";
// myContainer.style.alignItems = "center";

// let myTitle = document.querySelector(".left-banner");

// myTitle.style.display = "flex";
// myTitle.style.justifyContent = "center";
// myTitle.style.alignItems = "center";
// myTitle.style.width = "20%";
// myTitle.style.flexDirection = "column";
// myTitle.style.flex = "1";
// myTitle.style.color = "#fff";

// let myHeader = document.querySelector(".title");

// myHeader.style.fontSize = "60px";
// myHeader.style.margin = "20px 0";
// myHeader.style.fontWeight = "700";
// myHeader.style.lineHeight = "1.2";

// let myParagraph = document.querySelector(".sentence");

// myParagraph.style.marginRight = "30px";

// let myForm = document.querySelector(".form");

// myForm.style.display = "flex";
// myForm.style.flexDirection = "column";
// myForm.style.width = "35%";
// myForm.style.marginRight = "20px";

// let myBanner = document.querySelector(".top-banner");

// myBanner.style.borderRadius = "15px";
// myBanner.style.margin = "20px 0";
// myBanner.style.display = "flex";
// myBanner.style.justifyContent = "center";
// myBanner.style.alignItems = "center";
// myBanner.style.color = "#fff";
// myBanner.style.padding = "20px 0";
// myBanner.style.width = "100%";
// myBanner.style.backgroundColor = "hsl(248, 32%, 49%)";

// let mySignup = document.querySelector(".signup-form");

// mySignup.style.display = "flex";
// mySignup.style.justifyContent = "flex-start";
// mySignup.style.backgroundColor = "#fff";
// mySignup.style.alignItems = "flex-start";
// mySignup.style.flexDirection = "column";
// mySignup.style.borderRadius = "15px";

// let myFormContent = document.querySelector(".signup");

// myFormContent.style.padding = "20px 0";
// myFormContent.style.width = "90%";
// myFormContent.style.margin = "20px";

// let myBox = document.querySelectorAll(".box");

// myBox.forEach((element) => {
//   element.style.margin = "auto 40px";
//   element.style.marginBottom = "20px";
// });

// let myInput = document.querySelectorAll(".signup-input");

// myInput.forEach((element) => {
//   element.style.width = "100%";
//   element.style.height = "45px";
//   element.style.paddingLeft = "20px";
//   element.style.borderRadius = "10px";
//   element.style.fontWeight = "800";
//   element.style.border = "1px solid gray";
//   element.style.outline = "none";
// });

// let myButton = document.querySelector(".submit-button");

// myButton.style.width = "91%";
// myButton.style.fontSize = "16px";
// myButton.style.margin = "auto 40px";
// myButton.style.textTransform = "uppercase";
// myButton.style.backgroundColor = "hsl(154, 59%, 51%)";
// myButton.style.color = "#fff";
// myButton.style.borderRadius = "5px";
// myButton.style.border = "none";
// myButton.style.padding = "20px 0";

// let myTerms = document.querySelector(".signup-terms");

// myTerms.style.display = "flex";
// myTerms.style.justifyContent = "center";
// myTerms.style.alignItems = "center";
// myTerms.style.textAlign = "center";
// myTerms.style.margin = "20px 0";

// let myLabel = document.querySelector(".label");

// myLabel.style.paddingRight = "10px";
// myLabel.style.fontSize = "13px";

// let myLink = document.querySelector(".link");

// myLink.style.color = "hsl(0, 100%, 74%)";
// myLink.style.fontWeight = "bold";
