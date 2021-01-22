let myHtml = document.querySelector(".html");

myHtml.style.scrollBehavior = "smooth";
myHtml.style.webkitFontSmoothing = "antialiased";
myHtml.style.mozOsxFontSmoothing = "grayscale";
myHtml.style.fontSize = "16px";
myHtml.style.lineHeight = "1.6";

let myBody = document.getElementsByTagName('body')[0];;
console.log(myBody);
myBody.style.margin = "0";
myBody.style.backgroundColor = "hsl(0, 100%, 74%)";
myBody.style.backgroundImage = 'url(images/bg-intro-desktop.png)';
// myBody.css('background-image', 'url(../images/bg-intro-desktop.png)');

let myContainer = document.createElement("div");

document.body.appendChild(myContainer);

myContainer.className = "container";

let leftBanner = document.createElement("div");

leftBanner.className = "left-banner";

myContainer.appendChild(leftBanner);

let heading = document.createElement("h1");

heading.className = "title";

heading.innerHTML = "Learn to code by <br /> watching others";

leftBanner.appendChild(heading);

let paragraph = document.createElement("p");

paragraph.className = "sentence";

paragraph.innerHTML =
  "See how experienced developers solve problems in real-time. <br /> Wathcing scripted tutorials is great, but understanding how <br /> developers think is invaluable";

leftBanner.appendChild(paragraph);

let form = document.createElement("div");

form.className = "form";

myContainer.appendChild(form);

let topBanner = document.createElement("div");

topBanner.className = "top-banner";

form.appendChild(topBanner);

let topLabel = document.createElement("label");

topLabel.innerHTML =
  "<strong>Try it free 7 days</strong> then $20/mo. thereafter";

topBanner.appendChild(topLabel);

let signUpForm = document.createElement("div");

signUpForm.className = "signup-form";

form.appendChild(signUpForm);

let SignUpBoxes = document.createElement("div");

SignUpBoxes.className = "signup";

signUpForm.appendChild(SignUpBoxes);

let box1 = document.createElement("div");

box1.className = "box";

SignUpBoxes.appendChild(box1);

let input1 = document.createElement("input");

input1.setAttribute("placeholder", "First Name");

input1.className = "input";

box1.appendChild(input1);

let box2 = document.createElement("div");

box2.className = "box";

SignUpBoxes.appendChild(box2);

let input2 = document.createElement("input");

input2.setAttribute("placeholder", "Last Name");

input2.setAttribute("text", "username");

input2.className = "input";

box2.appendChild(input2);

let box3 = document.createElement("div");

box3.className = "box";

SignUpBoxes.appendChild(box3);

let input3 = document.createElement("input");

input3.setAttribute("email", "username");

input3.className = "input";

box3.appendChild(input3);

input3.setAttribute("placeholder", "Email Address");

let box4 = document.createElement("div");

box4.className = "box";

SignUpBoxes.appendChild(box4);

let input4 = document.createElement("input");

input4.setAttribute("placeholder", "Password");

input4.setAttribute("password", "username");

input4.className = "input";

box4.appendChild(input4);

let submit = document.createElement("div");

submit.className = "submit";

SignUpBoxes.appendChild(submit);

let submitButton = document.createElement("button");

submitButton.innerHTML = "claim your free trial";

submitButton.className = "submit-button";

submit.appendChild(submitButton);

let terms = document.createElement("div");

terms.className = "signup-terms";

signUpForm.appendChild(terms);

let termsLabel = document.createElement("label");

termsLabel.className = "termlabel";

termsLabel.innerHTML = "By clicking the button, you are agreeing to our";

terms.appendChild(termsLabel);

let termsLink = document.createElement("a");

termsLink.className = "termlink";

termsLink.innerHTML = "Terms and Services";

terms.appendChild(termsLink);

let noMargin = document.querySelectorAll(".nomargin");

noMargin.forEach((element) => {
  element.style.margin = "0";
});

myContainer = document.querySelector(".container");

myContainer.style.width = "80%";
myContainer.style.margin = "auto";
myContainer.style.height = "100vh";
myContainer.style.display = "flex";
myContainer.style.justifyContent = "flex-start";
myContainer.style.alignItems = "center";

let myTitle = document.querySelector(".left-banner");

myTitle.style.display = "flex";
myTitle.style.justifyContent = "center";
myTitle.style.alignItems = "center";
myTitle.style.width = "20%";
myTitle.style.flexDirection = "column";
myTitle.style.flex = "1";
myTitle.style.color = "#fff";

let myHeader = document.querySelector(".title");

myHeader.style.fontSize = "60px";
myHeader.style.margin = "20px 0";
myHeader.style.fontWeight = "700";
myHeader.style.lineHeight = "1.2";
myHeader.style.marginRight = "30px";

let myParagraph = document.querySelector(".sentence");

myParagraph.style.marginRight = "30px";

let myForm = document.querySelector(".form");

myForm.style.display = "flex";
myForm.style.flexDirection = "column";
myForm.style.width = "45%";
myForm.style.marginRight = "20px";

let myBanner = document.querySelector(".top-banner");

myBanner.style.borderRadius = "15px";
myBanner.style.margin = "20px 0";
myBanner.style.display = "flex";
myBanner.style.justifyContent = "center";
myBanner.style.alignItems = "center";
myBanner.style.color = "#fff";
myBanner.style.padding = "20px 0";
myBanner.style.width = "100%";
myBanner.style.backgroundColor = "hsl(248, 32%, 49%)";

let mySignup = document.querySelector(".signup-form");

mySignup.style.display = "flex";
mySignup.style.justifyContent = "flex-start";
mySignup.style.backgroundColor = "#fff";
mySignup.style.alignItems = "flex-start";
mySignup.style.flexDirection = "column";
mySignup.style.borderRadius = "15px";
mySignup.style.padding = "20px 0";

let signUpBox = document.querySelector(".signup");

signUpBox.style.width = "95%";
signUpBox.style.padding = "20px 0";

let myBox = document.querySelectorAll(".box");

myBox.forEach((element) => {
  element.style.margin = "auto 40px";
  element.style.marginBottom = "20px";
});

let myInput = document.querySelectorAll(".input");

myInput.forEach((element) => {
  element.style.width = "100%";
  element.style.height = "45px";
  element.style.paddingLeft = "20px";
  element.style.borderRadius = "5px";
  element.style.fontWeight = "800";
  element.style.border = "1px solid gray";
  element.style.outline = "none";
});

let myButton = document.querySelector(".submit-button");
myButton.style.width = "89%";
myButton.style.fontSize = "16px";
myButton.style.margin = "auto 40px";
myButton.style.textTransform = "uppercase";
myButton.style.backgroundColor = "hsl(154, 59%, 51%)";
myButton.style.color = "#fff";
myButton.style.borderRadius = "5px";
myButton.style.border = "none";
myButton.style.padding = "20px 0";
myButton.style.cursor = "pointer";

let myTerms = document.querySelector(".signup-terms");

myTerms.style.display = "flex";
myTerms.style.justifyContent = "center";
myTerms.style.alignItems = "center";
myTerms.style.textAlign = "center";
myTerms.style.width = "100%";
myTerms.style.paddingBottom = "20px";

let myLabel = document.querySelector(".termlabel");

myLabel.style.paddingRight = "10px";
myLabel.style.fontSize = "11px";
myLabel.style.opacity = "0.5";

let myLink = document.querySelector(".termlink");

myLink.style.color = "hsl(0, 100%, 74%)";
myLink.style.fontWeight = "bold";
myLink.style.cursor = "pointer";
myLink.style.fontSize = "11px";
